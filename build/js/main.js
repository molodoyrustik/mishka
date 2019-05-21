var navMain = document.querySelector('.main-nav');
var userBlock = document.querySelector('.user-block');
var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');
userBlock.classList.remove('user-block--nojs');

navToggle.addEventListener('click', (e) => {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuYXZNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XHJcbnZhciB1c2VyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ibG9jaycpO1xyXG52YXIgcGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcicpO1xyXG52YXIgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190b2dnbGUnKTtcclxuXHJcbm5hdk1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXYtLW5vanMnKTtcclxudXNlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3VzZXItYmxvY2stLW5vanMnKTtcclxuXHJcbm5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLWhlYWRlci0tY2xvc2VkJykpIHtcclxuICAgIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1oZWFkZXItLWNsb3NlZCcpO1xyXG4gICAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlci0tb3BlbmVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXItLWNsb3NlZCcpO1xyXG4gICAgcGFnZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWhlYWRlci0tb3BlbmVkJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobmF2TWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgbmF2TWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdi0tY2xvc2VkJyk7XHJcbiAgICBuYXZNYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LS1vcGVuZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2TWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdi0tY2xvc2VkJyk7XHJcbiAgICBuYXZNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1vcGVuZWQnKTtcclxuICB9XHJcbn0pIl19
