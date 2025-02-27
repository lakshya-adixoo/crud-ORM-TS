import "reflect-metadata"

import express,{Request , Response} from 'express'
import dataSource from "./datasource/dataSource";
import router from "./view/routes";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(router);

dataSource.initialize().then(()=>{
    console.log("DataSource successfully connected with the database!!!");
}).catch((err)=>{
 console.log("Database connection failed" ,err);
})



app.listen(PORT , ()=>{
    console.log(`Server is runinng on PORT ${PORT}`);
});