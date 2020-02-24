// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const body = JSON.parse(event.body);

  const msg = {
    to: ['christopher.quinn@nearpeer.net', 'dustin@nearpeer.net'],
    from: "no-reply@nearpeer.com",
    subject: "Contact Form Submission",
    text: `What May We Help You With: ${body.helpWith}

First Name: ${body.firstName}
Last Name: ${body.lastName}
Title: ${body.title}
Institution/Organization: ${body.organization}
Email: ${body.email}
Phone: ${body.phone}
Questions/Comments:${body.comments}`,
    html: `<strong>What May We Help You With:</strong> ${body.helpWith}<br />
    <br />
    <strong>First Name:</strong> ${body.firstName}<br />
    <strong>Last Name:</strong> ${body.lastName}<br />
    <strong>Title:</strong> ${body.title}<br />
    <strong>Institution/Organization:</strong> ${body.organization}<br />
    <strong>Email:</strong> ${body.email}<br />
    <strong>Phone:</strong> ${body.phone}<br />
    <strong>Questions/Comments:</strong>${body.comments}<br />`
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
