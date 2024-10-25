import React from 'react';
import { Button, Table, Badge, Dropdown, Form, Row, Col, Card } from 'react-bootstrap';

const Aluguel = () => {
  return (
    <div className="container my-4">
      <h2>Gestão de Locações</h2>

      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <i className="fas fa-car fa-2x"></i>
              <h4>42</h4>
              <p>Locações Ativas</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <i className="fas fa-clock fa-2x"></i>
              <h4>8</h4>
              <p>Aguardando Retirada</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <i className="fas fa-calendar-check fa-2x"></i>
              <h4>156</h4>
              <p>Concluídas no Mês</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <i className="fas fa-dollar-sign fa-2x"></i>
              <h4>R$ 45.890</h4>
              <p>Faturamento Mensal</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button className="mb-3" variant="primary">
        + Nova Locação
      </Button>

      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
                <option>Ativa</option>
                <option>Aguardando</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="periodo">
              <Form.Label>Período</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="pátio">
              <Form.Label>Pátio</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="buscar">
              <Form.Label>Buscar</Form.Label>
              <Form.Control type="text" placeholder="Cliente, placa..." />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Veículo</th>
            <th>Período</th>
            <th>Status</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="avatar-circle">
                  <span className="initials">JD</span>
                </div>
                <span>João da Silva</span>
              </div>
              <div>CNH: 123456789</div>
            </td>
            <td>
              Honda Civic 2022
              <br />
              Placa: ABC-1234
            </td>
            <td>10/12/2023 - 15/12/2023</td>
            <td>
              <Badge bg="success">Ativa</Badge>
            </td>
            <td>R$ 750,00 <br /> R$ 150/dia</td>
            <td>
              <Button variant="info" className="me-2">
                <i className="fas fa-eye"></i>
              </Button>
              <Button variant="success" className="me-2">
                <i className="fas fa-check"></i>
              </Button>
              <Button variant="danger">
                <i className="fas fa-times"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="avatar-circle">
                  <span className="initials">MP</span>
                </div>
                <span>Maria Pereira</span>
              </div>
              <div>CNH: 987654321</div>
            </td>
            <td>
              Jeep Compass 2023
              <br />
              Placa: XYZ-5678
            </td>
            <td>12/12/2023 - 14/12/2023</td>
            <td>
              <Badge bg="warning">Aguardando</Badge>
            </td>
            <td>R$ 400,00 <br /> R$ 200/dia</td>
            <td>
              <Button variant="info" className="me-2">
                <i className="fas fa-eye"></i>
              </Button>
              <Button variant="primary" className="me-2">
                <i className="fas fa-play"></i>
              </Button>
              <Button variant="danger">
                <i className="fas fa-times"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Aluguel;