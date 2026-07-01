const botaoMensagem = document.querySelector('.btn-mensagem');
const formularioContato = document.querySelector('.formulario-contato');
const inputNome = document.querySelector('.input-nome');
const feedback = document.querySelector('.feedback');
const listaSkills = document.querySelector('.lista-skills');
const skillsPadrao = ['HTML', 'CSS', 'JavaScript', 'FlexBox'];
const formSkill = document.querySelector('.formSkill');
const inputSkill = document.getElementById('novaSkill');
let skills = skillsPadrao;

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

const renderizarSkills = () => {
    const skillsHTML = skills.map((skill)=>{
        return `<li>${skill}</li>`;
    });

    listaSkills.innerHTML = skillsHTML.join('');
};

const skillsSalvas = localStorage.getItem('skills');

if(skillsSalvas){
    skills = JSON.parse(skillsSalvas);
}

const salvarSkills = () => {
    localStorage.setItem('skills', JSON.stringify(skills));
}

formSkill.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const novaSkill = inputSkill.value.trim();

    if(!novaSkill){
        return;
    }

    skills.push(novaSkill);
    
    salvarSkills();
    renderizarSkills();

    formSkill.reset();
    inputNome.focus();
})

salvarSkills();

renderizarSkills();