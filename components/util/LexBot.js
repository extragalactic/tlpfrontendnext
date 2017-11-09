import AWS from 'aws-sdk';

AWS.config.update({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:1262b4ef-7f35-4a74-8c0b-a05b26c9ab4b',
  }),
  region: 'us-east-1',
});


const returnLexResponse = (inputText) => {
  const params = {
    botAlias: 'tlpbotprod' /* required, has to be '$LATEST' */,
    botName: 'ThreeLittlePigsCustomerService' /* required, the name of you bot */,
    inputText /* required, your text */,
    userId: 'USER0122' /* required, arbitrary identifier */,
    sessionAttributes: {
      /* anotherKey: ... */
    },
  };
  const lexruntime = new AWS.LexRuntime({ region: 'us-east-1' });
  const results = new Promise((resolve, reject) => {
    lexruntime.postText(params, (err, data) => {
      if (err) reject(err, err.stack);
      else {
        // an error occurred
        resolve(data.message);
      } // successful response
    });
  });
  return results;
};

export default returnLexResponse;
