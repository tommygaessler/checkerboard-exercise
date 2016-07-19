// Your JS goes here
var body = document.getElementsByTagName('body')[0]
body.style.margin = '0';

for (var i = 10; i < 91; i++)
{
  var random = Math.random() * (999999 - 100000) + 100000;
  random = random.toFixed(0);
  var color = document.createElement('div');
  document.body.appendChild(color);
  color.style.paddingBottom = '11.1%';
  color.style.width = '11.1%';
  color.style.background = '#' + random;
  color.style.cssFloat = 'left';
}
