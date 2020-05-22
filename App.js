const fs = require('fs');

/* 1. Create a method to get all the files inside a given path */

const getFiles = path => {
    fs.readdir(path, (err, files) => {
        err ? console.log(err)
            : (
               printFiles(files),
               inverseSortFiles(files),
               getFilesStartingOneLetter(files)
            )
    })
}

/* 2. Create a method to print all the files*/

const printFiles = files => {
    console.log(files);
}

/* 3. Create a method to inverse sort and print the files of a given path */

const inverseSortFiles = file => {
    files ? console.log(files.sort().reverse()) 
          : console.log('Error');
}

/* 4. Create a method to get the amount of files starting with one letter*/

const getFilesStartingOneLetter = (files, letter) => {

    let amount = 0;

    files.map((file) => {
        if(file.charAt(0) === letter) {
            amount = amount + 1;
        }
    });
        
    console.log('The amount of files starting with one letter is ' + amount);

}

       
