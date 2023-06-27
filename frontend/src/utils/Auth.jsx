import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.USER_POOL_ID, // Your user pool id here
  ClientId: process.env.CLIENT_ID, // Your client id here
};
const userPool = new CognitoUserPool(poolData);

export function signUp(name, username, password, email, onSuccess, onFailure) {
  const attributeList = [
    new CognitoUserAttribute({
      Name: "name",
      Value: name,
    }),
    new CognitoUserAttribute({
      Name: "email",
      Value: email,
    }),
  ];

  userPool.signUp(username, password, attributeList, null, (err, result) => {
    if (err) onFailure(err);
    else onSuccess(result);
  });
}

export function signIn(username, password, onSuccess, onFailure) {
  const user = new CognitoUser({
    Username: username,
    Pool: userPool,
  });

  const authDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });

  user.authenticateUser(authDetails, {
    onSuccess: (result) => onSuccess(result),
    onFailure: (err) => onFailure(err),
  });
}

export function signOut(onSuccess) {
  const user = userPool.getCurrentUser();

  if (user) {
    user.signOut();
    onSuccess();
  } else {
    console.warn("no user signed in!");
    onSuccess();
  }
}
