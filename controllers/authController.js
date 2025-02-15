const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');

module.exports.registerUser =async  function (req,res){
    try{
        let  {fullname,email,password} = req.body;

        let user = await userModel.findOne({email:email});
        if(user){
            res.status(401).send('user already exists');
        }

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if(err) return res.status(err.message);
                else {
                    let user = await userModel.create({
                        fullname,
                        email,
                        password:hash,

                    });
                    
                    // console.log(user);
                    // jwt ne utils folder ma chee 
                    let token =  generateToken(user);
                    res.cookie("toekn",token);      
                    res.send("user created successfully");
                    // req.flash('success','user created');
                    // res.redirect('/');
                }
            })
        })

        
    }
    catch(error){
        res.send(error.message);
    }
};

module.exports.loginUser = async function (req, res) {
    try {
        console.log("Request Body:", req.body);
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });

        if (!user) {
            req.flash("error", 'Email not found');
            return res.redirect("/");
        }

        const result = await bcrypt.compare(password, user.password);
        if (result) {
            let token = generateToken(user);
            console.log("Generated Token:", token); // Debugging
            res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
            return res.redirect("/shop");
        } else {
            req.flash("error", 'Invalid password');
            return res.redirect('/');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.logout = function (req, res) {
    res.cookie("token");
    res.redirect("/");
};
