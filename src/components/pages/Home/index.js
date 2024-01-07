import { Link } from "react-router-dom";
import "./index.scss";
import tuham_logo from "../../../assets/images/svgs/tuham-logo.svg";
import { useEffect, useState } from "react";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const handleFetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const allAlbums = await response.json();
        //  console.log(allAlbums)
        setAlbums(allAlbums);
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchAlbums();
  }, []);

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
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/lazyloading">Lazy Loading</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
          <li>
            <Link to="/dashboard-form">Dashboard Form</Link>
          </li>
          {/* <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/8rnfrjfnrfj/details?name=tuham&email=example@gmail.com">
              User Details
            </Link>
          </li> */}
          <li>
            <Link to="/custom-hooks">Custom Hooks</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Peep all our albums</h1>
        <ul>
          {
            albums?.map((album) => (
              <li key={album.id}>
                <Link to={`/album/${album.id}`}>{album.title }</Link>
              </li>

            ))
          }
     </ul>
        
      </section>
    </>
  );
};

export default Home;
