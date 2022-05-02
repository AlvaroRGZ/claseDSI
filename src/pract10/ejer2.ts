import * as fs from 'fs';
import {spawn} from 'child_process';

abstract class WordCounter {
  protected file_: string;
  constructor(protected filename_: string, protected word_: string) {
    this.file_ = 'src/pract10/' + filename_;
  }
  protected abstract countWord(): number;
}

class WordCounterWithPipe extends WordCounter {
  constructor(file_: string, word_: string) {
    super(file_, word_);
  }
  countWord(): number {
    let ocurrences: number = 0;
    if (fs.existsSync(this.file_)) {
      const cat = spawn('cat', [this.file_]);
      const grep = spawn('grep', [this.word_]);
      cat.stdout.pipe(grep.stdin);
      grep.stdout.on('data', (data) => {
        data.toString().replace(/,/g, ' ').split(' ').forEach((e: string) => {
          e.trim();
          if (this.word_ === e) {
            ocurrences++;
          }
        });
      });
      grep.stdout.on('close', () => {
        console.log(`Word "${this.word_}" was found ${ocurrences} times using pipe.`);
      });
    } else {
      console.error(`${this.filename_} not exist.`);
      ocurrences = -1;
    }
    return ocurrences;
  }
}

class WordCounterSubprocesses extends WordCounter {
  constructor(file_: string, word_: string) {
    super(file_, word_);
  }
  countWord(): number {
    let ocurrences: number = 0;
    if (fs.existsSync(this.file_)) {
      const cat = spawn('cat', [this.file_]);
      const grep = spawn('grep', [this.word_]);
      cat.stdout.pipe(grep.stdin);
      grep.stdout.on('data', (data) => {
        data.toString().replace(/,/g, ' ').split(' ').forEach((e: string) => {
          e.trim();
          if (this.word_ === e) {
            ocurrences++;
          }
        });
      });
      grep.stdout.on('close', () => {
        if (ocurrences > 0) {
          console.log(`Word "${this.word_}" was found ${ocurrences} times.`);
        } else {
          console.log(`Word "${this.word_}" not found.`);
        }
      });
    } else {
      console.error(`${this.filename_} not exist.`);
      ocurrences = -1;
    }
    return ocurrences;
  }
}

const cw = new WordCounterWithPipe(process.argv[2], process.argv[3]);

cw.countWord();

const cs = new WordCounterSubprocesses(process.argv[2], 'increible');

cs.countWord();
