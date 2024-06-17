/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
const Cards = ({ cardImgUrl, cardTitle, cardDescription, cardUrl }) => {
  return (
    <div>
      <Card
        className="w-full items-center shadow-xl hover:scale-125 ease-out duration-300"
        imgAlt={cardDescription}
        imgSrc={cardImgUrl}
        loading="lazy"
      >
        <div className="-mt-8">
          <a href={cardUrl}>
            <h5 className="text-[16px] tracking-tight font-semibold font-roboto">
              {cardTitle}
            </h5>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
