import * as azdev from "azure-devops-node-api";
import * as ba from "azure-devops-node-api/BuildApi";

let orgUrl = `https://dev.azure.com/eysbp/`;

let token = 'cgd5bv5f4wyoodvhkbdbglvldodmohsgt3v36tzz3gk4w25py73q';

let authHandler = azdev.getPersonalAccessTokenHandler(token);
let connection = new azdev.WebApi(orgUrl, authHandler);
module.exports = await connection.getBuildApi();