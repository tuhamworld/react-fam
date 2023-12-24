import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../../../index.css"

const RouterHooks = () => {
    // useSearchParams is an hook for search query paramater (e.g ?search=react)
  const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("search"));
    
    // Use Location is an hook for showing the location
    const location = useLocation();
    console.log(location);

    // useNavigate hook is for navigating between pages
    const navigate = useNavigate();
    const handleNavigate = (event) => {
        event.preventDefault();
        navigate("/about");
    }

  return (
    <>
      <nav>
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
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/custom-hooks">Custom Hooks</Link>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Welcome to the Router Hooks Page</h1>
              <p>
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
              </p> 

              <button className="button" onClick={handleNavigate}>Goto the About Page</button>
      </section>
    </>
  );
};

export default RouterHooks;