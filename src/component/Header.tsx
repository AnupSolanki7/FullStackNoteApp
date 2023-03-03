import { message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { CgLogOff } from "react-icons/cg";
import ImgSvg from "../assets/wm.svg"
import { Link, useLocation } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const Header = () => {
  const path = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const confirm: any = (e: React.MouseEvent<HTMLElement>) => {
    message.success("Logging Out");
    setTimeout(() => {
      localStorage.removeItem("full_stack_app_user");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }, 500);
  };

  return (
    <>
      {path.pathname === "/login" || path.pathname === "/register" ? (
        ""
      ) : (
        <div className={scrolled ? "scrolled header" : "header"}>
          <div className="nav-bar">
            <div className="logo">
                <img src={ImgSvg} alt="" />
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <Link to={"/notes"}>Notes</Link>
                </li>
                <li>
                  <Link to={"/checklist"}>CheckList</Link>
                </li>
              </ul>
            </div>
            <Popconfirm
              title="LogOut"
              placement="rightBottom"
              description="Are you sure to logout?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <CgLogOff className="logout-icon" />
            </Popconfirm>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
