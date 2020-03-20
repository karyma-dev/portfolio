(function () {
  var i = 0;
  var txt = "Hello! I'm Kary, a full stack developer passionate about creating high performing and responsive applications.";
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