

import jobrepo from "../repository/Jobrepository.js";



class JobService{
    async getJobs(){
        const jobs = await jobrepo.getJobs();
        return jobs;
    }
    async getJob(id) {
        const job = await jobrepo.getJob(id);
        return job;
    }

    async createJob(body){
        const job = await jobrepo.createJob(body);
        return job;
    }

   
}



const jobServe = new JobService();
export default jobServe;