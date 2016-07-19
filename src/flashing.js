setTimeout(function(){
  window.location.reload(1);
}, 1000);

// Your JS goes here
var body = document.getElementsByTagName('body')[0]
body.style.margin = '0';

for (var i = 10; i < 91; i++)
{

  var color = document.createElement('div');
  document.body.appendChild(color);

  var random = Math.random() * (999999 - 100000) + 100000;
  random = random.toFixed(0);

  color.style.background = '#' + random;
  color.style.paddingBottom = '11.1%';
  color.style.width = '11.1%';
  color.style.cssFloat = 'left';
}

// setInterval(function (){
//
//   var random = Math.random() * (999999 - 100000) + 100000;
//   random = random.toFixed(0);
//   color.style.background = '#' + random;
//
// }, 1000);
