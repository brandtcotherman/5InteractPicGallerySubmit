var input = document.getElementById('myInput');

function filterImages() {
  var text = input.value.toLowerCase();
  var links = document.querySelectorAll('li a');
  for (var i = 0; i < links.length; i += 1) {
    var li = links[i].parentNode;
    var caption = links[i].getAttribute('data-title');
    var title = links[i].textContent;

    // if (caption.indexOf(text) > -1 || title.indexOf(text) > -1 ){
    if (caption.indexOf(text) > -1){
      li.style.display = '';
    } 
    else {
      li.style.display = 'none';
    }
  }
}