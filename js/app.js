let search_btn = document.querySelector('.search_btn');
let del = document.querySelector('.del');
let searchbox = document.getElementById('search');
let board = document.querySelector('.board');
let board_btn = document.querySelector('.board-btn');

search_btn.addEventListener('click', search = () => {
  const searchbox = document.getElementById('search').value.toUpperCase();
  const storeitems = document.getElementById('list');
  const multik_item = document.querySelectorAll('.multik_item');
  const pname = storeitems.getElementsByTagName('h4');
  board.style.display = 'none';


  for (let i = 0; i < pname.length; i++) {
    const match = multik_item[i].getElementsByTagName('h4')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        multik_item[i].style.display = '';
      } else {
        multik_item[i].style.display = 'none';
        board.style.display = 'none';
      }
    }
  }
});

board_btn.addEventListener('click', search = () => {
  const searchbox = document.getElementById('search').value.toUpperCase();
  const storeitems = document.getElementById('list');
  const multik_item = document.querySelectorAll('.multik_item');
  const pname = storeitems.getElementsByTagName('h4');
  board.style.display = 'none';


  for (let i = 0; i < pname.length; i++) {
    const match = multik_item[i].getElementsByTagName('h4')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        multik_item[i].style.display = '';
      } else {
        multik_item[i].style.display = 'none';
        board.style.display = 'none';
      }
    }
  }
});

del.addEventListener('click', () => {
  searchbox.value = searchbox.value.slice(0, -1)
})

searchbox.addEventListener('click', () => {
  board.style.display = 'flex'
})



