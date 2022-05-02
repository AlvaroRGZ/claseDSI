import {spawn} from 'child_process';
import * as net from 'net';

const server = net.createServer({allowHalfOpen: true}, (connection) => {
console.log('A client has connected.');
let recCommand;
let datos = '';

connection.on('data', (data) => {
    console.log('Recibi \n', data.toString());
    datos += data.toString();
    connection.write('Comando Recibido');
});
connection.on('end', () => {
    recCommand = JSON.parse(datos);
    const proc = spawn(recCommand.command, recCommand.params);
    let info = '';
    proc.on('data', (data) => {
        info += data.toString();
        console.log(data.toString());
        connection.write('datos');
    });
    proc.on('close', () => {
        connection.write(info);
    });
});

connection.on('close', () => {
    console.log('A client has disconnected.');
});
}).listen(60300, () => {
    // server.keepAlive = true;
    console.log('Waiting for clients to connect.');
});

