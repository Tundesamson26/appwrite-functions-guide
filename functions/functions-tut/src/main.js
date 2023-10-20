import { Client, Databases, ID } from 'node-appwrite';
import querystring from 'node:querystring';

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Contact Form</title>
  </head>
  <body>
  <section>
  <div
    className="u-flex u-main-space-between u-cross-center"
    style={{
      padding: "20px",
      backgroundColor: "rgb(219, 26, 90)",
      color: "white",
      marginBottom: "20px",
    }}
  >
    <h1 className="u-text-center u-font-size-32">Book Me</h1>
  </div>
  <div
    className="card u-cross-center u-width-full-line u-max-width-500"
    style={{ margin: "auto" }}
  >
    <div className="u-flex u-main-space-between u-cross-center">
      <h6 className="heading-level-6 u-text-center">New Guest</h6>
    </div>

    <form
      method="POST"
      action="/"
      className="form u-margin-block-start-24"
    >
      <ul className="form-list">
        <li className="form-item" style="list-style-type: none;">
          <label className="label">Full Name</label>
          <div className="input-text-wrapper">
            <input
              type="text"
              className="input-text u-padding-inline-end-56"
              placeholder="Full name"
              name="name"
            />
          </div>
        </li>
        <li className="form-item" style="list-style-type: none;">
          <label className="label">Email</label>
          <div className="input-text-wrapper">
            <input
              type="email"
              className="input-text u-padding-inline-end-56"
              placeholder="abc@example.com"
              name="email"
            />
          </div>
        </li>
        <div className="u-flex u-main-space-between u-cross-center">
          <li className="form-item" style="list-style-type: none;">
            <label className="label">Check-In</label>
            <div className="input-text-wrapper">
              <input
                type="date"
                name="date"
              />
            </div>
          </li>
          <li className="form-item" style="list-style-type: none;">
            <label className="label">Time</label>
            <div className="input-text-wrapper">
              <select
                name="time"
              >
                <option>2pm - 3pm</option>
                <option>4pm - 5pm</option>
                <option>6pm - 7pm</option>
                <option>8pm - 9pm</option>
              </select>
            </div>
          </li>
        </div>
        <li className="form-item" style="list-style-type: none;">
          <label className="label">Message</label>
          <div className="input-text-wrapper">
            <textarea
              className="input-text"
              placeholder="Type here..."
              name="content"
              style={{ height: "80px" }}
            ></textarea>
          </div>
        </li>
      </ul>

      <div className="form-footer">
        <div className="u-flex u-main-end u-gap-12">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</section>
  </body>
</html>`;

export default async ({ req, res }) => {
  if (req.method === 'GET') {
    return res.send(html, 200, {'content-type': 'text/html'});
  }

  if (req.method === 'POST' && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    const formData = querystring.parse(req.body);

    const message = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      content: formData.content,
    };

    const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    const databases = new Databases(client);
    const document = await databases.createDocument('650efb16ae5ebb92185a', '650efb593f6c9f97c09c', ID.unique(), message);

    return res.send("Message sent");
  }

  return res.send('Not found', 404);
}