import PerfilImg from '../img/perfil.jpeg';

function About() {
  return (
    <section id="sobre" className="sessao-sobre-mim">
      <div className="imagem-usuario">
        <img src={PerfilImg} alt="Naiara foto-perfil" />
      </div>
      <div className="textos-pessoais">
        <h1>Ana Claudia de Paulo</h1>
        <p>Tenho 40 anos, sou religiosa e busco estudar para alcançar novos objetivos
        </p>
        <p className="paragrafo-detalhe"></p>
      </div>
    </section>
  );
}

export default About;