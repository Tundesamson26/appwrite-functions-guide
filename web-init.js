import { Client, Account, Functions } from "appwrite";

export const client = new Client();

export const account = new Account(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('650cfbc7ab6c2fceab21');

export const clientFunctions = () => {
  const functions = new Functions(client);
  return functions.listExecutions('650d7da70fe9d2907fbe');
}