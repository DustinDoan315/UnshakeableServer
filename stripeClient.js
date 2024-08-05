const Stripe = require("stripe");
const { STRIPE_SECRET_KEY } = require("./config");

const stripe = Stripe(STRIPE_SECRET_KEY);

module.exports = stripe;
