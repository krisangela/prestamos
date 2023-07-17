module.exports = class say {
  sendMail(req) {

    console.log("entro en sendMail");
    console.log(req.data);
    const { to } = req.data;
    console.log(to);
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
      to: to,
      subject: 'solicitud de Crédito',
      text: 'Estimado/a cliente queremos notificarle que la solicitud de credito fue aprobada'
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