import React from 'react';

export default React.createClass({
    displayName: 'NavHeader',

    render() {
        return (

          <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand page-scroll" href="#/app"><img src="/public/landing/img/logo.png" alt="PaperPreen"></a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="page-scroll" href="#about">About</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#services">Features</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#pricing">Pricing</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#contact">Sign Up</a>
                        </li>
                        <li>
                            <a class="#" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
