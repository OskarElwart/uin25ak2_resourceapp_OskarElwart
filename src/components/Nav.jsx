import { Link } from "react-router-dom";
//nav element som endrer route og dermed category
export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/html">HTML</Link></li>
        <li><Link to="/css">CSS</Link></li>
        <li><Link to="/javascript">JavaScript</Link></li>
        <li><Link to="/react">React</Link></li>
        <li><Link to="/headless-cms">Sanity and headless CMS</Link></li>
      </ul>
    </nav>
  );
}