const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');
const DBconnect=require('./config/dbConnection');

DBconnect();
const app=express();


app.use(express.json());
app.use(cors());
app.use('/api/blogs', require('./router/blogsRouter'));

const port=process.env.PORT||8001;
app.listen(port, ()=>{
	console.log(`localhost:${port}`);
});





