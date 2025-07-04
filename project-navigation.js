
document.querySelector('.menu').addEventListener('click', e => {
  document.querySelector('.nav').classList.add('show');
  document.querySelector('.phone').style.display = 'block';
  document.querySelector('body').classList.add('lock');
});


document.querySelector('#close-menu').addEventListener('click', e => {
  document.querySelector('.nav').classList.remove('show');
  document.querySelector('.phone').style.display = 'none';
  document.querySelector('body').classList.remove('lock');
});


document.querySelectorAll('.dropdown').forEach(dropdown => {
  const btn = dropdown.querySelector('.dropbtn');
  const content = dropdown.querySelector('.dropdown-content');
  const arrow = btn.querySelector('.arrow');

  btn.addEventListener('click', e => {
    e.preventDefault();

    
    document.querySelectorAll('.dropdown').forEach(other => {
      if (other !== dropdown) {
        const otherContent = other.querySelector('.dropdown-content');
        if (otherContent) otherContent.classList.remove('show');

        const otherArrow = other.querySelector('.dropbtn .arrow');
        if (otherArrow) {
          otherArrow.src = 'images/icon-arrow-down.svg';
        }
      }
    });

    
    const isOpen = content.classList.toggle('show');

   
    if (arrow) {
      if (isOpen) {
        arrow.src = 'images/icon-arrow-up.svg';
      } else {
        arrow.src = 'images/icon-arrow-down.svg';
      }
    }
  });
});
