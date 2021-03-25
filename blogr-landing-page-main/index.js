const iconHamburguer = document.getElementById('icon-hamburger');
const navMobile = document.querySelector('.nav__mobile');
let navListParent = document.querySelectorAll('.header-list > li');
const navListChildren = document.querySelectorAll('.header-list ul');
let list = document.querySelectorAll('.nav__mobile .navs');

const handleClickHambumger = () => {
  navMobile.classList.toggle('visible');
  iconHamburguer.src = navMobile.classList.contains('visible')
    ? './images/icon-close.svg'
    : './images/icon-hamburger.svg';
};

const hideList = (clicked,parent,lis) => {
  console.log('yy');
  lis.forEach((li, j) => {
    if (clicked === li) {
      li.classList.toggle('show');
      console.log(parent[j + 1]);
      parent[j].classList.remove('hidden');
      if (j > 0) {
        for (let i = j; i >= 0; i--) {
          parent[i].classList.remove('hidden');
        }
      }
    } else {
      parent[j].classList.add('hidden');
      li.classList.remove('show');
    }
  });
};

if (iconHamburguer.style.display !== 'none') {
  console.log('daskljd');
  iconHamburguer.addEventListener('click', handleClickHambumger);
  navListParent.forEach((item) => {
    item.addEventListener('click', (e) => {
      const currentList = document.querySelector(
        `.navs.${e.target.textContent}__ul`
      );
      hideList(currentList,navListParent,list);
      if (Array.from(list).every((li) => !li.classList.contains('show'))) {
        navListParent.forEach((li) => li.classList.remove('hidden'));
      }
    });
  });
}

  /*  Desktop Nav */
  const navDesktop = document.querySelector('.nav__desktop');
  const navListParentDestop = document.querySelectorAll(
    '.nav__desktop .header-list > li'
  );
  const listDestop = document.querySelectorAll('.nav__desktop .navs');
  navListParentDestop.forEach((heading) => {
    heading.addEventListener('mouseover', (e) => {
      const currentList = document.querySelector(
        `.nav__desktop .navs.${e.target.textContent}__ul`
      );
      console.log(e.target);
      hideList(currentList,navListParentDestop,listDestop);
      if (Array.from(listDestop).every((li) => !li.classList.contains('show'))) {
        navListParent.forEach((li) => li.classList.remove('hidden'));
      }
    });
  });

