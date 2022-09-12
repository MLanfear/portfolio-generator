const inquirer = require('inquirer');

//const fs = require('fs');

//const generatePage = require('./sec/page-template');

//const pageHTML = generatePage(name, github);




//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;
  
//  console.log('Portfolio complete! Check out index.html to see the output!');
//});

const promptUser = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
        
    ]);
};
promptUser().then(answers => console.log(answers));
