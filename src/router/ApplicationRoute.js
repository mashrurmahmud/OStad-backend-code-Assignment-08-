import { Router } from "express";
import applicationController from "../Controller/ApplicationController.js"

const router = Router();


router.post('/createapply', applicationController.createApply);

router.get('/applications', applicationController.getApplications);
router.delete('/application/:id', applicationController.deleteApplication);

export default router;
