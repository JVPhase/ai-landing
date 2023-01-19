import Navbar from '@/components/Navbar';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About - Next Desk Company</title>
      </Head>
      <Navbar />
      <main>
        <h1 className="text-center my-10">About Us</h1>
        <p>
          Next Desk Company is a leading provider of high-quality computer
          desks. We offer a wide range of desks to suit every need, from
          L-shaped desks to standing desks and everything in between.
        </p>
        <p>
          Our mission is to provide our customers with the best possible
          products and customer service. We strive to offer the best prices and
          the highest quality products, while still maintaining a commitment to
          environmental responsibility.
        </p>
        <p>
          We are constantly working to improve our offerings and to bring new
          and innovative products to the market. Thank you for choosing Next
          Desk Company!
        </p>
      </main>

      <footer>
        <p>Copyright © Next Desk Company</p>
      </footer>

      <style jsx>{`
        main {
          padding: 20px;
        }
        footer {
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default About;
