import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

document.querySelector('.card__share').addEventListener('click', (e) => {
  document.querySelector('.card__popup').classList.toggle('open');
});

window.addEventListener('click', (e) => {
  console.log(e.target);
  e.stopPropagation();
  if (
    e.target.matches('.card__popup.open') ||
    e.target.matches('.card__popup *') ||
    e.target.matches('.card__share')
  ) {
    return;
  }
  console.log('close');
  document.querySelector('.card__popup').classList.remove('open');
});
