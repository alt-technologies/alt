const nodemailer = require('nodemailer');


function sendMail(mailto, mailsubject, mailhtml, text, attachments) {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "zahid.rsldubai@gmail.com",
                pass: "jmkziuhdphojzzop",
            }
        });
        var mailOptions = {
            from: "ALT-Technologies",
            to: mailto,
            subject: mailsubject,
            html: mailhtml,
            text: text,
            replyTo: "zahidkhanb9111@gmail.com",
            attachments: attachments,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    sendMail
};