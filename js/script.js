//seleção de elementos de HTML (DOM)

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

// console.log(btnMenu);
// console.log(menu);

//Função (rotina) que vai manipular o menu
function menuSite() {
    // console.log('Função acionada');
    // toggle -> altera entre add e remover uma classe
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x')
    
}


//eventos
//ao clicar no botão menu vai chamar a FUNÇÃo menuSite()
btnMenu.addEventListener('click', menuSite);