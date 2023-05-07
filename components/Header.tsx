import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-7 mx-auto bg-sage-900 text-white">
      <div className="flex justify-between items-center">
        <div>logo</div>
        <ul className="flex gap-2">
          <li id="services">
            <Link href="#">services</Link>
          </li>
          <li id="contact">contact</li>
          <li id="blog">contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
