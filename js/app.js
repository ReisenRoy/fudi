(function() {
  var button = document.getElementById('toggle-menu');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    var menu = document.getElementById('extra-menu');
    menu.classList.toggle('hidden');
  });
})();