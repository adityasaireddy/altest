import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/footer.component";
import "./homepage.style.scss";
import { Fragment } from "react";
import Hero from "./sections/section-1/herosection.component";
import Sm1 from "./sections/sm-1/sm1.component";

const Homepage = () => {
  return (
    <Fragment>
      <Outlet />
      <Hero />
      <Sm1 />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
