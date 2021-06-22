import classes from "./navbar.module.css";

function NavbarTopWeb(props) {
  return (
    <>
      <div className="header container-lg">
        <div className="d-none d-md-flex justify-content-between px-4 align-items-center">
          <div className="logo ">
            <a href="/">
              <img
                src="https://www.swyftfilings.com/assets2/images/logo.png"
                width="261px"
                height="42px"
              ></img>
            </a>
          </div>
          <div className="right_header">
            <div
              className={`d-flex justify-content-center mb-2 ${classes.right_header_list}`}
            >
              <ul className="d-flex my-2 mx-3 p-0">
                <li className={classes.right_header_item}>
                  <a href="/">My Account</a>
                </li>
                <li className={classes.right_header_item}>
                  <a href="/">Business Tax</a>
                </li>
                <li className={classes.right_header_item}>
                  <a href="/">Personal Tax</a>
                </li>
                <li className={classes.right_header_item}>
                  <a href="/">GST fillings</a>
                </li>
                <li className={classes.right_header_item}>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-end mb-3">
              <a className="pl-3">
                <img
                  src="https://www.swyftfilings.com/assets2/images/phone.png"
                  height="27px"
                  width="27px"
                />
                <strong>+91-8448804428</strong>
              </a>
              <a className="ml-4">
                <img
                  className="pl-3"
                  src="https://www.swyftfilings.com/assets2/images/chat.png"
                  height="27px"
                  width="27px"
                />
                <strong>Chat with us</strong>
              </a>
              <a>
                <div className="btn btn-primary py-1">Start Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarTopWeb;
