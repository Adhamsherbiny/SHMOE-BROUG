import React from "react";
import "@/app/styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <h1>SHMOE & BROUG</h1>
      <div className="contacts">
        <a href="tel:+970501160315">
          <FontAwesomeIcon icon={faPhone} />
          +970501160315
        </a>
        <a href="tel:+971555742400">
          <FontAwesomeIcon icon={faPhone} />
          +971555742400
        </a>
        <a href="mailto:Email:Broug2024@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          Broug2024@gmail.com
        </a>
        <a href="mailto:Email:Broug2024@gmail.com">
          <FontAwesomeIcon icon={faLocationDot} />
          Dubai
        </a>
        <a className="license">
          <FontAwesomeIcon icon={faClipboard} />
          License No. 1260978
        </a>
      </div>
      <div className="copyrights">Copyright © 2025 | SHMOE & BROUG</div>
    </div>
  );
}
