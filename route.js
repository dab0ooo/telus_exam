import express from 'express'

import * as controller from './controller.js'

const router = express.Router();
router.get('/ims/subscriber/:phoneNumber',async (req,res,next) =>{
    let result = await controller.getData(req.params.phoneNumber)
    res.send(result);
});

router.put('/ims/subscriber/:phoneNumber',async (req,res,next) =>{
    let result = await controller.updateData(req.params.phoneNumber,req.body)
    res.send(result);
});

router.delete('/ims/subscriber/:phoneNumber',async (req,res,next) =>{
    let result = await controller.deleteData(req.params.phoneNumber)
    res.send(result);
});

export default router;