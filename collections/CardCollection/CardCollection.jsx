import { Card } from "../Card/Card"; // Assuming this is the file where you've defined the Card component
import{StyledCardContainer} from "~/components";

const cardsData = [
  {
    image: {
      src: "/img/vector1.png",
      alt: "Logo 1",
      width: 100,
      height: 100,
    
    },
    title: "Brief",
    description: "Complete <strong> brief writing or, simple guidance </strong> on what to include, we've got you covered.",
    maxWidth: '19rem', 
  },
  {
    image: {
      src: "/img/vector2.png",
      alt: "Logo 2",
      width: 100,
      height: 100,
    },
    title: "Search",
    description: "In-depth agency search covering;<strong> criteria matching,</strong> door knocking and due-dilligence vetting.",
    maxWidth: '20.5rem', 
  },
  {
    image: {
      src: "/img/vector3.png",
      alt: "Logo 3",
      width: 100,
      height: 100,
    },
    title: "Pitch",
    description: "Comprehensive<strong>pitch management,</strong>including comms,diary management and pitch hosting.",
    maxWidth: '23rem', 
      },
];

const cardsDataFormatted = cardsData.map(card => ({
  ...card,
  description: { __html: card.description }
}));

export const CardCollection = () => {
  return (
    <div>
      {cardsDataFormatted.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};


