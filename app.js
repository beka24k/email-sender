const nodemailer = require('nodemailer');
const express= require('express');

const app=express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
let email=req.query.email;
var transporter =nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth:{
        user:"begarys0505@mail.ru",
        pass: "kZc2D0d9XmR0z1ftyH4p"
    }
});
var mailOptions = {
    from: 'begarys0505@mail.ru',
    to: email,
    subject:'Sending by using Node.js',
    text:'Hello from app.js'
};
if (email != null){
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: ' + info.response);
    }
});
};
res.render("index.ejs");
});
app.listen(3000);