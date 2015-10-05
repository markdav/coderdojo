window.onload = function() {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

      context.translate(0, height /2);

      for(var angle=0; angle < Math.PI * 8; angle+= 0.01){
        var x = angle * 50,
            y = 50* Math.sin(angle);
            context.fillRect(x, y, 10, 10);

            y = 50* Math.cos(angle);
            context.fillRect(x, y, 10, 10);
      }
};
