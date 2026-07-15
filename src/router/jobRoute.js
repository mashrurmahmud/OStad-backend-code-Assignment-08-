import { Router } from "express";
import jobControl from "../Controller/jobController.js";



const router = Router();


router.get("/getjobs", jobControl.getJobs);
router.get("/getjobs/:id", jobControl.getJob);
router.post("/createjob", jobControl.createJob);




export default router;