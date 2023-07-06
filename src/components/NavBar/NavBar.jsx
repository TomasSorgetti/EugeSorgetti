import React from 'react'

const NavBar = () => {
  return (
    <nav className="hidden lg:flex justify-between py-5 px-20">
      <h3>euge sorgetti</h3>
      <ul className="flex gap-4">
        <li>
          <a>about</a>
        </li>
        <li>
          <a>portfolio</a>
        </li>
        <li>
          <a>get in touch</a>
        </li>
      </ul>
      <div className="flex gap-1">
        <p>Bë</p>
        <p>In</p>
      </div>
    </nav>
  );
}

export default NavBar