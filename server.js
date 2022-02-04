const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const mockUserData=[
{name:"Bill"},
{name:"Jill"}

]

app.get('/users',function(req,res){
    res.json({
        success:true,
        message:'successfull got users. Great!',
        users: mockUserData

    })

})

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({

        success:true,
        message:'got one user',
        users: req.params.id        
    })

})

app.post('/login',function(req,res){
    
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;

    console.log(req.body.username);
    console.log(req.body.password);
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.listen(8000,function(){console.log('server is listening')})