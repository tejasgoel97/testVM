import classes from "./navbar.module.css";
import { useState } from "react";

function NavbarMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="d-md-none" onClick={() => console.log("HII")}>
      <div className="d-flex  justify-content-between align-items-center px-4">
        <div style={{ width: "50%" }}>
          <img
            src="https://www.swyftfilings.com/assets2/images/logo.png"
            width="100%"
            height="100%"
            className="img-fluid"
            style={{ maxHeight: "50px", maxWidth: "200px" }}
          ></img>
        </div>
        <div
          className={`${classes.container_ham} ${open ? classes.change : ""}`}
          onClick={() => {
            console.log(open);
            setOpen((s) => !s);
          }}
        >
          <div className={classes.bar1}></div>
          <div className={classes.bar2}></div>
          <div className={classes.bar3}></div>
        </div>
      </div>
      <nav className={` ${classes.nav_bottom}`}>
        <div
          className={` container-lg p-2 d-block d-lg-none d-md-block ${
            open ? "" : "d-none"
          }`}
        >
          <div className="navbar_List d-flex flex-column align-items-center justify-content-around">
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
    </div>
  );
}
export default NavbarMobile;
