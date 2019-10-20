const express=require('express');
const morgan=require('morgan');
const parser= require('body-parser');
const mongoose=require('mongoose');
const app=express();
const port=3001;

//let count=0;
mongoose.connect("mongodb+srv://utkarshkoushik00:ut6060007@uk007-4lmzk.mongodb.net/test?retryWrites=true&w=majority",function(err){
    if(err){
        console.log("error");
    }
    else {
        console.log('Atlas connected')
    }
});
const users=require('./routes/user');
const farmer=require('./routes/farmer');
//const products=require('./routes/products.js')
//const orders=require('./routes/order.js')

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({entended:true}));
app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});
app.use('/users',users);
app.use('/farmer',farmer);
//app.use('/products',products);
//app.use('/orders',orders);
//app.get('*',function(req,rea,next)
//{
  //  count++;
    //next();
//});
//app.get('/',function(req,res)
//{device-widthdevice-width
//    res.send("hello world");
//});
//app.get('/test',function(req,res)
//{
//    res.send("hello again").status(200);
//})

//app.get('/count',function(req,res){
 //   res.send(count.toString()).status(200);
//})



app.listen(port,function()
    {
        console.log(`Server is listening on ${port}`);
    }
);