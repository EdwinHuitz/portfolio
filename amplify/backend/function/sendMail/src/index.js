const sgMail = require('@sendgrid/mail');
const name = "edwin"
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // create email message
    const msg = {
        to: name+'huitz@gmail.com',
        from: 'contact@'+name+'huitz.com',
        replyTo: record.dynamodb.NewImage.Email.S,
        subject: record.dynamodb.NewImage.Subject.S,
        text: record.dynamodb.NewImage.Message.S

    };

    // send email
    const response = await sgMail.send(msg);
    console.log(response);
    return response;
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};