// const express = require("express");
// const path=require("path");
// const port=900;
// const app=express();

// // for serving static files 
// app.use('/static',express.static('static'));

// // set the template engine as pug 
// app.set('view engine','pug');

// // set the views directory 
// app.set('views',path.join(__dirname,'views'))  

// // our pug demo nd point 
// app.get("/demo", (req,res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
// });


// app.get("/", (req,res)=>{
//     res.status(200).send("This is my home page")
// });
// app.get("/about", (req,res)=>{
//     res.send("This is about page")
// });
// app.post("/about", (req,res)=>{
//     res.send("This is post about page")
// });
// // app.get("/contcact", (req,res)=>{
// //     res.send("This is contact page")
// // });
// app.get("/this",(req,res)=>{
//     res.status(504).send("this is not found here");
// })

// app.listen(port, ()=>{
//     console.log(`the application started successfully on port ${port}`)
// })

const express =require("express");
const path=require("path");
const app=express();
const port=process.env.PORT ||80;
const fs=require("fs");

// express specific stuff 
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// pug special stuff 
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// end points 
app.get('/',(req,res)=>{
    const con= "this is the best content on the interent so far so use it wisely"
    const params={'title':'pubg is the best game','content' :con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
     nam = req.body.nam
     age =req.body.age
     gender=req.body.gender
     address=req.body.address
     let outputToWrite=`the name of cleint is ${nam} ,age is${age},is a ${gender},available at ${address}`
     fs.writeFileSync('output.txt',outputToWrite); 
     const param={'message':'submitted successfully'};
     res.status(200).render('index.pug',param);
}) 


// start the server 
app.listen(port, ()=>{
        console.log(`the application started successfully on port ${port}`)
     })



 