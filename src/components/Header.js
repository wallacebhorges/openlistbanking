import React from 'react';

const Header = () => {
    return (

        <header class="navbar fixed-top flex-md-nowrap p-0 shadow">
            <div class="container-fluid">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
                    <img ssrc="./assets/logo.svg" alt="Open Banking" width="150" />
                </a>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-nav">
                    <div class="nav-item text-nowrap">
                        <a class="nav-link px-3" href="#">
                            <img src="assets/liga-desliga.svg" alt="Botão de Sair" />
                        </a>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
