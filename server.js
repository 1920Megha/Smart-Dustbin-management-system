const express = require('express')
const path = require('path')
const app= express();
const port = 300
const fs=require('fs');
const http = require('http');
const login=fs.readFileSync('login.html','utf-8')
const popup=require('node-popup');
const bodyParser= require('body-parser'); //when user fill login , the info snd back to server . body-parser moule is middleware that parse user ip and makes it available through req body
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,resp)=>{
   // resp.status(200).send('<h1>megha</h1>')
   // resp.send(" hello ") //json response ... we cat us json n html response together 
   //let path=request.url;
   resp.sendFile(path.join(__dirname,'login.html'))
})

// Post route to handle form submission logic and
app.post(
   '/',(req,resp)=> {
     
     let email=req.body.email;
     let password=req.body.password;
     if(password == `megha` & email ==`megha@gmail`){
      resp.sendFile(path.join(__dirname,'area.html'))
		
	}
    else if(password != `megha` || email !=`megha@gmail`){
      //resp.body.style.background = 'Yellow';
      //resp.send('<h1>incorrect</h1>')
      resp.sendFile(path.join(__dirname,'login.html'))
    }
 })

/*app.post('/',(req,resp)=>{
   let email=req.body.email;
   let password=req.body.password;
  
   resp.send(`Email:${email} Password:${password}`);
})*/
app.get('/area_info.html',(req,resp)=>{
   // resp.status(200).send('<h1>megha</h1>')
   resp.sendFile(path.join(__dirname,'area_info.html')) //json response ... we cat us json n html response together 
})
app.get('/login.html',(req,resp)=>{
   // resp.status(200).send('<h1>megha</h1>')
   resp.sendFile(path.join(__dirname,'login.html')) //json response ... we cat us json n html response together 
})
app.get('/complain.html',(req,resp)=>{
   // resp.status(200).send('<h1>megha</h1>')
   resp.sendFile(path.join(__dirname,'complain.html')) //json response ... we cat us json n html response together 
})
app.get('/area.html',(req,resp)=>{
   // resp.status(200).send('<h1>megha</h1>')
   resp.sendFile(path.join(__dirname,'area.html')) //json response ... we cat us json n html response together 
})
app.get('/assets/img/4.png',(req,resp)=>{
   // resp.status(200).send('<h1>megha</h1>')
   resp.sendFile(path.join(__dirname,'4.png')) //json response ... we cat us json n html response together 
})

//create server 
app.listen(port,()=>{
    console.log("server started ")
})

