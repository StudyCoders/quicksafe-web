import React from 'react';
import Text from '../Forms/Text';
import TxtForm from '../Forms/TxtForm';
import MapCoordinates from './MapCoordinates';

const Main = () => {
  const [contato, setContato] = React.useState(null);
  const testCoordinates = [
    {
      lat: -22.336242338753255,
      lng: -49.06343452478047,
    },
    {
      lat: -22.3299077,
      lng: -49.0739861,
    },
    {
      lat: -22.3247475,
      lng: -49.0327961,
    },
  ];

  return (
    <section className="animeLeft p-4" style={{ backgroundColor: '#f6f6f6' }}>
      <div className="container">
        <div className="row mb-5">
          <label htmlFor="selectBusca" className="fw-bold">
            Pesquise pelo{' '}
            <span className="text-decoration-underline">Código do usuário</span>
            ,{' '}
            <span className="text-decoration-underline">Código do contato</span>
            , <span className="text-decoration-underline">CPF</span>,{' '}
            <span className="text-decoration-underline">
              Número do telefone
            </span>{' '}
            ou{' '}
            <span className="text-decoration-underline">
              Nome do solicitante
            </span>
          </label>
          <div className="col">
            <select className="form-select" id="selectBusca">
              <option>Open this select menu</option>
              <option value="1">
                Código usuário: 117 - Caio Arai - 111.111.111-11
              </option>
              <option value="2">
                Código contato: 117 - Lucas H - 111.111.111-11
              </option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 mt-2">
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                role="switch"
                id="checkContato"
                onChange={() => setContato(!contato)}
              />
              <label className="form-check-label" htmlFor="checkContato">
                Pesquisar pelo contato
              </label>
            </div>
          </div>
        </div>

        <div className="col">
          <h2 style={{ color: '#666' }}>Informações do Usuário</h2>
          <div className="row mb-3">
            <div className="col-4">
              <Text titulo="Código do Usuário:" txt="117" />
            </div>
            <div className="col-4">
              <Text titulo="Nome do usuário:" txt="CAIO TESTE" />
            </div>
            <div className="col-4">
              <Text titulo="E-mail:" txt="caio@gmail.com" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <Text titulo="CPF:" txt="000.111.720-00" />
            </div>
            <div className="col-4">
              <Text titulo="Data de Nascimento:" txt="28/06/2002" />
            </div>
            <div className="col-4">
              <Text titulo="Sexo:" txt="Masculino" />
            </div>
          </div>

          <div className="col">
            <h3 style={{ color: '#666' }}>Endereço</h3>
            <div className="row mb-3">
              <div className="col-3">
                <Text titulo="Telefone:" txt="-" />
              </div>
              <div className="col-3">
                <Text titulo="Celular:" txt="(11) 99999-9999" />
              </div>
              <div className="col-3">
                <Text titulo="Estado:" txt="SÃO PAULO" />
              </div>
              <div className="col-3">
                <Text titulo="Cidade:" txt="BAURU" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                <Text titulo="CEP:" txt="17052-080" />
              </div>
              <div className="col-3">
                <Text titulo="Endereço:" txt="Av. Getúlio Vargas, 10-130" />
              </div>
              <div className="col-3">
                <Text titulo="Bairro:" txt="Jardim América" />
              </div>
              <div className="col-3">
                <Text titulo="Complemento:" txt="Restaurante" />
              </div>
            </div>
          </div>
        </div>

        <hr />

        {contato && (
          <div className="col">
            <h2 style={{ color: '#666' }}>Informações do Contato</h2>
            <div className="row mb-3">
              <div className="col-4">
                <Text titulo="Código do Contato:" txt="2" />
              </div>
              <div className="col-4">
                <Text titulo="Nome do contato:" txt="MÃE" />
              </div>
              <div className="col-4">
                <Text titulo="CPF:" txt="-" />
              </div>
            </div>

            <hr />
          </div>
        )}

        <div className="col">
          <h2 style={{ color: '#666' }}>
            Formulário do {contato ? 'Contato' : 'Usuário'}
          </h2>
          <TxtForm titulo="Plano de saúde:" txt="UNIMED" />
          <TxtForm titulo="Possui algum tipo de alergia?" txt="Não" />
          <TxtForm titulo="Toma algum medicamento contínuo?" txt="Não" />
          <TxtForm
            titulo="Já realizou alguma cirurgia?"
            txt="Sim, em 2010 já realizei uma cirurgia bal bla bla da Silva teste"
          />
          <TxtForm titulo="Comorbidade:" txt="DOENÇA RENAL CRÔNICA" />
        </div>

        <hr />

        <div className="col">
          <h2 style={{ color: '#666' }}>Localização</h2>
          <p>Última localização - 18/11/2023 18:05:36</p>
          <MapCoordinates
            longitude={testCoordinates[1].lng}
            latitude={testCoordinates[1].lat}
          ></MapCoordinates>
        </div>
      </div>
    </section>
  );
};

export default Main;
