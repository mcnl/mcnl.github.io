import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src="img/LogoCisterLimp.png" className="img-fluid page-scroll" alt="" style={{width:"200%"},{height:"200%"}} href="#page-top"/>
            </a>{" "}
            <a className="navbar-brand page-scroll" href="#page-top" style={{marginTop:"0.35em"}}>
              CisterLimp
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Time
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
