import * as fs from 'fs';
import {spawn} from 'child_process';

const filePath: string = '/home/usuario/repo7/dataClase25/' + process.argv[2];
if (process.argv.length >= 4) {
	if (fs.existsSync(filePath)) {
		fs.watchFile(filePath, (curr, prev) => {
			console.log(`Watching ${process.argv[2]}`);
			console.log(`File size was ${prev.size} bytes before it was modified`);
			console.log(`Now file size is ${curr.size} bytes`);

			const cut = spawn('cut', ['-d', ',', '-f', process.argv[3], filePath]);
			let v: string[] = [];
			let wcOutput = '';
			cut.stdout.on('data', (piece) => wcOutput += piece);
			cut.on('close', () => {
				v = wcOutput.split('/\s+/');
				v.forEach((element) => {
					console.log(element);
				});
			});
		});
	}
}
