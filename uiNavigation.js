//Animação do carrossel para os lados
function mudarSlide(direction) {
    const slides = document.querySelectorAll('.conteudo_imagens');
    const carrossel = document.querySelector('.imagensCarrossel');
    const slideWidth = slides[0].offsetWidth;
    const numSlides = slides.length;

    if (direction === 1) {
        // Mover para a direita
        carrossel.style.transition = 'transform 1s ease-in-out';
        carrossel.style.transform = `translateX(-${slideWidth*1.069}px)`;

        setTimeout(() => {
            carrossel.appendChild(slides[0]);
            carrossel.style.transition = 'none';
            carrossel.style.transform = 'translateX(0)';
        }, 1000); 
    } else {
        // Mover para a esquerda
        carrossel.style.transition = 'none';
        carrossel.insertBefore(slides[numSlides - 1], slides[0]);
        carrossel.style.transform = `translateX(-${slideWidth*1.069}px)`;

        setTimeout(() => {
            carrossel.style.transition = 'transform 1s ease-in-out';
            carrossel.style.transform = 'translateX(0)';
        }, 10);
    }
}

// Adiciona um evento de clique a cada conteúdo do carrossel (deixa opaco ao clicar)
const conteudos = document.querySelectorAll('.conteudo_imagens');
conteudos.forEach(conteudo => {
    conteudo.addEventListener('click', () => {
        // Altera a opacidade do conteúdo clicado
        conteudo.style.opacity = '0.7'; 
        setTimeout(() => {
            conteudo.style.opacity = '1'; // Retorna a opacidade ao valor original (100%)
        }, 600);
    });
});

//Alterar texto ao clicar no botão Enviar Mensagem na seção entre em contato
function enviarMensagem() {
    var button = document.querySelector('.Botao_EnviarMensagem');
    var mensagemOriginal = button.innerHTML;
    alert("Sua mensagem chegou até nós, agradecemos por entrar em contato!");
    // Alterar o conteúdo do botão para "Mensagem enviada!"
    button.innerHTML = 'Mensagem enviada!';
    button.disabled = true;
    // Esperar 3 segundos antes de restaurar o conteúdo original
    setTimeout(function() {
        button.innerHTML = mensagemOriginal;
        button.disabled = false;
    }, 3000);
}
//Impede de arrastar a imagem dos botões
var botoes = document.querySelectorAll('.botaoFaleConosco , .botaoConhecer , .Botao_EnviarMensagem');
    botoes.forEach(function(botao) {
        botao.addEventListener('dragstart', function(event) {
            // Cancela o evento de arrastar
            event.preventDefault();
        });
    });
