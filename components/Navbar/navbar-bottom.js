import classes from "./navbar.module.css";

function NavbarBottom() {
  return (
    <nav className={` ${classes.nav_bottom}`}>
      <div className={` container-lg p-2 d-none d-lg-block d-md-block `}>
        <div className="navbar_List d-flex align-items-center justify-content-around">
          <div className={classes.navbar_Item}>
            <a href="/">Startup</a>
          </div>
          <div className={classes.navbar_Item}>
            <a href="/">Intelectual Property</a>
          </div>
          <div className={classes.navbar_Item}>
            <a href="/">GST</a>
          </div>
          <div className={classes.navbar_Item}>
            <a href="/">Income Tax</a>
          </div>
          <div className={classes.navbar_Item}>
            <a href="/">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBottom;
