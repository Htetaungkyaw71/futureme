const express = require("express")
const app = express();
const bodyparser = require("body-parser");
const ejs = require("ejs");
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
var nodemailer = require('nodemailer');


var nodemailer = require('nodemailer');




app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/",(req,res)=>{
    let year = req.body.year;
    let today = new Date().getFullYear()
    if(year == today){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'htetaung200071@gmail.com',
              pass: '30221018'
            }
          });
          
          var mailOptions = {
            from: req.body.email,
            to: req.body.email,
            subject: 'Dear Future me',
            text: req.body.text
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                res.render('success')
              console.log('Email sent: ' + info.response);
            }
          });
    }
   
})

app.listen(3000,(req,res)=>{
    console.log("server is running")
})
