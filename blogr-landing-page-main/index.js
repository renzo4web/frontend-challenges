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

if (iconHamburguer.style.display !== 'none') {
  console.log('daskljd');
  iconHamburguer.addEventListener('click', handleClickHambumger);
  navListParent.forEach((item) => {
    item.addEventListener('click', (e) => {
      const currentList = document.querySelector(
        `.navs.${e.target.textContent}__ul`
      );
      hideList(currentList);
      if (Array.from(list).every((li) => !li.classList.contains('show'))) {
        navListParent.forEach((li) => li.classList.remove('hidden'));
      }
    });
  });
}

/*  Desktop Nav */
const navDesktop = document.querySelector('.nav__desktop');
const navListParentDestop = document.querySelectorAll(
  '.nav__desktop .nav-heading'
);
const listDestop = document.querySelectorAll('.nav__desktop .navs');

const handler = (event) => {
  const currHover = document.querySelector(
    `.nav__desktop .navs.${event.target.textContent}__ul`
  );

  listDestop.forEach((list) => list.classList.remove('show'));
  navListParentDestop.forEach((list) => list.classList.remove('relative'));

  const parentLi = event.target.closest('li');

  parentLi.classList.add('relative');

  if (event.type == 'mouseover') {
    currHover.classList.toggle('show');
  }
};

const handlerOut = (event) => {
  listDestop.forEach((list) => list.classList.remove('show'));
  navListParentDestop.forEach((list) => list.classList.remove('relative'));
};

navListParentDestop.forEach((heading) => {
  heading.addEventListener('mouseover', handler);
});

listDestop.forEach((heading) => {
  heading.addEventListener('mouseleave', handlerOut);
});
