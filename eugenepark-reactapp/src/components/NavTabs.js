import React from 'react';
import './css/navBar.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange}) {
  return (

<nav class={currentPage === 'Home' ? 'collapse' : 'navbar navbar-expand-lg navbar-light bg-transparent p-3'}>
<div class="container-fluid">
  <a class="navbar-brand" href="#home">CroutonSoftware</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
      <li className="nav-item">
        <a aria-current="page" href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          Home
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          About
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          Portfolio
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          Contact
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>
  );
}

export default NavTabs;

{/* <nav class={currentPage === 'Home' ? 'collapse' : 'navbar navbar-expand-lg navbar-light bg-info p-3'}>
<div class="container-fluid">
  <a class="navbar-brand" href="#home">TheMostMagicCrouton</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item">
        <a aria-current="page" href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          Home
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          About
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          Portfolio
        </a>
      </li>
      <li class="nav-item">
        <a aria-current="page" href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link mx-2 active' : 'nav-link mx-2'}>
          Contact
        </a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Company
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Blog</a></li>
          <li><a class="dropdown-item" href="#">About Us</a></li>
          <li><a class="dropdown-item" href="#">Contact us</a></li>
        </ul>
      </li> */}
    // </ul>
    {/* <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
      <li class="nav-item mx-2">
        <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-google-plus-square"></i></a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-twitter"></i></a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-facebook-square"></i></a>
      </li>
    </ul> */}
//   </div>
// </div>
// </nav> */}