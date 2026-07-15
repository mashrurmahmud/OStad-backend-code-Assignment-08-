import job from "../model/JobPortal.js";



class jobrepository{
    async getJobs(){
        const jobs = await job.find();
        return jobs;
    }
    async getJob(id){
        const job_user = await job.findById(id);
        return job_user;
    }

    async createJob(body){
        const job_user = await job.create(body);
        return job_user;
    }

  
}


const jobrepo = new jobrepository();

export default jobrepo;