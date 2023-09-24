"use client"; 
import { useState, useEffect } from 'react';
import "@appwrite.io/pink"; // optionally, add icons
import "@appwrite.io/pink-icons";
import { account, client, clientFunctions } from '../../web-init';
import { Databases } from "appwrite";


export default function({req, res}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [content, setContent] = useState("");

  const databases = new Databases(client);

  const uploadBooking = async (e) => {
    e.preventDefault();

    if (req.method === 'GET') {
      return res.send(html, 200, {'content-type': 'text/html'});
    }
    if (req.method === 'POST' && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
      const formData = querystring.parse(req.body);
      try {
        await databases.createDocument(
          "650efb16ae5ebb92185a",
          "650efb593f6c9f97c09c",
          "unique()",
          {
            name: formData.name,
            email: formData.email,
            date: formData.date,
            time: formData.time,
            content: formData.content,
          }
        );
        alert("Booking sent in");
      } catch (error) {
        console.error(error);
      }
      return res.send("Message sent");
    }
    return res.send('Not found', 404);
  };

  // useEffect(() => {
  //   // Call clientFunctions and handle the promise
  //   clientFunctions()
  //     .then((res) => res)
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }, []);

  return (
    <section>
      <div
        className="u-flex u-main-space-between u-cross-center"
        style={{
          padding: '20px',
          backgroundColor: 'rgb(219, 26, 90)',
          color: 'white',
          marginBottom: '20px',
        }}
      >
        <h1 className="u-text-center u-font-size-32">Book Me</h1>
      </div>
      <div className="card u-cross-center u-width-full-line u-max-width-500" style={{ margin: 'auto' }}>
        <div className="u-flex u-main-space-between u-cross-center">
          <h6 className="heading-level-6 u-text-center">New Guest</h6>
        </div>

        <form method="post" onSubmit={uploadBooking} className="form u-margin-block-start-24">
          <ul className="form-list">
            <li className="form-item">
              <label className="label">Full Name</label>
              <div className="input-text-wrapper">
                <input
                  type="text"
                  className="input-text u-padding-inline-end-56"
                  placeholder="Full name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </li>
            <li className="form-item">
              <label className="label">Email</label>
              <div className="input-text-wrapper">
                <input
                  type="email"
                  className="input-text u-padding-inline-end-56"
                  placeholder="abc@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </li>
            <div className="u-flex u-main-space-between u-cross-center">
              <li className="form-item">
                <label className="label">Check-In</label>
                <div className="input-text-wrapper">
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </li>
              <li className="form-item">
                <label className="label">Time</label>
                <div className="input-text-wrapper">
                  <select
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option>2pm - 3pm</option>
                    <option>4pm - 5pm</option>
                    <option>6pm - 7pm</option>
                    <option>8pm - 9pm</option>
                  </select>
                </div>
              </li>
            </div>
            <li className="form-item">
              <label className="label">Message</label>
              <div className="input-text-wrapper">
                <textarea
                  className="input-text"
                  placeholder="Type here..."
                  name="message"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ height: '80px' }}
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
  );
}
