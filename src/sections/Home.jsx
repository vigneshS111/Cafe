import Hero from "./Hero";
import DeliveryService from "./DeliveryService";
import AboutUs from "./AboutUs";
import SpecialMenu from "./SpecialMenu";
import PopularNow2 from "./PopularNow2";
const Home = () => {
  return (
    <>
      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Hero />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth  ">
          <PopularNow2 />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <DeliveryService />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <AboutUs />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <SpecialMenu />
        </div>
      </section>
    </>
  );
};

export default Home;
