const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
const lista = document.querySelector('.catalogo-lista');

setaEsquerda.addEventListener('click', () => {
    lista.scrollBy({ left: -200, behavior: 'smooth' });
});

setaDireita.addEventListener('click', () => {
    lista.scrollBy({ left: 200, behavior: 'smooth' });
});