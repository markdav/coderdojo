window.onload = function() {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

      var centerY = height / 2,
          centerX = width / 2,
          xRadius = 200,
          yRadius = 400,
          x_angle = 0,
          x_speed = 0.03,
          y_angle = 0,
          y_speed = 0.01,
          x, y;

      render();

      function render() {
        // create a circle
        context.clearRect(0, 0, width, height);

        x = centerX + Math.cos(x_angle) * xRadius;
        y = centerY + Math.sin(y_angle) * yRadius;

        context.beginPath();

        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
        x_angle += x_speed;
        y_angle += y_speed;

        requestAnimationFrame(render);
      }
};
