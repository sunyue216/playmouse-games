window.onload = function () {
    var box = document.getElementsByClassName('game_box');
    var date = new Date().getSeconds();
    var reset = document.getElementById('reset');
    var menu = document.getElementById('menu');
    var goNext = document.getElementById('goNext');
    reset.onclick = function () {
        location.reload();
    }
    menu.onclick = function () {
        window.location.assign("index.html")
    }

    // var date1 = new Date();
    // console.log(date1);
    // console.log(date1 + 10);
    // console.log(date);
    var timer = setInterval(() => {
        var time1 = document.getElementsByClassName('timer')[0];
        // console.log(time1);
        // time1.className = 'timer_1';
        var times = time1.innerText;
        times--;
        time1.innerText = times;
        // console.log(times);
        if (time1.innerText == '0') {
            clearInterval(timer);
            clearInterval(creat_mouse);
            var mouseEnd = document.getElementsByClassName('mouse');
            console.log(mouseEnd);
            
                if (mouseEnd.length) {
                    for(var i = 0 ;i < mouseEnd.length; i++ ){
                        
                        mouseEnd[i].style.display = 'none';
                    mouseEnd[i].parentNode.removeChild(mouseEnd[i]);
                    }
                }
           
            
            var p = document.getElementsByTagName('p')[0].childNodes;
            var sorce = p[1].innerText;
            var sorceEnd = document.getElementById('sorceEnd');
            if (sorce < 30) { sorceEnd.innerHTML = '你的得分是' + sorce + '<br/>' + '<br/>' + '<b>loss!!!<b/>'; }
            else {
                sorceEnd.innerHTML = '你的得分是' + sorce + '<br/>' + '<br/>' + '<b>next!!!<b/>';
                goNext.style.display = 'block';
                goNext.onclick = () => {
                    window.location.assign("index_3.html")

                }

                // setTimeout("javascript:location.href='index_2.html'", 3000);
            }
        }
    }, 1000);
    // for(let i = 0; i < box.length; i++){
    //     console.log(box[i]);
    //     box[i].onclick = function(){
    //         this.innerHTML = 'hahah';
    //     }
    // }
    var mouse = document.createElement('div');
    var mouse1 = document.createElement('div');
    mouse.className = 'mouse';
    mouse1.className = 'mouse';

    var random = function () {
        var randomNum = Math.floor(Math.random() * (box.length));

        return randomNum;
    }
    var checkNum = function (num1, num2) {
        if (num1 == num2 || typeof (num2) == 'undefined') {
            num2 = random();
            // console.log(num2);
            // console.log('重复');
            return checkNum(num1, num2);
        }
        else {
            // console.log('ha'+num1);
            // console.log('hb'+num2);
            return num2;

        }

    }
    var creat_mouse = setInterval(function () {

        var indexNum = random();//生成随机数
        // console.log('aa' + indexNum);
        var indexNum1 = random();//生成随机数
        // console.log('bb' + indexNum1);

        indexNum1 = checkNum(indexNum, indexNum1);
        // console.log(indexNum);
        // console.log(indexNum1);
        //    console.log(box[indexNum]);
        // mouse.innerHTML = indexNum;
        // mouse1.innerHTML = indexNum1;
        // mouse.innerHTML ='<img src="./img/shu1.png" >< /img>'
        box[indexNum].appendChild(mouse);//随机老鼠
        setTimeout(function () {
            box[indexNum1].appendChild(mouse1);
        }, 500)

        //    console.log(mouse);
        //     mouse.onclick() = function(){
        //         mouse.parentNode.removeChild(mouse);
        //     }




        for (let i = 0; i < box.length; i++) {
            // console.log(box[i]);

            box[i].onclick = function () {//判定是否点击了老鼠
                // console.log(box[i].children);
                // console.log(box[i]);
                var p = document.getElementsByTagName('p')[0].childNodes;
                var audioBox = document.getElementById('bigBc');
                // var mouse = document.getElementsByClassName('mouse')[0];
                // var mouses = document.getElementsByClassName('mouse');
                // console.log(mouses);
                var sorce = p[1].innerText;
                var boxSelfChild = box[i].children;

                if (boxSelfChild.length !== 0) {
                    var audio = document.createElement('audio');
                    audio.src = './img/打地鼠音效mp3.mp3';
                    audio.autoplay = 'autoplay';
                    audioBox.appendChild(audio);
                    box[i].removeChild(boxSelfChild[0]);
                    sorce++;
                    p[1].innerText = sorce;//分数继承
                    if (!boxSelfChild) {
                        setInterval(function () {
                            audioBox.removeChild(audio[0]);
                        }, 500)

                    }
                }
                // if (i == indexNum && mouse)//如果不加第二个就出现多次连续点击老鼠报错问题
                // {
                //     sorce++;
                //     //    console.log(sorce + 'qq');
                //     mouse.parentNode.removeChild(mouse);
                //     p[1].innerText = sorce;//分数继承
                // }
                // console.log(sorce);
            }
        }
        // console.log(mouse);

    }, 2000);
    // creat_mouse();
    setInterval(function () {

        // console.log(new Date().getSeconds());
        // console.log(this);
        if (new Date().getSeconds() == date) {
            clearInterval(creat_mouse);
            // clearInterval(this);
            var mouseEnd = document.getElementsByClassName('mouse')[0];
            // console.log(mouseEnd);
            if (mouseEnd) {
                mouseEnd.parentNode.removeChild(mouseEnd);
            }

        }
    }, 1000);

}
