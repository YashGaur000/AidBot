import express from "express";
import cors from "cors";
// import { controllobj, userController } from "./controller.js";
import UserRoutes from "./route.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/",UserRoutes);    

const server = app.listen(5678, (err)=>{
    if (err) {
        console.log("Error encountered: ",err);
    }else{
        console.log("Server up: ",server.address().port);
    }
})
