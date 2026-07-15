import jobService from "../service/jobService.js";

class JobController{
    async getJobs(req, res) {
        console.log("hello");
        const jobs = await jobService.getJobs();

         res.status(200).json(jobs);
        
    }

    async getJob(req,res){
       
        const jobid = req.params.id;
        const jobinfo = await jobService.getJob(jobid);

        res.status(200).json(jobinfo);
        
    }

   
    async createJob(req,res){
        console.log(req.body);
        const jobinfo = await jobService.createJob(req.body);
        res.status(201).json(jobinfo);
    }
}



const jobControl = new JobController();

export default jobControl;