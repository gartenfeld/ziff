const fs = require('fs');
const path = require('path');
const shell = require('child_process');


const FILE_PATH = path.resolve(__dirname, './numbers.txt');
const OUTPUT_DIR = 'aiff/';
const FORMAT = '.aiff';

var raw = fs.readFileSync(FILE_PATH, 'utf-8');
var lines = raw.trim().split('\n');

lines.forEach(num => {
  var cmd = 'say';
  var voice = 'Petra';
  var outputPath = path.resolve(__dirname, OUTPUT_DIR + num + FORMAT);
  console.log(outputPath);
  var args = [
    '-v',
    '\"' + voice + '\"',
    '\"' + num + '\"',
    '-o',
    outputPath
  ];
  shell.execSync(cmd + ' ' + args.join(' '));
});

// lame -m m greetings.aiff greetings.mp3
