import React, { useState } from 'react';
import Header from '../../Components/Header/Header'; // Importando o componente Header
import Footer from '../../Components/Footer/Footer'; // Importando o componente Footer

const Veiculos = () => {
  // State para armazenar os dados do veículo
  const [formData, setFormData] = useState({
    modelo: '',
    tipo: '',
    localizacao: '',
    ano: '',
    preco: '',
  });

  // State para mensagens de feedback
  const [mensagem, setMensagem] = useState('');

  // Manipulador de eventos para atualizar o estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manipulador de eventos para envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!formData.modelo || !formData.tipo || !formData.localizacao || !formData.ano || !formData.preco) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de envio de dados (aqui você pode integrar com uma API ou serviço)
    console.log('Veículo cadastrado:', formData);
    setMensagem('Veículo cadastrado com sucesso!');

    // Limpar o formulário
    setFormData({
      modelo: '',
      tipo: '',
      localizacao: '',
      ano: '',
      preco: '',
    });
  };

  return (
    <div className="bg-secondary">
      <Header />
      <div className="container mt-5 mb-5">
        <h2 className="text-center">Cadastro de Veículos</h2>
        {mensagem && <div className="alert alert-info text-center">{mensagem}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              className="form-control"
              id="modelo"
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              placeholder="Digite o modelo do veículo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo</label>
            <input
              type="text"
              className="form-control"
              id="tipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              placeholder="Digite o tipo do veículo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="localizacao">Localização</label>
            <input
              type="text"
              className="form-control"
              id="localizacao"
              name="localizacao"
              value={formData.localizacao}
              onChange={handleChange}
              placeholder="Digite a localização do veículo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ano">Ano</label>
            <input
              type="number"
              className="form-control"
              id="ano"
              name="ano"
              value={formData.ano}
              onChange={handleChange}
              placeholder="Digite o ano do veículo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              className="form-control"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              placeholder="Digite o preço do veículo"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Cadastrar Veículo
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Veiculos;