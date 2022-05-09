import express from 'express';
import {join} from 'path';
import {spawn} from 'child_process';
import {result} from './types';

const app = express();

// app.use(express.static(join(__dirname, '../public')));

app.get('/execmd', (req, res) => {
  console.log(req.query);
  if (!req.query.command) {
    res.send({
    error: 'Expecting a command',
  });
 } else {
    const args = (req.query.command as string).split(',');
    const com: string = args.shift();
    console.log(com);
    console.log(args[0]);
    const command = spawn(com, args);
    let result: result = {
      output: '',
    };
    command.stdout.on('data', (data: string) => {
      result.output += data.toString();
    });
    command.stderr.on('data', (data) => {
      result.output = 'Error:' + data.toString();
    });
    command.on('close', (code) => {
      res.send(result);
    });
  }
});

app.get('*', (_, res) => {
    res.send('<h1>404</h1>');
});
app.listen(3002, () => {
  console.log('Server is up on port 3002');
});
