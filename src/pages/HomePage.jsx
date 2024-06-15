import NavBar from "../components/organisms/NavBar";
import Carousels from "../components/organisms/Carousels";
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
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex gap-8">
        <NavBar />
      </div>
    </>
  );
};

export default HomePage;
