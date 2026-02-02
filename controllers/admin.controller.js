const Plan = require('../models/Plan');

exports.updatePlan = async (req, res)=>{
    const {planId, price}= req.body;
    const plan = await Plan.findById(planId);
    if(!plan){
        return res.status(404).json({message: "Plan not found"});
    }
    plan.price = price;
    plan.updatedAt = new Date();
    await plan.save();
    res.json({messsage: "Plan updated successfully", plan});
}