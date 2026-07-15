import Application from "../model/Application.js";



class ApplicationController {
    async createApply(req, res) {

      const {jobId} = req.body;

        try {
            const newApplication = new Application({ jobId });
            const exist = await Application.findOne({ jobId: jobId });
            if (exist) {
                console.log("You have already applied for this job");
                return res.status(400).json({ message: 'You have already applied for this job' });
            }
            const savedApplication = await newApplication.save();
            res.status(201).json(savedApplication);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create application' });
        }


    }
    async getApplications(req, res) {
        
        try {
            const applications = await Application.find().populate('jobId','title location type salary logo');
          
            res.status(200).json(applications);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Failed to fetch applications' });
        }
}

    async deleteApplication(req,res){
        const id = req.params.id;

        try{
           const application = await Application.findByIdAndDelete(id);  

           res.status(200).json({message:"Application deleted successfully", success: true, application});

        }catch(error){
            console.log(error);
            res.status(500).json({ error: 'Failed to delete application' });

        }

    }

}

const applicationController = new ApplicationController();

export default applicationController;