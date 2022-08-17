import nodemailer from 'nodemailer'


let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "da4c6e40a2cf42",
    pass: "b62644696c75fd"
  }
  });


export const sendEmail = async ( to, subject, text ) => {

    await transport.sendMail({
        from : 'humayunkabir9408@gmail.com',
        to : to,
        subject : subject,
        text : text
    })

}