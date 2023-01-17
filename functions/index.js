const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(
    "sk_test_51LHoCuCajsSYQy" +
        "t67grT3g33gUGpf5fLLAtD0xHQN" +
        "T2WLFvaxgYSNgIpgsndNauV4tzRCzIGCUwtLzpG0l14mAE" +
        "U00FAaS0djH"
);

// //////////////////////////////////////////////////////////////////////////
// adding admin role
admin.initializeApp();

const AddingUserRole = (data, context) => {
  return admin
      .auth()
      .getUserByEmail(data.email)
      .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
          role: data.role,
        });
      })
      .then(() => {
        return {
          success: true,
          msg: `Success! ${data.email} role has ben updated`,
        };
      })
      .catch((err) => {
        return err;
      });
};
exports.addRole = functions.https.onCall(AddingUserRole);
// //////////////////////////////////////////////////////////////////////////
// Creating Payment Intent
const CreatingPaymentIntent = (data, context) => {
  const total = data.total;
  return stripe.paymentIntents
      .create({
        amount: total, // in subunits
        currency: "egp", // currencies
      })
      .then((paymentIntent) => {
        return {
          success: true,
          msg: "Success! Payment Intent Created",
          clientSecret: paymentIntent.client_secret,
        };
      });
};
exports.createPaymentIntent = functions.https.onCall(CreatingPaymentIntent);
// //////////////////////////////////////////////////////////////////////////
