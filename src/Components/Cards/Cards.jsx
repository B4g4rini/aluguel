import React from "react";
import  './Cards.module.css'

const Cards = () => {
  return (
    <div class="vehicle-grid d-flex align-items-center">
      <div class="vehicle-card">
        <div class="position-relative">
          <img
            src="src/assets/image.png"
            alt="Honda Civic Prata 2022"
            class="img-fluid"
            width="300"
            height="200"
          />
          <span class="status-badge status-available">Disponível</span>
        </div>
        <div class="vehicle-details">
          <h5>Honda Civic 2022</h5>
          <div class="vehicle-stats">
            <div class="stat-item">
              <div>Pátio Central</div>
            </div>
            <div class="stat-item">
              <div>Flex</div>
            </div>
            <div class="stat-item">
              <div>Automatico</div>
            </div>
          
          </div>
          <div class="action-buttons">
            <button
              class="btn btn-primary btn-sm btn-icon"
              onclick="iniciarLocacao('CIV2022')"
            >
              <i class="fas fa-key"></i> Locar
            </button>
          </div>
        </div>
      </div>
      <div class="vehicle-card">
        <div class="position-relative">
          <img
            src="src/assets/image.png"
            alt="Honda Civic Prata 2022"
            class="img-fluid"
            width="300"
            height="200"
          />
          <span class="status-badge status-available">Disponível</span>
        </div>
        <div class="vehicle-details">
          <h5>Toyota Corolla 2023</h5>
          <div class="vehicle-stats">
            <div class="stat-item">
              <div>Pátio Central</div>
            </div>
            <div class="stat-item">
              <div>Flex</div>
            </div>
            <div class="stat-item">
              <div>Automatico</div>
            </div>
          
          </div>
          <div class="action-buttons">
            <button
              class="btn btn-primary btn-sm btn-icon"
              onclick="iniciarLocacao('CIV2022')"
            >
              <i class="fas fa-key"></i> Locar
            </button>
          </div>
          </div>
          </div>

          <div class="vehicle-card">
            <div class="position-relative">
            <img
            src="src/assets/image.png"
            alt="Honda Civic Prata 2022"
            class="img-fluid"
            width="300"
            height="200"
          />
              <span class="status-badge status-rented">Locado</span>
            </div>
            <div class="vehicle-details">
              <h5>Jeep Compass 2023</h5>
              <div class="vehicle-stats">
            <div class="stat-item">
              <div>Pátio 3</div>
            </div>
            <div class="stat-item">
              <div>Diesel</div>
            </div>
            <div class="stat-item">
              <div>Automatico</div>
            </div>
          
          </div>
          <div class="action-buttons">
            <button
              class="btn btn-primary btn-sm btn-icon"
              onclick="iniciarLocacao('CIV2022')"
            >
              <i class="fas fa-key"></i> Locar
            </button>
                <button
                  class="btn btn-danger btn-sm btn-icon"
                  onclick="registrarDevolucao('COM2023')"
                >
                  <i class="fas fa-undo"></i> Devolução
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Cards;
