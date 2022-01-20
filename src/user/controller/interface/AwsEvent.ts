export default interface AwsEvent {
  resource?: string;
  path?: string;
  httpMethod?: string;
  headers: { username: string; usertype: USER_TYPE };
  queryStringParameters?: object;
  pathParameters?: object;
  stageVariables?: object;
  requestContext?: object;
  body: any;
}
