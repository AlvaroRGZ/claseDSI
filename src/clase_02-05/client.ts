import * as net from 'net';

const client = net.connect({port: 60300});

let wholeData = '';
client.write(JSON.stringify({command: 'ls', params: ['/home/usuario/repo7/src/clase_02-05']}));

client.on('data', (dataChunk) => {
  wholeData += dataChunk.toString();
  console.log(dataChunk.toString());
});

client.on('end', () => {
  console.log('Datos recibidos: \n');
  console.log(wholeData);
/*
  if (message.type === 'watch') {
    console.log(`Connection established: watching file ${message.file}`);
  } else if (message.type === 'change') {
    console.log('File has been modified.');
    console.log(`Previous size: ${message.prevSize}`);
    console.log(`Current size: ${message.currSize}`);
  } else {
    console.log(`Message type ${message.type} is not valid`);
  } */
});
