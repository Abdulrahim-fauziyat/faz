         const express = require("express"); //create REST api
         const bodyParser = require("body-parser"); // helps to request/parse to json
         require("dotenv").config(); //read values from dotenv files(env means enviroment variables)
         const cors = require("cors"); // cross origin resource sharing
         const nodemailer = require('nodemailer');
       

         const jwt = require('jsonwebtoken')



         const secretKey = require('crypto').randomBytes(64).toString('hex');
         console.log('JWT_Secret_Key:', secretKey);


         const bcrypt = require("bcrypt");
         const saltRounds = 10;

         const connectDb = require("./database.js");

         const app = express();
         const port = process.env.PORT;

         //Register middlewares
         app.use(bodyParser.json());
         app.use(cors()); //enable the cors policy to all

         //connection
         connectDb();

         // create the REST API
         // CRUD-
         app.post("/register", (req, res) => {
         const userModel = require("./models/UserModel.js");
         // hashpassword
         bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) res.status(500).json({ Error: err });

            const { fullName, phone, email } = req.body;

            new userModel({ fullName, phone, email, password: hash })
               .save()
               .then((user) => {
               return res.status(200).json({
                  msg: " success",
                  record: user,
               });
               });
         });
         });

         

         app.post("/login", (req, res) => {
         const UserModel = require("./models/UserModel.js");
         const { email, password } = req.body;

         UserModel.findOne({ email: email }).then((user) => {
            bcrypt.compare(password, user.password, function (err, result) {
               if (!err && result === true)
               return res.status(200).json({
                  msg: "success",
                  result: result,
                  user: user,
               });
            });
         });

        
         });

         //api for forget password
           
          app.post('/forgotpassword',(req,res) =>{
            const  UserModel = require("./models/UserModel.js");
            const {email} =req.body;
            UserModel.findOne({email:email})
            .then(user =>{
               if(!user){
                  return res.send({status:"User not Found"})
               }else{
                  const token =jwt.sign({id:user._id}, "JWT_Secret_Key")    //,{expiresIn:"Id"}

                  const transporter = nodemailer.createTransport({
                     service: 'gmail',
                     auth: {
                       user: 'omoteabdulrahimfauziyat@gmail.com',
                       pass: 'frrg okng akrl xbam'
                     }
                   });
                   
                   const mailOptions = {
                     from: 'omoteabdulrahimfauziyat@gmail.com',
                     to:   user.email,
                     subject: ' Reset password Link',
                     text: `http://localhost:5173/createpassword/${user._id}/${token}`
                   };
                   
                   transporter.sendMail(mailOptions, function(error, info){
                     if (error) { 
                       console.log(error);
                     } else {
                      return res.send({status:"success"})
                     }
                   });
               } 

            })

          })

        
        app.post('/createpassword', (req,res)=>{
         const  UserModel = require("./models/UserModel.js");
            // const {id, token} = req.params
            const {password,confirmPassword, id,token } =req.body
            if(password !==  confirmPassword){
               return res.json({msg:"password mismatched"})
            }
            jwt.verify(token,"JWT_Secret_Key", (err, decoded) =>{
               if(err){
                  return res.json({status:"Error with token"})
               } else{

                  bcrypt.hash(password, 10)
                  .then(hash=>{
                     UserModel.findByIdAndUpdate({_id: id}, {password: hash})
                     .then(u => res.send ({status:"success"}))
                     .catch(err => res.send({status:err}))
                  })
                  .catch(err => res.send({status:err}))
               }
            })
        })
      

        app.post('/dashboard/profile', (req, res) => {
         const UserModel = require("./models/UserModel.js");
         const bcrypt = require("bcrypt");
     
         const { oldPassword, newPassword, confirmPassword } = req.body;
     
         if (oldPassword === newPassword || newPassword !== confirmPassword) {
             return res.json({ msg: "password error" });
         } else {
             bcrypt.hash(newPassword, 10)
                 .then(hash => {
                    
                     UserModel.findByIdAndUpdate(req.user.id, { password: hash })
                         .then(() => res.json({ status: "success" })) // No need to send user data back, just status
                         .catch(err => res.json({ status: err.message })); // Sending error message
                 })
                 .catch(err => res.json({ status: err.message }));
         }
     });
     



         app.get("/users", (req, res) => {
         const UserModel = require("./models/UserModel.js");
         UserModel.find().then((user) => {
            return res.status(200).json({
               msg: "success",
               records: user,
            });
         });
         });

         // make a get request for dashboard histroy
         
         app.get("/dashboard/history", (req, res) => {
            const UserModel = require("./models/UserModel.js");
            UserModel.find()
                .then((users) => {
                    return res.status(200).json({
                        msg: "success",
                        records: users,
                    });
                })
                .catch((error) => {
                    console.error(error); 
                    return res.status(500).json({ msg: "Internal server error" });
                });
        });
        







         app.listen(port, () => {
         console.log(`app listening on port ${port}`);
         });




         
         //nodemon means node monitor to run that index.js or to monitor changes in the database
         //CRUD operation MEANS CREATE READ UPDATE DELETE
         // endpoint is an individual resource
         //an API can contain many endpoints
