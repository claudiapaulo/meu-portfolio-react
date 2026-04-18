import imgProjeto from '../img/projeto.png';

function Projects() {
  // Array de dados dos projetos
  const projetosData = [
    {
      titulo: 'Meu Portfólio',
      desc: 'Design elegante com suporte a tema escuro.',
      imagem: imgProjeto,
      url: 'https://github.com/claudiapaulo/meu-portfolio'
    },
    {
      titulo: 'Meu Portfólio React',
      desc: 'Estiloso e Moderno.',
      imagem: imgProjeto,
      url: 'https://github.com/claudiapaulo/meu-portfolio-react'
    }
  ];

  return (
    <section id="projetos">
      <div className="titulo-area">
        <h2>Projetos</h2>
        <span className="traco-decorativo"></span>
      </div>
      
      <div className="grid-trabalhos" id="container-trabalhos">
        {/* Renderizando o HTML do card diretamente dentro do map */}
        {projetosData.map((projeto, index) => (
          <article key={index} className="card-trabalho">
            <img 
              src={projeto.imagem} 
              alt={projeto.titulo} 
              className="imagem-trabalho" 
            />
            <div className="dados-trabalho">
              <h3>{projeto.titulo}</h3>
              {/* Opcional: Adicionar a descrição do projeto */}
              {/* <p>{projeto.desc}</p> */}
              <a href={projeto.url} className="ancora-repositorio">
                Explorar no GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
