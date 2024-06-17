import NavBar from "../components/organisms/NavBar";
import Carousels from "../components/organisms/Carousels";
import Cards from "../components/organisms/Cards";
const HomePage = () => {
  return (
    <>
      <div className="text-center py-6">
        <h1 className="text-[26px]  text-[#BEA20B] font-oleoScripts">
          Goods Hive
        </h1>
      </div>

      <div>
        <Carousels />
      </div>

      {/* mans popular */}

      <div className="text-center pt-8 pb-4">
        <h2 className="text-[22px] font-semibold font-oleoScripts">
          Man&apos;s Popular
        </h2>
      </div>
      <div className="flex flex-1 justify-center items-center gap-2 px-4">
        <Cards
          cardImgUrl="../../public/assets/img/mans popular/shirts.webp"
          cardTitle="Shirts"
          cardDescription="Mans Shirts"
          cardUrl="/mans-shirts"
        />
        <Cards
          cardImgUrl="../../public/assets/img/mans popular/shoes.webp"
          cardTitle="Shoes"
          cardDescription="Mans Shoes"
          cardUrl="/mans-shoes"
        />
        <Cards
          cardImgUrl="../../public/assets/img/mans popular/watches.webp"
          cardTitle="Watches"
          cardDescription="Mans Watches"
          cardUrl="/mans-watches"
        />
      </div>

      {/* womens popular */}

      <div className="text-center pt-8 pb-4">
        <h2 className="text-[22px] font-semibold font-oleoScripts">
          Women&apos;s Popular
        </h2>
      </div>
      <div className="flex flex-1 justify-center items-center gap-2 px-4">
        <Cards
          cardImgUrl="../../public/assets/img/womens popular/dresses.webp"
          cardTitle="Dresses"
          cardDescription="Womens Dresses"
          cardUrl="/womens-dresses"
        />
        <Cards
          cardImgUrl="../../public/assets/img/womens popular/bags.webp"
          cardTitle="Bags"
          cardDescription="Womens Bags"
          cardUrl="/womens-bags"
        />
        <Cards
          cardImgUrl="../../public/assets/img/womens popular/jewellery.webp"
          cardTitle="jewellery"
          cardDescription="Womens jewellery"
          cardUrl="/womens-jewellery"
        />
      </div>

      <div className="h-24">
        <div className="fixed bottom-0 w-full pt-2 flex gap-12 justify-center z-100 bg-white shadow-xl">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
