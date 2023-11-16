import React from 'react';
import Text from '../Forms/Text';
import TxtForm from '../Forms/TxtForm';

const Main = () => {
  return (
    <section className="animeLeft">
      <div className="container">
        <div className="row mb-4">
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
            <span className="text-decoration-underline">Nome do paciente</span>
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
        </div>

        <h2 style={{ color: '#666' }}>Informações pessoais</h2>
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

        <hr />

        <h2 style={{ color: '#666' }}>Endereços</h2>
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

        <hr />

        <h2 style={{ color: '#666' }}>Formulário</h2>
        <TxtForm titulo="Plano de saúde:" txt="UNIMED" />
        <TxtForm titulo="Possui algum tipo de alergia?" txt="Não" />
        <TxtForm titulo="Toma algum medicamento contínuo?" txt="Não" />
        <TxtForm
          titulo="Já realizou alguma cirurgia?"
          txt="Sim, em 2010 já realizei uma cirurgia bal bla bla da Silva teste"
        />
        <TxtForm titulo="Comorbidade:" txt="DOENÇA RENAL CRÔNICA" />
      </div>
    </section>
  );
};

export default Main;
