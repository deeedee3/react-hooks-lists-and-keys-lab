import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navbarLinks = links.map((link, index) => {
    return <a key={index} href= {"#" + link} >{link}</a>
  })


  return <nav>{navbarLinks}</nav>;
}

export default NavBar;