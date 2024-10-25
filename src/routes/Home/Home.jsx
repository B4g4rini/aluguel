import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  const [dados, setDados] = useState([]); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para lidar com erros

  useEffect(() => {
    // Função para buscar dados da API
    const fetchDados = async () => {
      try {
        const response = await axios.get("https://localhost:7106/api/Veiculos");
        setDados(response.data); // Armazena os dados recebidos no estado
      } catch (err) {
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false); // Define que o carregamento foi concluído
      }
    };

    fetchDados();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-secondary">
      <Header />

      {/* Barra de Busca */}
      <div className="search-bar mt-5 mb-5 d-flex justify-content-center">
        <input
          type="text"
          id="vehicleSearch"
          className="form-control col-md-6"
          placeholder="Buscar veículos por modelo, tipo ou localização..."
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary ml-2"
            type="button"
            onClick={() => buscarVeiculos()}
          >
            <i className="fas fa-search"></i> Buscar
          </button>
        </div>
      </div>

      {/* Painel de Informações e Estatísticas */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="dashboard-stat bg-success text-white p-3 rounded-3 d-flex flex-column align-items-center justify-content-center">
              <h3>Total de Veículos</h3>
              <h2>30</h2>
              <small>24 disponíveis</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-stat bg-warning text-white p-3 rounded-3 d-flex flex-column align-items-center justify-content-center">
              <h3>Locações Ativas</h3>
              <h2>6</h2>
              <small>2 devoluções hoje</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-stat bg-danger text-white p-3 rounded-3 d-flex flex-column align-items-center justify-content-center">
              <h3>Alertas</h3>
              <h5>Sómente 4 carros no pátio 3</h5>
            </div>
          </div>
        </div>

        {/* Lista de Dados Organizada em Cartões */}
        <div className="bg-light p-4 rounded-3 mb-5">
          <h2 className="text-center mb-4">Dados do Banco de Dados</h2>
          <div className="row">
            {dados.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Veículo {index + 1}</h5>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Nome do Carro:</strong> {item.nomeCarro}
                      </li>
                      <li>
                        <strong>Modelo do Carro:</strong> {item.modeloCarro}
                      </li>
                      <li>
                        <strong>Ano do Veículo:</strong> {item.anoVeiculo}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Cards />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
