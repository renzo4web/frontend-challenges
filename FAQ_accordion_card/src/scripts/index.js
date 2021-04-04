import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const btns = document.querySelectorAll('.question');
// const responses = document.querySelectorAll('.response');

btns.forEach((question, i) => {
  question.addEventListener('click', (e) => {
    if (question.classList.contains('show')) {
      question.classList.remove('show');
      return;
    }
    console.log(question);
    btns.forEach(res => res.classList.remove('show'));
    question.classList.add('show');
  });
});
