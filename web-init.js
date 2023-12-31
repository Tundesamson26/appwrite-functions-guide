import { Client, Account, Databases, Functions } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
export const account = new Account(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('650cfbc7ab6c2fceab21');

export const clientFunctions = () => {
  const functions = new Functions(client);
  return functions.createExecution('650d7da70fe9d2907fbe');
}