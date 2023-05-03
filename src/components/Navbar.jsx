import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="pages">
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
      </div>
      <span className="cartLink">
        {" "}
        <span className="itemNumber">2</span> Warenkorb
      </span>
    </div>
  );
};
export default Navbar;
