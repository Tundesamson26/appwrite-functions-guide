"use client"; 
import Link from 'next/link';
import { useState } from 'react';
import "@appwrite.io/pink"; // optionally, add icons
import "@appwrite.io/pink-icons";

export default function BookMe() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

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
        <Link href="/dashboard" style={{ paddingRight: '30px' }}>
            Dashboard
        </Link>
      </div>
      <div className="card u-cross-center u-width-full-line u-max-width-500" style={{ margin: 'auto' }}>
        <div className="u-flex u-main-space-between u-cross-center">
          <h6 className="heading-level-6 u-text-center">New Guest</h6>
        </div>

        <form method="post" onSubmit={handleSubmit} className="form u-margin-block-start-24">
          <ul className="form-list">
            <li className="form-item">
              <label className="label">Full Name</label>
              <div className="input-text-wrapper">
                <input
                  type="text"
                  className="input-text u-padding-inline-end-56"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </li>
              <li className="form-item">
                <label className="label">Time</label>
                <div className="input-text-wrapper">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
