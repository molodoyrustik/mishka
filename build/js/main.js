var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', (e) => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG5hdk1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcclxudmFyIG5hdlRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fdG9nZ2xlJyk7XHJcblxyXG5uYXZNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1ub2pzJyk7XHJcblxyXG5uYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChuYXZNYWluLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICBuYXZNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1jbG9zZWQnKTtcclxuICAgIG5hdk1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtLW9wZW5lZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZNYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LS1jbG9zZWQnKTtcclxuICAgIG5hdk1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXYtLW9wZW5lZCcpO1xyXG4gIH1cclxufSkiXX0=
