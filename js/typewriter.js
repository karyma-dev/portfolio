(function () {
  var i = 0;
  var txt = "Hi my name is Kary. I'm a frontend developer passionate about creating fast and responsive applications.";
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