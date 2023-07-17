module.exports = class say {
    hello(req) {
  
      console.log("entro en sendEmail");
      console.log(req.body);
      const nodemailer = require('nodemailer');
  
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Cambia esto por el host SMTP de tu proveedor de correo
        port: 465, // Cambia esto por el puerto SMTP de tu proveedor de correo
        secure: true, // Cambia esto a true si tu proveedor de correo requiere una conexión segura
        auth: {
          user: 'tenesis.sybven@gmail.com',
          pass: 'ldxibxhibbhhtzqe'
        }
      });
  
      let mailOptions = {
        from: 'tenesis.sybven@gmail.com',
        to: 'tenes.manuel@gmail.com',
        subject: 'Correo de prueba',
        text: 'Este es un correo de prueba enviado desde SAP con Node.js'
      };
  
      //let info = await transporter.sendMail(mailOptions);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error al enviar el correo:', error);
        } else {
          console.log('Correo enviado:', info.response);
        }
      });
  
      return `Hello ${req.data.to}!`
    }
  }