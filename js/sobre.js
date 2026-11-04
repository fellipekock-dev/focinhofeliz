const linksDoMenu = document.querySelectorAll('nav a[href^="#"]');

function destacarSecaoSelecionada() {
    const secaoSelecionada = window.location.hash;

    for (const link of linksDoMenu) {
        if (link.getAttribute('href') === secaoSelecionada) {
            link.setAttribute('aria-current', 'location');
        } else {
            link.removeAttribute('aria-current');
        }
    }
}

destacarSecaoSelecionada();
window.addEventListener('hashchange', destacarSecaoSelecionada);
