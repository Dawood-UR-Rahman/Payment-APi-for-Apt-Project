const stripe = require("../config/stripe");
const Plan = require("../models/Plan");
exports.createCheckout = async (req, res) => {
  const plan = await Plan.findOne({ active: true });
  const session = await stripe.checkout.sessions.create({
    unit_amount: plan.price * 100,
  res.json({ url: session.url });
};
