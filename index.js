const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')

const connectdb = require("./Utils/db");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

const userRoute = require('./Routes/userRoute');

app.use(cors({origin:'*',credentials:true})); //enable CORS
app.use('/users',userRoute); 


app.listen(port,async ()=>{
    try {
        await connectdb();
        console.log(`App is running on Port ${port}`);
    }
    catch(error){
        console.log("Error => ",error);
    }
})