import { Link } from "react-router-dom";
import "./index.scss";
import tuham_logo from "../../../assets/images/svgs/tuham-logo.svg";
import { useGetAllAlbums } from "../../../hooks";

const Albums = () => {
  const [albums, isLoading] = useGetAllAlbums();
  return (
    <>
      <nav>
        <div>
          <img src={tuham_logo} alt="" width="150px" />
        </div>
        <ul>
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
            <Link to="/dashboard-form">Dashboard Form</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Peep all our albums</h1>
        {isLoading ? "Albums Loading..." : null}

        <ul>
          {albums?.map((album) => (
            <li key={album.id}>{album.title} </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Albums;
