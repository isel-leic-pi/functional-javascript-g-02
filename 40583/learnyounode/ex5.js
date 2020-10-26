  
const fs = require('fs');

const dirname = process.argv[2];
const ext = process.argv[3];
const pat = RegExp('\\.' + ext + '$');

file = fs.readdir(dirname, function(err, files) {
  for (i = 0; i < files.length; i++) {
    if (pat.test(files[i])) {
      console.log(files[i]);
    }
  }
});