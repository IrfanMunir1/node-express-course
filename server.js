const express = require('express');
const app = express();

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


app.listen(8000,function(){console.log('server is listening')})