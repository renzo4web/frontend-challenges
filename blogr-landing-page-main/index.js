const iconHamburguer = document.getElementById('icon-hamburger');
const navMobile = document.querySelector('.nav__mobile');
const navListParent = document.querySelectorAll('.header-list > li');
const navListChildren = document.querySelectorAll('.header-list ul');
const list = document.querySelectorAll('.navs');

const handleClickHambumger = () => {
  navMobile.classList.toggle('visible');
  iconHamburguer.src = navMobile.classList.contains('visible')
    ? './images/icon-close.svg'
    : './images/icon-hamburger.svg';
};

iconHamburguer.addEventListener('click', handleClickHambumger);

const hideList = (clicked) => {

  list.forEach((li, j) => {
    if (clicked === li) {
      li.classList.toggle('show');
      console.log(navListParent[j + 1]);
      navListParent[j].classList.remove('hidden');
      if (j > 0) {
        for (let i = j; i >= 0; i--) {
          navListParent[i].classList.remove('hidden');
        }
      }
    } else {
      navListParent[j].classList.add('hidden');
      li.classList.remove('show');
    }
  });
};

navListParent.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentList = document.querySelector(
      `.navs.${e.target.textContent}__ul`
    );
    hideList(currentList);
   if (Array.from(list).every(li => !li.classList.contains("show"))){
     navListParent.forEach(li=> li.classList.remove("hidden"))
   }
  });
});
