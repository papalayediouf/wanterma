import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { FaCheckCircle, FaRegMoneyBillAlt, FaTruck } from "react-icons/fa";

export default function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const limitedData = response.data.slice(0, 10);
        setDatas(limitedData);
      } catch (error) {
        console.error("Une erreur est survenue", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navigation />
      </div>

      {/* div pour les sections */}
      <div className="p-5  md:p-14 bg-gray-200 space-y-8">
        {/* section 1 */}
        <section className="flex flex-col sm:flex-row bg-white p-8 space-y-6 sm:space-y-0">
          {datas.slice(0, 1).map((data) => (
            <div
              key={data.id}
              className="flex flex-col sm:flex-row w-full items-center"
            >
              <div className="w-full sm:w-[50%] space-y-4 text-center sm:text-left">
                <h1 className="text-2xl sm:text-4xl text-orange-400">
                  {data.title}
                </h1>
                <h3 className="text-lg sm:text-2xl">{data.description}</h3>
                <button className="bg-black text-sm sm:text-lg text-white py-2 px-4">
                  Acheter maintenant
                </button>
              </div>
              <div className="w-full sm:w-[50%] flex justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-40 sm:w-80 object-contain"
                />
              </div>
            </div>
          ))}
        </section>

        {/* autre contenu */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4  shadow place-items-center space-y-4">
            <h1 className="text-orange-400 font-bold text-7xl">
              <FaRegMoneyBillAlt />
            </h1>
            <h1 className="font-bold text-xl">meilleurs prix</h1>
            <h1 className="text-center">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor.
            </h1>
          </div>
          <div className="bg-white p-4  shadow place-items-center space-y-4">
            <h1 className="text-orange-400 font-bold text-7xl">
              <FaTruck />
            </h1>
            <h1 className="font-bold text-xl">Livraison rapide</h1>
            <h1 className="text-center">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor.
            </h1>
          </div>
          <div className="bg-white p-4  shadow place-items-center space-y-4">
            <h1 className="text-orange-400 font-bold text-7xl">
              <FaCheckCircle />
            </h1>
            <h1 className="font-bold text-xl">Retours sans frais</h1>
            <h1 className="text-center">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor.
            </h1>
          </div>
        </section>

        {/* donnee de l'api */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
          {datas.slice(1, 3).map((data) => (
            <div
              key={data.id}
              className="p-4 rounded shadow flex gap-4 place-items-center   bg-white"
            >
              <div className=" space-y-3">
                <h1 className="text- font-medium text-orange-400">
                  {data.title}
                </h1>
                <h1 className="text-lg font-semibold ">{data.title}</h1>

                <button className="text-white bg-black p-2">
                  Acheter maintenant
                </button>
              </div>
              <div className="place-items-center ">
                <img src={data.image} alt={data.title} className="w-44 " />
              </div>
            </div>
          ))}
        </section>

        {/* donnee de l'api */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {datas.slice(0, 5).map((data) => (
            <div key={data.id} className="border p-4 rounded shadow bg-white">
              <div className="flex justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-32 sm:w-52 h-40 sm:h-60 "
                />
              </div>
              <div className="mt-2 text-center text-sm sm:text-lg font-medium">
                {data.title}
              </div>
              <div className="mt-2 text-center text-orange-400 text-sm sm:text-lg font-medium">
                {data.price}
              </div>
              <div className="text-center">
                <button className="px-2 sm:px-4 py-1 w-full bg-black text-white">
                  Voir Produit
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* donnee de l'api */}
        <section className="shadow w-full">
          {datas.slice(6, 7).map((data) => (
            <div
              key={data.id}
              className="flex flex-col sm:flex-col md:flex-row items-center w-full bg-amber-200"
            >
              {/* Image */}
              <div className="w-full md:w-[50%] h-auto bg-white flex justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-3/4 sm:w-2/4 md:w-full object-contain p-4"
                />
              </div>

              {/* Texte et bouton */}
              <div className="w-full md:w-[50%] space-y-5 p-5 bg-amber-200 text-center md:text-left">
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">
                  {data.title}
                </h1>
                <h3 className="text-sm sm:text-base md:text-lg">
                  {data.description}
                </h3>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3">
                    Acheter maintenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="place-items-center space-y-4 py-7">
        <h1 className="font- ">Wanterma</h1>
        <h1 className="text-center">
          Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos
          dernières offres!
        </h1>
        <div className="">
          <input
            type="text"
            placeholder="Email Adrresse"
            className="border border-gray-700 p-2"
          />
          <button className="bg-black text-white p-[8.5px]">S'abonner</button>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
