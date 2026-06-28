const botaoMensagem = document.querySelector('.btn-mensagem');
const formularioContato = document.querySelector('.formulario-contato');
const inputNome = document.querySelector('.input-nome');
const feedback = document.querySelector('.feedback');

botaoMensagem.addEventListener('click', ()=> {
    formularioContato.classList.toggle('escondido');
    if(formularioContato.classList.contains('escondido')){
        botaoMensagem.textContent = 'Enviar Mensagem';
    } else{
        botaoMensagem.textContent = 'Cancelar Mensagem';
    }
});

formularioContato.addEventListener('submit', (event) =>{
    event.preventDefault();
    const nome = inputNome.value;
    feedback.innerHTML = `
    <div class="feedback-sucesso">
    <span>Mensagem enviada com sucesso!, ${nome} !</span>
    <button class="fechar-feedback"> x </button>
    `;
    formularioContato.reset();
});