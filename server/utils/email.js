const nodemailer = require('nodemailer');
const sentMail = async (member_mail) => {
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: '36213398738@mby.co.il',
            pass: 'Student@264'
        }
    });

    var mailOptions = {
        from: '36213398738@mby.co.il',
        to: member_mail,
        subject: 'check my app in the seminar',
        text: 'hi, love you! verify mail success',
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return 'verify mail failed'

        } else {
            console.log('Email sent: ' + info.response);
            return 'we sent you mail';
        }
    });
}

module.exports ={
    sentMail
};
