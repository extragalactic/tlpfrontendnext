import AWS from 'aws-sdk';

AWS.config.update({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:bd1dbc7e-9c42-4bb5-af6a-8823879203e3", // Identity pool ID
  }),
  region: 'us-east-1',
});


const returnLexResponse = (inputText) => {
  const params = {
    botAlias: 'tlp' /* required, has to be '$LATEST' */,
    botName: 'tlpchatbot' /* required, the name of you bot */,
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
