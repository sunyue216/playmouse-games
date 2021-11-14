window.onload = () =>{
    var play = document.getElementById('play');
    play.className = 'play1';
    play.onmousedown = () =>{
        // play.style.backgroundImage = "url('../img/play_on.png')";
        
        // play.style.backgroundColor = 'red';
        play.className = 'play2';
    
        setTimeout("javascript:location.href='index_1.html'", 1500);
    }
    // play.onmouseup = () =>{
    //     // play.style.backgroundImage = "url('../img/play——bg.png')";
        
    //     play.className = 'play1';
    // }
    
}