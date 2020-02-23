// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "quinlanadam@gmail.com",
    from: "no-reply@nearpeer.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: "Message Sent"
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message
    };
  }
};
