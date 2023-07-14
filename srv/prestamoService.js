//const { Service } = require('sap-cds');
//const nodemailer = require('nodemailer');

module.exports = class say {
    hello(req) {  return `Hello ${req.data.to}!` }
}

/*module.exports = srv => {
  srv.on('sendEmail', async (req) => {
    const { to, subject, text } = req.data;

    console.log("Serv prueba");
    // Configurar el transporte SMTP
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Cambia esto por el host SMTP de tu proveedor de correo
        port: 465, // Cambia esto por el puerto SMTP de tu proveedor de correo
        secure: true, // Cambia esto a true si tu proveedor de correo requiere una conexión segura
        auth: {
            user: 'edgarjosejimenezruiz@gmail.com',
            pass: 'gdgwpmswpbthgcvj'
        }
    });

    // Configurar el contenido del correo electrónico
    let mailOptions = {
        from: 'testemail.edgar.com',
        to: 'edgarjosejimenezruiz2@gmail.com',
        subject: 'Correo de prueba',
        text: 'Este es un correo de prueba enviado desde SAP con Node.js'
      /*from: 'tu_correo@gmail.com',
      to: to,
      subject: subject,
      text: text
    };

    // Enviar el correo electrónico
    let info = await transporter.sendMail(mailOptions);

    return `Correo electrónico enviado: ${info.response}`;
  });
};*/