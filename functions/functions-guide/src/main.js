import { Client, Databases, Query, ID } from 'node-appwrite';
import querystring from 'node:querystring';

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Contact Form</title>
  </head>
  <body>
    <form action="/" method="POST">
      <input type="text" id="name" name="name" placeholder="Name" required>
      <input type="email" id="email" name="email" placeholder="Email" required>
      <textarea id="content" name="content" placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`

export default async function ({ req, res }) {
  if (req.method === 'GET') {
    return res.send(html, 200, {'content-type': 'text/html'});
  }

  if (req.method === 'POST' && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    const formData = querystring.parse(req.body);

    const message = {
      name: formData.name,
      email: formData.email,
      content: formData.content
    };

    const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    const databases = new Databases(client);
    const document = await databases.createDocument('[DATABASE_ID]', '[MESSAGES_COLLECTION_ID]', ID.unique(), message);

    return res.send("Message sent");
  }

  return res.send('Not found', 404);
}