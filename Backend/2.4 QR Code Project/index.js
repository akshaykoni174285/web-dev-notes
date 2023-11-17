/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qrImage from 'qr-image';
import * as fs from 'fs';




const questions = [
    {
      type: 'input',
      name: 'url',
      message: 'Enter your url:',
    }
]

inquirer.prompt(questions).then((answers) => {
    // Process the user's answers
    console.log('User Input:');
    console.log(answers['url']);
    var qr_code = qrImage.image(`${answers['url']}`, { type: 'png' });

    var outputstream = fs.createWriteStream('qr_code.png');

    qr_code.pipe(outputstream);
  });






