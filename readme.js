// npm init -y 
// npm i express mongoose 
// npm i jsonwebtoken cookie-parser bcrypt dotenv
// npm i multer  
// npm i ejs
// npm i config
// npm i express-session connect-flash 

const userModel = require("./models/user-model");


// git init 
// then add .gitignore [node_modules,.env];
// git add . 
// git commit -m "initial setup"

// -----------Reachers----------
// ==userModel 
// full name - string
// email  - string
// password  - string
// cart - array 
// isadmin - boolean
// orders - array
// contact - number
// picture - db


// ==product 
// img 
// name 
// price 
// discount
// bgcolor
// panelcolor
// textcolor

// create owner model sepration of consutions 
// create mongoose-connection 
// setup testing in postman  create blank collection

// npm i debug
// create development.json 
// npm i config

// ownerRouter ni under 
//  $env:NODE_ENV = 'development'
// jo  environment = development hase toj /create route open thase 

// have me environment production set karyu 
// $env:NODE_ENV='production'

// to have  maru environment production  thay se to config production.json nathi goti saktu 

// have hu fari development environment  set karis 
//  $env:NODE_ENV = 'development'

// create rout in ownerModel if you any  owner so dont create another owner and only development environment

// /signup or login
// /shop -> shop 
// /users/cart -> cart 
// /admin -> admin panel 
// /owner/product -> show all products
// /owner/admin -> show admin panel to create product

// create index.js in routes folder and render index.ejs
// create register rout in userRouter
// jwt key secret 
// so config / keys.js  

//app.js | require("dotenv").config(); a  line this jetla env set krya hase te use man avse anche 

// create loginUser in controller folder 
// then  create middlware folder in isLoggedin.js 

// npm i express-session connect-flash

// create  product in ownereRoute 
// npm i multer
// product model ni under image ne Buffer type apo 
// confing ni under multer-config.js banavo
// productRout ni under  create a  /create rout 

// ------add products--------
// brown 
// text 774F3D 
// panel DEBEAE 
// bgcolor F4DDD2 

// lightblue 
// text 48606E 
// panel D3E4EE 
// bgcolor F3F8FB 

// khaakibrown 
// text #5F4A30 
// panel #C5B695 
// bgcolor #C5B075 

// pink 
// text #816264 
// panel #F3C2F8 
// bgcolor #F4E4E1

// show header shop only not for index page

// userModel cart modify given the id