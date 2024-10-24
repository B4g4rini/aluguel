import React from 'react'
import Header from '../../Components/Header/Header'

const veiculos = () => {
  return (
    <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Gestão de Veículos</h2>
      <button class="btn btn-primary" onclick="showAddVehicleModal()">
        <i class="fas fa-plus me-2"></i>Adicionar Veículo
      </button>
    </div>
    <div class="filter-section">
    <div class="row">
      <div class="col-md-3">
        <label class="form-label">Pátio</label>
        <select class="form-select" id="locationFilter">
          <option value="">Todos</option>
          <option>Pátio Central</option>
          <option>Pátio Sul</option>
          <option>Pátio Norte</option>
        </select>
      </div>
      <div class="col-md-3">
        <label class="form-label">Status</label>
        <select class="form-select" id="statusFilter">
          <option value="">Todos</option>
          <option>Disponível</option>
          <option>Em Manutenção</option>
          <option>Locado</option>
        </select>
      </div>
      <div class="col-md-3">
        <label class="form-label">Categoria</label>
        <select class="form-select" id="categoryFilter">
          <option value="">Todas</option>
          <option>Econômico</option>
          <option>Intermediário</option>
          <option>Luxo</option>
          <option>SUV</option>
        </select>
      </div>
      
    </div>
    
    </div>
    </div>
    

  )
}

export default veiculos