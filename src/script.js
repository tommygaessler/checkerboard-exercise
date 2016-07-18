// Your JS goes here

var body = document.getElementsByTagName('body')[0]
body.style.margin = '0';

for (var i = 0; i < 40; i++)
{
  var redDiv = document.createElement('div');
  document.body.appendChild(redDiv);
  redDiv.style.paddingBottom = '11.1%';
  redDiv.style.width = '11.1%';
  redDiv.style.background = '333';
  redDiv.style.cssFloat = 'left';

  var blackDiv = document.createElement('div');
  document.body.appendChild(blackDiv);
  blackDiv.style.paddingBottom = '11.1%';
  blackDiv.style.width = '11.1%';
  blackDiv.style.background = 'black';
  blackDiv.style.cssFloat = 'left';
}
var redDiv = document.createElement('div');
document.body.appendChild(redDiv);
redDiv.style.paddingBottom = '11.1%';
redDiv.style.width = '11.1%';
redDiv.style.background = 'red';
redDiv.style.cssFloat = 'left';
