(function () {
  var i = 0;
  var txt = 'Lorem ipsum dummy text blabla.';
  var speed = 50;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typedtext").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
})();