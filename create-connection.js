import * as azdev from "azure-devops-node-api";
import * as ba from "azure-devops-node-api/BuildApi";

let orgUrl = `<your url>`;

let token = '<your token>';

let authHandler = azdev.getPersonalAccessTokenHandler(token);
let connection = new azdev.WebApi(orgUrl, authHandler);
module.exports = await connection.getBuildApi();
