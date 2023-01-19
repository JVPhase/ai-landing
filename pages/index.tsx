import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import DeskCard from '../components/DeskCard';
import { getDesks } from './api/desks';

const Home = ({ desks }: { desks: any[] }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredDesks =
    desks?.filter((desk) =>
      desk.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div>
      <Head>
        <title>Computer Desks - Next Desk Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar handleSearch={handleSearch} />

      <main>
        <h1 className="text-center my-10">Our Desks</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {filteredDesks.map((desk) => (
            <Link href={`/desk/?id=${desk.id}`} key={desk.id}>
              <DeskCard desk={desk} />
            </Link>
          ))}
        </div>
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

export async function getStaticProps() {
  const desks = getDesks();
  return {
    props: {
      desks,
    },
  };
}

export default Home;
