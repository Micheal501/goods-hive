/* eslint-disable react/prop-types */
import { Carousel } from "flowbite-react";

const Carousels = () => {
  const customTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-800",
        on: "bg-gray-600 dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 mx-6 hidden md:inline-flex",
      icon: "h-5 w-5 text-black dark:text-gray-800 sm:h-6 sm:w-6",
    },
  };

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-xl ">
        <Carousel
          slide={true}
          theme={customTheme}
        >
          <img
            src="../../../public/assets/img/hero carousel/mens.webp"
            alt="Mans fashion discount"
          />
          <img
            src="../../../public/assets/img/hero carousel/shoes.webp"
            alt="Shoes fashion discount"
          />
          <img
            src="../../../public/assets/img/hero carousel/womens.webp"
            alt="Womens fashion discount"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Carousels;
