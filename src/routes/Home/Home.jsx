import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  return (
    <div class="bg-secondary">
      <Header />
      <div class="search-bar mt-5 ">
        <input
          type="text"
          id="vehicleSearch"
          class="form-control"
          placeholder="Buscar veículos por modelo, tipo ou localização..."
        />
        <div class="input-group-append">
          <button
            class="btn btn-primary"
            type="button"
            onclick="buscarVeiculos()"
          >
            <i class="fas fa-search"></i> Buscar
          </button>
        </div>
      </div>

      <div class="bg-light">
        <div class="row mb-5">
          <div class="col-md-4">
            <div class="dashboard-stat stat-vehicles bg-success rounded-3 d-flex col-9 align-center justify-content-center mt-5">
              <h3>Total de Veículos</h3>
              <h2>30</h2>
              <small>24 disponíveis</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="dashboard-stat stat-rentals bg-warning rounded-3 d-flex col-9 align-center justify-content-center mt-5">
              <h3>Locações Ativas</h3>
              <h2>6</h2>
              <small>2 devoluções hoje</small>
            </div>
          </div>
          <div class="col-md-4">
            <div
              styles="Height= 400px"
              class="dashboard-stat stat-warnings bg-danger rounded-3 d-flex col-9 justify-content-center mt-5"
            >
              <h3 class="mb-4">1 Alertas</h3>
              <h5>Sómente 4 carros no patio 3</h5>
            </div>
          </div>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
