import React from "react";
import "../../styles/nav.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { hideNav, handleToogleMenu } from "@/app/utils/toogle";
export default function Nav() {
  return (
    <nav id="nav">
      <div className="logo">
        <h1>SHMOE & BROUG</h1>
      </div>
      <div className="links">
        <ul>
          <li className="" onClick={hideNav}>
            <Link className="nav-link" href="#Home">
              Home
            </Link>
          </li>
          <li onClick={hideNav}>
            <Link className="nav-link" href="#Services">
              Services
            </Link>
          </li>
          <li onClick={hideNav}>
            <Link className="nav-link" href="#About">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="contacts">
        <button className="active">BOOK NOW</button>
      </div> */}
      <div className="menu">
        <FontAwesomeIcon
          onClick={handleToogleMenu}
          icon={faBars}
          className="toggle"
        />
      </div>
    </nav>
  );
}
