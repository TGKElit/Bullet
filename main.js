let y = 400;
let x = 800;
let speed = 4;
let time = 0;

// [0: start_time, 1: start_x, 2: start_y, 3: x_speed, 4: y_speed, 5: size]
const shotsMap = [
    [50, 100, 10, 0, 4, 40],
    [50, 200, 10, 0, 4, 40],
    [50, 300, 10, 0, 4, 40],
    [50, 400, 10, 0, 4, 40],
    [50, 500, 10, 0, 4, 40],
    [50, 600, 10, 0, 4, 40],
    [50, 700, 10, 0, 4, 40],
    [50, 800, 10, 0, 4, 40],
    [50, 900, 10, 0, 4, 40],
    [50, 1000, 10, 0, 4, 40],
    [50, 1100, 10, 0, 4, 40],
    [50, 1200, 10, 0, 4, 40],
    [50, 1300, 10, 0, 4, 40],
    [50, 1400, 10, 0, 4, 40],

    [100, 100, 10, 1, 4, 40],
    [100, 200, 10, -1, 4, 40],
    [100, 300, 10, 1, 4, 40],
    [100, 400, 10, -1, 4, 40],
    [100, 500, 10, 1, 4, 40],
    [100, 600, 10, -1, 4, 40],
    [100, 700, 10, 1, 4, 40],
    [100, 800, 10, -1, 4, 40],
    [100, 900, 10, 1, 4, 40],
    [100, 1000, 10, -1, 4, 40],
    [100, 1100, 10, 1, 4, 40],
    [100, 1200, 10, -1, 4, 40],
    [100, 1300, 10, 1, 4, 40],
    [100, 1400, 10, -1, 4, 40],

    [200, 100, 10, 2, 6, 40],
    [200, 200, 10, 2, 6, 40],
    [200, 300, 10, 2, 6, 40],
    [200, 400, 10, 2, 6, 40],
    [200, 500, 10, 2, 6, 40],
    [200, 600, 10, 2, 6, 40],
    [200, 700, 10, 2, 6, 40],
    [200, 800, 10, 2, 6, 40],
    [200, 900, 10, 2, 6, 40],
    [200, 1000, 10, 2, 6, 40],
    [200, 1100, 10, 2, 6, 40],
    [200, 1200, 10, 2, 6, 40],
    [200, 1300, 10, 2, 6, 40],
    [200, 1400, 10, 2, 6, 40],

    [300, 100, 10, -2, 8, 40],
    [300, 200, 10, -2, 8, 40],
    [300, 300, 10, -2, 8, 40],
    [300, 400, 10, -2, 8, 40],
    [300, 500, 10, -2, 8, 40],
    [300, 600, 10, -2, 8, 40],
    [300, 700, 10, -2, 8, 40],
    [300, 800, 10, -2, 8, 40],
    [300, 900, 10, -2, 8, 40],
    [300, 1000, 10, -2, 8, 40],
    [300, 1100, 10, -2, 8, 40],
    [300, 1200, 10, -2, 8, 40],
    [300, 1300, 10, -2, 8, 40],
    [300, 1400, 10, -2, 8, 40],

];
let shots = shotsMap;
let keyState = {};

shots.forEach((shot, index) => {
    const newShot = document.createElement("div");
    document.getElementById('game-box').appendChild(newShot);
    newShot.setAttribute('id', 'shot' + index);
    newShot.setAttribute('class', 'shot');
    newShot.style.left = shot[1];
    newShot.style.top = shot [2];
    newShot.style.height = shot[5] + "px";
    newShot.style.width = shot[5] + "px";
});

window.addEventListener('keydown', function(e){
    keyState[e.keyCode] = true;
},true);    
window.addEventListener('keyup', function(e){
    keyState[e.keyCode] = false;
},true);

window.addEventListener('keydown', function(e){
    if(e.keyCode == 32) {
        document.getElementById('player').classList.toggle('elevated');
    }
})




function gameLoop() {
    
    if (keyState[37] && x > 0){
        x -= speed;
    }    
    if (keyState[39] && x < 1420){
        x += speed;
    }
    if (keyState[38] && y > 0){
        y -= speed;
    }    
    if (keyState[40] && y < 800){
        y += speed;
    }

    shots.forEach((shot, index) => {
        if(Math.sqrt(Math.pow(shot[1]-x,2)+Math.pow(shot[2]-y,2)) < shot[5]/2 + 4) {
            location.reload();
        }
        if (time > shot[0]){
            shot[1] += shot[3];
            shot[2] += shot[4];
            document.getElementById('shot' + index).style.display = "block";
            document.getElementById('shot' + index).style.left = shot[1] + "px";
            document.getElementById('shot' + index).style.top = shot[2] + "px";
        }
        if (shot[1] < 0 || shot[1] > 1420 || shot[2] < 0 || shot[2] > 800) {
            document.getElementById('shot' + index).style.display = "none";
        }

    });

    document.getElementById('player').style.left = x + "px";
    document.getElementById('player').style.top = y + "px";
    document.getElementById('timer').innerText = "Score: " + Math.round(time);
    time += 1;
    setTimeout(gameLoop, 10);
}    
gameLoop();