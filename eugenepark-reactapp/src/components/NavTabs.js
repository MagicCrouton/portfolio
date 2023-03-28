import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange}) {
  return (

<nav class={currentPage === 'Home' ? 'collapse' : 'navbar navbar-expand-lg navbar-light p-3'}>
<div class="container-fluid">
  <a class="navbar-brand text-light" href="#home">CroutonSoftware</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
      <li className="nav-item">
        <a aria-current="page" href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link mx-2 active text-warning' : 'nav-link mx-2 text-light'}>
          Home
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link mx-2 active text-warning' : 'nav-link mx-2 text-light'}>
          About
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link mx-2 active text-warning' : 'nav-link mx-2 text-light'}>
          Portfolio
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link mx-2 active text-warning' : 'nav-link mx-2 text-light'}>
          Contact
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link mx-2 active text-warning' : 'nav-link mx-2 text-light'}>
          Resume
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>
  );
}

export default NavTabs;