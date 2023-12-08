import { Link } from "react-router-dom";

export const LandingPage = () => {
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/8rnfrjfnrfj/details?name=tuham&email=example@gmail.com">User Details</Link>
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
