const iconHamburguer = document.getElementById('icon-hamburger');
const navMobile = document.querySelector('.nav__mobile');

const handleClickHambumger = () => {
  navMobile.classList.toggle('visible');
  iconHamburguer.src = navMobile.classList.contains('visible')
    ? './images/icon-close.svg'
    : './images/icon-hamburger.svg';
};

iconHamburguer.addEventListener('click', handleClickHambumger);
