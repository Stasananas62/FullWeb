function makeBackgroundColor(color){
    document.body.style.background = color;
}

var button1 = document.getElementById('button1');
button1.addEventListener('click', function(){               //mousemove
		makeBackgroundColor('white');
});
var button2 = document.getElementById('button2');
button2.addEventListener('click', function(){
    makeBackgroundImageBack2();
});
var button3 = document.getElementById('button3');
button3.addEventListener('click', function(){
		makeBackgroundImage();
});

function makeBackgroundImage(){
    console.log('Store');
    document.body.style.backgroundImage = "url('http://i.5sfer.com/post/postImage/8ipwnn.jpg')";
  };

var button4 = document.getElementById('button4');
button4.addEventListener('click', function(){
        makeBackgroundImageBack();
});

function makeBackgroundImageBack(){
    console.log('Store');
    document.body.style.backgroundImage = "url('http://th29.st.depositphotos.com/3892937/7377/v/950/depositphotos_73776649-stock-illustration-seamless-exotic-pattern.jpg')";
};
function makeBackgroundImageBack2(){
    console.log('Store');
    document.body.style.backgroundImage = "url('http://rylik.ru/uploads/posts/2014-08/1409245434_7xfnwkr8auqo691.jpg')";
};
    function countNumber() {
            for(var i=1; i<=3; i++) {
            alert("Тяжко делать сайт в жатый срок. " + i);
            }
            };
  var div5 = document.createElement('div');
    div5.className = "alert5 alert5-success";
    div5.innerHTML ="Если грустно и одиноко то просто " + '<a href= http://met-mother.com/>нажми на меня)</a>';
    document.body.appendChild(div5);


function makeBackgroundColor2(color){
    document.body.style.background = color;
}
var DownMenu2 = document.getElementById('DownMenu2');
     DownMenu2.addEventListener('click', function(){               //mousemove
     		makeBackgroundColor('white');
     });

    var regist = document.getElementById('regist');
