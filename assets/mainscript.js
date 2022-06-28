const section1 = document.querySelector('.container');
const section2 = document.querySelector('.formSection');
const section3 = document.querySelector('.contact-page');
const listsection = document.querySelector('.list');
const homesection = document.querySelector('.home');
const add = document.querySelector('.new');
const contact = document.querySelector('.contact');

function fun1() {
  section1.style.display = 'flex';
  section2.style.display = 'none';
  section3.style.display = 'none';
}

function fun2() {
  section1.style.display = 'none';
  section2.style.display = 'block';
  section3.style.display = 'none';
}

function fun3() {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'flex';
}

homesection.addEventListener('click', fun1);
listsection.addEventListener('click', fun1);
add.addEventListener('click', fun2);
contact.addEventListener('click', fun3);

//  Luxon date and time

// eslint-disable-next-line no-undef
const { DateTime } = luxon;
const dt = DateTime.local();
const timeTag = document.querySelector('span');
timeTag.innerHTML = `${dt.toLocaleString(DateTime.DATETIME_MED)}`;