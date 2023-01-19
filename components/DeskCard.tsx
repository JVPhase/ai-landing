import Image from 'next/image';

const DeskCard = ({ desk }: { desk: any }) => {
  return (
    <div className="desk-card">
      <Image src={desk.image} alt={desk.name} width={100} height={100} />
      <h2>{desk.name}</h2>
      <p>{desk.description}</p>
      <p>Price: ${desk.price}</p>
    </div>
  );
};

export default DeskCard;
