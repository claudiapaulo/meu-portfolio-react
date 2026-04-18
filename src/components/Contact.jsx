import React from 'react';

function Contact() {
  return (
    <section id="contato" className="sessao-fale-comigo">
      <h3>Entre em contato pelas redes sociais!</h3>
      <div className="icones-sociais">
        <a href="mailto:claudiapaulo281@gmail.com" title="E-mail">
          <i className="fas fa-envelope"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;