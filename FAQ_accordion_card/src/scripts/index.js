import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const btns = document.querySelectorAll('.question');
const imgBox = document.querySelector('.box');

btns.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (question.classList.contains('show')) {
      question.classList.remove('show');
      imgBox.classList.remove('move');
      return;
    }
    btns.forEach((res) => res.classList.remove('show'));
    question.classList.add('show');
    imgBox.classList.add('move');
  });
});
