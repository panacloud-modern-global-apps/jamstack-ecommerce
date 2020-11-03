// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.handler = async event => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 8000,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: {customerId: "34343", orderId: "343434"},
  });

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
