import React, { Component } from 'react';
import './dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import ParticipantList from './components/ParticipantList';


class App extends Component {
  state = {
    participants: [],
  }

  async componentDidMount() {
    const response = await ParticipantList.get('');
    await this.updateParticipantList();
    this.interval = setInterval(() => this.updateParticipantList(), 60 * 60 * 1000);
    this.setState({ participants: response.data });
    console.log(`Lista de participantes atualizada em ${new Date().toLocaleString()}`);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async updateParticipantList() {
    const response = await ParticipantList.get('');
    this.setState({ participants: response.data });
  }

  render() {
    const { participants } = this.state;
    const images = {};

    return (
      <div class="lista container-fluid">
        <Header />

        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
            <div class="position-sticky pt-3 sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="bi bi-people-fill"></i>
                    Lista Participantes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-card-checklist"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-file-bar-graph"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-card-image"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-diagram-3"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-arrow-down-square-fill"></i>
                    Loren Ipsum
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Relatórios Salvos</span>
                <a class="link-secondary" href="#" aria-label="Add a new report">
                  <i class="bi bi-bar-chart-line-fill"></i>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-bank"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-bell-fill"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-briefcase"></i>
                    Loren Ipsum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-upload"></i>
                    Loren Ipsum
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

              <h1 class="h2">Lista de Participantes Open Banking</h1>

              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Compartilhar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
                </div>

              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" class="th-col-1">Marca</th>
                    <th scope="col" class="th-col-2">Nome</th>
                    <th scope="col" class="th-col-3">Configuração/discovery</th>
                  </tr>
                </thead>
                {participants.map(participant => {
                  const { AuthorisationServers, RegisteredName, OrganisationId } = participant;

                  return (
                    <tbody key={OrganisationId}>
                      {AuthorisationServers.map(authorisationServer => {
                        const { CustomerFriendlyLogoUri, OpenIDDiscoveryDocument, CustomerFriendlyName } = authorisationServer;
                        if (CustomerFriendlyLogoUri && !images[OrganisationId]) {
                          images[OrganisationId] = CustomerFriendlyLogoUri;
                        }

                        return (
                          <tr key={authorisationServer.AuthorisationServerId}>
                            <td class="td-col-1">{CustomerFriendlyLogoUri && <img src={CustomerFriendlyLogoUri} alt={`Logo `} />}</td>
                            <td class="td-col-2">{CustomerFriendlyName}</td>
                            <td class="td-col-3">
                              <a href={OpenIDDiscoveryDocument} target='_blank'>
                                <button type="button" class="btn btn-success">
                                  <i class="bi bi-filetype-json"></i>Acessar
                                </button>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  );
                })}
              </table>
            </div>


          </main>
        </div>


      </div>

    );
  };
};

export default App;