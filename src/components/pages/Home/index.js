import { Link } from "react-router-dom";
import "./index.scss";
import tuham_logo from "../../../assets/images/svgs/tuham-logo.svg";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //  ............ Fires when the component mounts, when the state changes, and on cleanup
  // useEffect(() => {
  //   console.log("No dependency array");
  //   setIsLoggedIn(true)
  // });


  // .............. fire when the component mounts and when the state changes
  useEffect(() => {
    console.log("Dependency array with Empty parameter");
    setIsLoggedIn(true);
  }, []);

  // ........Fire when the component mountsm and trigger subsequently when the parameter changes
  // useEffect(() => {
  //   console.log("Dependency Array with parameter");
  // }, [isLoggedIn]);

  return (
    <>
      <nav>
        <div>
          <img src={tuham_logo} alt="" width="150px" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/lazyloading">Lazy Loading</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard-form">Dashboard Form</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/8rnfrjfnrfj/details?name=tuham&email=example@gmail.com">
              User Details
            </Link>
          </li>
          <li>
            <Link to="/custom-hooks">Custom Hooks</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Welcome to the Landing Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nesciunt, nihil fugiat illum tempore temporibus esse laudantium, aperiam
        facilis ab dicta magnam minus assumenda eveniet a, vitae odio quae
        nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        optio, deleniti, asperiores autem accusamus voluptatum ut quidem
        accusantium recusandae quas consequatur molestias? Et sequi minima
        numquam, veritatis aspernatur voluptatum alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nam vitae eaque ducimus amet suscipit
        sequi eos, magni quibusdam unde cum! Molestias, saepe sit. Voluptas,
        perferendis odio architecto praesentium error dolorum.
      </section>
    </>
  );
};

export default Home;
