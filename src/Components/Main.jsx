import React from 'react';
import Text from '../Forms/Text';
import TxtForm from '../Forms/TxtForm';
import MapCoordinates from './MapCoordinates';
import AsyncSelect from 'react-select/async';

const Main = () => {
  const [contato, setContato] = React.useState(null);
  const [formData, setFormData] = React.useState(null);

  async function fetchDados(acao, body) {
    const url = `https://tecnoatualizados.com/projetos/tcc/api/metodos/formWeb.php?acao=${acao}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  async function loadFormData(dados) {
    if (dados) {
      setFormData(null);
      let { tipo, codigo } = dados;
      const data = await fetchDados('formulario', { tipo, codigo });
      setFormData(data);
    } else {
      setFormData(null);
    }
  }

  const loadOptions = async (inputValue) => {
    if (inputValue) {
      const data = await fetchDados('select', { campo: inputValue, contato });

      return data.map((item) => {
        const { codigo, nome, cpf, tipo } = item;
        const flagTipo = tipo === 'U' ? 'usuário' : 'contato';
        const cpfPart = cpf ? ` - ${cpf}` : '';

        return {
          value: codigo,
          label: `Código ${flagTipo}: ${codigo} - ${nome}${cpfPart}`,
          ...item,
        };
      });
    }
  };

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
            <AsyncSelect
              isClearable
              loadOptions={loadOptions}
              onChange={loadFormData}
              placeholder="Comece a digitar..."
            />
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

        {formData && (
          <>
            <div className="col">
              <h2 className="subtitulo">Informações do Usuário</h2>
              <div className="row mb-3">
                <div className="col-4">
                  <Text titulo="Código do Usuário:" txt={formData.id_usuario} />
                </div>
                <div className="col-4">
                  <Text titulo="Nome do usuário:" txt={formData.nome_usuario} />
                </div>
                <div className="col-4">
                  <Text titulo="E-mail:" txt={formData.email_usuario} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <Text titulo="CPF:" txt={formData.cpf_usuario} />
                </div>
                <div className="col-4">
                  <Text
                    titulo="Data de Nascimento:"
                    txt={formData.dt_nascimento}
                  />
                </div>
                <div className="col-4">
                  <Text titulo="Sexo:" txt={formData.tp_sexo} />
                </div>
              </div>
            </div>

            <hr />

            {contato && (
              <div className="col">
                <h2 className="subtitulo">Informações do Contato</h2>
                <div className="row mb-3">
                  <div className="col-4">
                    <Text
                      titulo="Código do Contato:"
                      txt={formData.id_contato}
                    />
                  </div>
                  <div className="col-4">
                    <Text
                      titulo="Nome do contato:"
                      txt={formData.nome_contato}
                    />
                  </div>
                  <div className="col-4">
                    <Text titulo="CPF:" txt={formData.cpf_contato} />
                  </div>
                </div>

                <hr />
              </div>
            )}

            <div className="col">
              <h2 className="subtitulo">
                Formulário do {contato ? 'Contato' : 'Usuário'}
              </h2>
              <div className="col">
                <div className="row mb-3">
                  <div className="col-3">
                    <Text titulo="Telefone:" txt={formData.telefone} />
                  </div>
                  <div className="col-3">
                    <Text titulo="Celular:" txt={formData.celular} />
                  </div>
                  <div className="col-3">
                    <Text titulo="Estado:" txt={formData.estado} />
                  </div>
                  <div className="col-3">
                    <Text titulo="Cidade:" txt={formData.cidade} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-3">
                    <Text titulo="CEP:" txt={formData.cep} />
                  </div>
                  <div className="col-3">
                    <Text titulo="Endereço:" txt={formData.endereco} />
                  </div>
                  <div className="col-3">
                    <Text titulo="Bairro:" txt={formData.bairro} />
                  </div>
                  <div className="col-3">
                    <Text titulo="Complemento:" txt={formData.complemento} />
                  </div>
                </div>
              </div>
              <TxtForm titulo="Plano de saúde:" txt={formData.plano_saude} />
              <TxtForm
                titulo="Possui algum tipo de alergia?"
                txt={formData.alergia}
              />
              <TxtForm
                titulo="Toma algum medicamento contínuo?"
                txt={formData.med_continuo}
              />
              <TxtForm
                titulo="Já realizou alguma cirurgia?"
                txt={formData.cirurgia}
              />
              <TxtForm titulo="Comorbidade:" txt={formData.comorbidade} />
            </div>

            <hr />

            <div className="col">
              <h2 className="subtitulo">Localização</h2>
              {formData.longitude ? (
                <>
                  <p>Última localização do usuário - {formData.dthr_local}</p>
                  <MapCoordinates
                    longitude={formData.longitude}
                    latitude={formData.latitude}
                  />
                </>
              ) : (
                'Não localizada'
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Main;
