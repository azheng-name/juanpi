var gug = document.querySelector('.guang');
var img = document.querySelectorAll('.guang img');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var bou = document.querySelectorAll('.bouds li');
var li = document.querySelector('.li11');
var fn1 = 0;
var fn2=null;
for (let i = 0; i < bou.length; i++) {
    bou[i].index = i;
    bou[i].onmouseover = function () {

        fn1 = this.index;
        tioy()

    }
}
gug.onmouseover=function(){
    left.style.display='block';
    right.style.display='block';
  clearInterval(fn2)
}
gug.onmouseout=function(){
    left.style.display='none';
    right.style.display='none';
    fn2=setInterval(function(){
        right.onclick()
},2000)
}
right.onclick=function(){
    fn1++;
    if(fn1>bou.length-1){
        fn1=0
    }
    tioy()
}
left.onclick=function(){
    fn1--;
    if(fn1<0){
        fn1=bou.length-1;
    }
    tioy()
}
fn2=setInterval(function(){
        right.onclick()
},2000)
function tioy() {
    for (let j = 0; j <bou.length; j++) {
        bou[j].className = '';
        img[j].className = '';
    }
    bou[fn1].className = 'li11';
     img[fn1].className = 'img-li'
}
    


