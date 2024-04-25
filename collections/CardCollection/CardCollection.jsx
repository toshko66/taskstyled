import { Card } from "../Card/Card"; // Assuming this is the file where you've defined the Card component


const cardsData = [
  {
    image: {
      src: "/img/vector1.png",
      alt: "Logo 1",
      width: 100,
      height: 100,
    
    },
    title: "Brief",
    description: "Complete brief writing or simple guidance on what to include, we've got you covered.",
  },
  {
    image: {
      src: "/img/vector2.png",
      alt: "Logo 2",
      width: 100,
      height: 100,
    },
    title: "Search",
    description: "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
  },
  {
    image: {
      src: "/img/vector3.png",
      alt: "Logo 3",
      width: 100,
      height: 100,
    },
    title: "Pitch",
    description: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
  },
];

export const CardCollection = () => {
  return (
    <div>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};


