import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import jobRoute from "./router/jobRoute.js"
import authRoute from "./router/AuthRoute.js"
import cookieParser from "cookie-parser"
import applicationRoute from "./router/ApplicationRoute.js"



dotenv.config()

const app = express()



app.use(cors())
app.use(express.json())

app.use(cookieParser());





app.use("/jobs/api", jobRoute);
app.use("/auth/api", authRoute);

app.use('/apply/api', applicationRoute);






app.get('/', async(req,res)=>{
    res.send("hello")
})



export default app