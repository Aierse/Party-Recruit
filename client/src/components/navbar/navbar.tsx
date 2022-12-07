import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <li>
          <Link to="/">PartyRecruits</Link>
        </li>
        <li>
          <Link to="/recruit">Recruits</Link>
        </li>
        <li>
          <Link to="/portfolio">PortFolios</Link>
        </li>
      </div>
    </>
  );
};
