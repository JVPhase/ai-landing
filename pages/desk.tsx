import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getDesk } from './api/desks';

const DeskDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [desk, setDesk] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    const fetchData = () => {
      const data = getDesk(Number(id));
      setDesk(data);
    };
    fetchData();
  }, [id]);

  if (!id) return null;

  return !!desk ? (
    <div>
      <Head>
        <title>{desk.name} - Next Desk Company</title>
      </Head>
      <Navbar />
      <main>
        <h1 className="text-center my-10">{desk.name}</h1>
        <Image
          src={desk.image || 'next.svg'}
          alt={desk.name || 'Next Desk Company'}
          className="my-10"
          width={100}
          height={100}
        />
        <p>{desk.description}</p>
        <p>Price: ${desk.price}</p>
        <p>Dimensions: {desk.dimensions}</p>
        <p>Warranty: {desk.warranty} years</p>
        <p>Availability: {desk.availability ? 'In stock' : 'Out of stock'}</p>
        <button>Add to cart</button>
      </main>

      <footer>
        <p>Copyright © Next Desk Company</p>
      </footer>

      <style jsx>{`
        main {
          padding: 20px;
        }
        img {
          max-width: 100%;
        }
        footer {
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  ) : null;
};

export default DeskDetail;
