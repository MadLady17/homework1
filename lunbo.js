window.onload = function() {
    var list = document.getElementById("list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    function animate(offset){
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + "px";
        list.style.transition = '300ms ease';  
        if(newLeft<=-588){
            list.style.left = 0 +'px';
        }
        if(newLeft>0){
            list.style.left = -544 +'px';
        }
    }
    prev.onclick = function(){
        animate(147);
    }
    next.onclick = function(){
        animate(-147);
    }
    var timer;
    function autoplay() {
        timer = setInterval(function(){
            next.onclick()
        }, 2000);
    }
    autoplay();
    var container = document.getElementById('container');
    function stopplay() {
        clearInterval(timer);
    }
    container.onmouseover = stopplay;
    container.onmouseout = autoplay;

    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    function showButton() {
        for(let i = 0; i<buttons.length; i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
            }
        }
        buttons[index-1].className = 'on';
    }

    prev.onclick = function() {
        index -= 1;
        if(index < 1){
            index = 3;
        }
        showButton();
        animate(147);
    }
    next.onclick = function() {
        index += 1;
        if(index > 3){
            index = 1;
        }
        showButton();
        animate(-147);
    }
}


