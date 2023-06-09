import React from 'react';

function Footer({currentPage}) {
    return (
<footer className={currentPage === 'Home' ? 'collapse' : 'text-center text-white fixed-bottom'}>
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!"></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
    </section>
  </div>
  <div className="text-center p-3">
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    );
}

export default Footer;