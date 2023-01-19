import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // send form data to server
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Contact - Next Desk Company</title>
      </Head>
      <Navbar />
      <main>
        <h1 className="text-center my-10">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </main>

      <footer>
        <p>Copyright © Next Desk Company</p>
      </footer>

      <style jsx>{`
        main {
          padding: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        label {
          margin-top: 20px;
        }
        input,
        textarea {
          padding: 10px;
          margin-top: 10px;
          font-size: 1rem;
        }
        button {
          background-color: #3f51b5;
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          margin-top: 20px;
        }
        footer {
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
