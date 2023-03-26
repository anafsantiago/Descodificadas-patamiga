window.addEventListener('scroll', function(){
    var menu = document.querySelector('.menu-topo');
    menu.classList.toggle('ativo', window.scrollY > 0);
  })

