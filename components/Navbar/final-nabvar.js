import NavbarBottom from "./navbar-bottom";
import NavbarMobile from "./navbar-mobile";
import NavbarTopWeb from "./navbar-top-web";

function FinalNavbar(props) {
  return (
    <>
      <NavbarTopWeb />
      <NavbarBottom />
      <NavbarMobile />
      {props.children}
    </>
  );
}
export default FinalNavbar;
