// Your JS goes here
var body = document.getElementsByTagName('body')[0]
body.style.margin = '0';

// for (var i = 10; i < 81; i++)
// {
//   var redDiv = document.createElement('div');
//   document.body.appendChild(redDiv);
//   redDiv.style.paddingBottom = '11.1%';
//   redDiv.style.width = '11.1%';
//   redDiv.style.background = '#F458' + i;
//   redDiv.style.cssFloat = 'left';
// }
// // F45866
// var redDiv = document.createElement('div');
// document.body.appendChild(redDiv);
// redDiv.style.paddingBottom = '11.1%';
// redDiv.style.width = '11.1%';
// redDiv.style.background = '#F45882';
// redDiv.style.cssFloat = 'left';

// linear-gradient(to bottom, #3d4f77, #616f92);

for (var i = 10; i < 91; i++)
{
  var grad1 = document.createElement('div');
  document.body.appendChild(grad1);
  grad1.style.paddingBottom = '11.1%';
  grad1.style.width = '11.1%';
  grad1.style.background = 'linear-gradient(to bottom, #F458' + i + ',#F458' + [i+1] +')';
  grad1.style.cssFloat = 'left';
}
// F45866
// var grad1 = document.createElement('div');
// document.body.appendChild(grad1);
// grad1.style.paddingBottom = '11.1%';
// grad1.style.width = '11.1%';
// grad1.style.background = '#F45892';
// grad1.style.cssFloat = 'left';
