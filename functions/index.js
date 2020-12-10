const functions = require('firebase-functions')

const admin=require('firebase-admin');
const nodemailer =require('nodemailer');

admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('details/{Id}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });
authData.sendMail({
from :'brainvitacse@gmail.com',
to:`${data.email}`,
subject:'Thanks you for subscribing to our newsletter. You will receive our next weekly newsletter.I hereby confirm that I will stop sending you the newsletter',
text:`${data.text}`,
html:`${data.name}`,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});