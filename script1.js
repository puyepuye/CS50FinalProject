window.onload = function(){
  $(document).keyup(function(event) {
    pop();
  });
  var img = document.getElementById("popcat1");
  //var point = document.getElementById("point");
  //var score = 0;
  var point = getCookie("0");
  //var audio = new Audio("pop.mp3");

  img.addEventListener('mousedown', function (){
      increaseScore();
      img.src = 'malan2.png';
      //audio.play
  });

  img.addEventListener('mouseup', function (){
      img.src = 'malan1.png';
  });

  function increaseScore(){
      point = Number(point) + 1;
      setCookie("0", point);
      document.getElementById("point").innerHTML = point
  }

  function setCookie(cpoint, cvalue) {
      document.cookie = cpoint + "=" + cvalue;
  }

  function getCookie(cpoint) {
      let pname = cpoint + "=";
      let ca = document.cookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(pname) == 0) {
          return c.substring(pname.length, c.length);
        }
      }
      return "0";
  }
}
