import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { push } = useHistory();

  useEffect(() => {
    document.title = "El Jefe | Home";
    return () => {
      document.title = "El Jefe";
    };
  }, []);

  return (
    <section id="homepage">
      <h1>Welcome to El Jefe!</h1>
      <div className="main">
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/3ftL8peRDZcFZuzyWysK-A/o.jpg"
          alt="El Jefe storefront"
        />
        <div className="cta">
          <h2>Get started by checking out our menu!</h2>
          <button onClick={() => push("/menu")}>Menu</button>
          <h2>Or find one of our locations!</h2>
          <button onClick={() => push("/locations")}>Locations</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
