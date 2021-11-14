window.onload = function () {
    var box = document.getElementsByClassName('game_box');
    var date = new Date().getSeconds();
    var reset = document.getElementById('reset');
    var menu = document.getElementById('menu');
    var goNext = document.getElementById('goNext');
    // var mian_mouseover = document.getElementById('main');
    // mian_mouseover.onmousemove = function(){
    //     this.style.cursor = "url('qw.ico'),default";
    // }
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
            var mouseEnd = document.getElementsByClassName('mouse')[0];
            //  console.log(mouseEnd);
            if (mouseEnd) {
                mouseEnd.parentNode.removeChild(mouseEnd);
            }
            var p = document.getElementsByTagName('p')[0].childNodes;
            var sorce = p[1].innerText;
            var sorceEnd = document.getElementById('sorceEnd');
            if (sorce < 3) { sorceEnd.innerHTML = '你的得分是' + sorce + '<br/>'+ '<br/>' +'<b>loss!!!<b/>'; }
            else {
                sorceEnd.innerHTML = '你的得分是' + sorce + '<br/>'+ '<br/>' + '<b>next!!!<b/>';
                goNext.style.display = 'block';
                goNext.onclick = () => {
                    window.location.assign("index_2.html")

                }
            }

            // setTimeout("javascript:location.href='index_2.html'", 3000);
        }
    }, 1000);
    // for(let i = 0; i < box.length; i++){
    //     console.log(box[i]);
    //     box[i].onclick = function(){
    //         this.innerHTML = 'hahah';
    //     }
    // }
    var mouse = document.createElement('div');
    mouse.className = 'mouse';

    var random = function () {
        var randomNum = Math.floor(Math.random() * (box.length));

        return randomNum;
    }

    var creat_mouse = setInterval(function () {

        var indexNum = random();//生成随机数
        //    console.log(indexNum);
        //    console.log(box[indexNum]);
        mouse.innerHTML = indexNum;
        // mouse.innerHTML ='<img src="./img/shu1.png" >< /img>'
        box[indexNum].appendChild(mouse);//随机老鼠

        //    console.log(mouse);
        //     mouse.onclick() = function(){
        //         mouse.parentNode.removeChild(mouse);
        //     }




        for (let i = 0; i < box.length; i++) {
            // console.log(box[i]);

            box[i].onclick = function () {//判定是否点击了老鼠
                var p = document.getElementsByTagName('p')[0].childNodes;
                var mouse = document.getElementsByClassName('mouse')[0];
                var sorce = p[1].innerText;
                // console.log(sorce);
                if (i == indexNum && mouse)//如果不加第二个就出现多次点击老鼠报错问题
                {
                    sorce++;
                    var audio = document.createElement('audio');
                    audio.src = './img/打地鼠音效mp3.mp3';
                    audio.autoplay = 'autoplay';
                    box[i].appendChild(audio);
                    // console.log(audio);
                    // audio.muted = 'muted'
                    //    console.log(sorce + 'qq');
                    mouse.parentNode.removeChild(mouse);
                    p[1].innerText = sorce;//分数继承
                    if (!mouse) {
                        // console.log(1);
                        setInterval(function () {
                            box[i].removeChild(audio[0]);
                        }, 500)

                    }
                }
                // console.log(sorce);
            }
        }
        // console.log(mouse);

    }, 1000);
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
    }, 1000)

}
