
const formulario = document.querySelector('form') ;

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML=
     "<p class='font-2-1' style=' grid-column: 1/-1 ; padding: 1rem ; border-radius: 4px; background: #f7f7f7f7;'><span style='color: #317a00;'> Mensagem enviada com sucesso </span>, em breve entraremos em contato. Geralmente respondemos em 24 horas. </p>";
  }else {
    formulario.innerHTML=
     "<p class='font-2-1' style=' grid-column: 1/-1 ; padding: 1rem ; border-radius: 4px; background: #f7f7f7f7;'><span style='color: #e00000;'> ERRO no envio </span>, você pode enviar diretamente para o nosso email em: contato@bikcrafit.net </p>";
  }
}

function enviarFormulario (event) {
   event.preventDefault () ;
   const botao = document.querySelector('form button');
   botao.disabled = true; 
   botao.innerHTML = "Envidando...";

   const data = new FormData (formulario) ;

   fetch ("./enviar.php" , {
     method: "POST" ,
     body : data ,
   }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);