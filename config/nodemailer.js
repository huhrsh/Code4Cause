const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user:'blissofficialindia',
        pass:'ikfsjkoxlwtatozc'
    }
  });
  
  let renderTemplate = (data, relativePath) => {
    return new Promise((resolve, reject) => {
      ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function (err, template) {
          if (err) {
            console.log('Error in rendering template:', err);
            reject(err);
          } else {
            resolve(template);
          }
        }
      );
    });
  };
  
  module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
  };