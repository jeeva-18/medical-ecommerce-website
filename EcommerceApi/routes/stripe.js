const router = require("express").Router();
const Stripe = require("stripe");
stripe = Stripe(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
   stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    {
      apiKey:'sk_test_51OTfv9SBn2MLbXg05woZ0PHEafgQBsAEhepDxvXXJSYINHDfm7HFxK6Snte3fo0xZWgtXsi6bEoBcYeNp0MFV6wv00f2iLWVlO'
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
