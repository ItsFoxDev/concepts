function rn(){return(Math.floor(Math.random() * 10));}
function refreshTimes(){
  var codes = document.querySelectorAll('.code');
  codes.forEach(function(e){
    e.innerHTML = '' + rn() + rn() + rn() + ' • ' + rn() + rn() + rn();
  })
  var tiles = document.querySelectorAll("tile");
  tiles.forEach(function(e){
    e.classList.add('reset');
    setTimeout(function(){e.classList.add('mw')},10);
    setTimeout(function(){e.classList.remove('reset')},20);
    setTimeout(function(){e.classList.remove('mw')},30);
  })
}
setInterval(refreshTimes,30000);
setTimeout(refreshTimes,1)