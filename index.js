const express= require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth")
const FormdkiRoute=require("./routes/Formdki")
const GoiVaccineRoute=require("./routes/GoiVaccine")
const LichtiemRoute=require("./routes/Lichtiem")
const MessageRoute=require("./routes/Message")
const NewsRoute=require("./routes/News")
const UserRoute=require("./routes/Users")
const VaccineRoute=require("./routes/Vaccine")
const Firebase=require("./routes/Firebase")
var cors = require('cors')
dotenv.config();

mongoose.connect(process.env.MongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>console.log("connect DB successfull"))
    .catch((err)=>console.log(err));
app.use(express.json());
app.use(cors())

app.use("/api/auth",authRoute);
app.use("/api/Formdki",FormdkiRoute);
app.use("/api/GoiVaccine",GoiVaccineRoute);
app.use("/api/Lichtiem",LichtiemRoute);
app.use("/api/Message",MessageRoute);
app.use("/api/News",NewsRoute);
app.use("/api/Users",UserRoute);
app.use("/api/Vaccine",VaccineRoute);
app.use("/api/Firebase",Firebase);

app.listen(8700,()=>{
    console.log("Backend server running...");
})