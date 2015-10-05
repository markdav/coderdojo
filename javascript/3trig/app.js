window.onload = function() {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

      var centerY = height / 2,
          centerX = width / 2,
          offset = width * 0.4,
          speed = 0.05,
          angle = 0;

      render();

      function render() {
        var x = centerX + Math.sin(angle) * offset;

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, centerY, 100, 0, Math.PI * 2, true);
        context.fill();

        angle += speed;
        requestAnimationFrame(render);

      }
};
