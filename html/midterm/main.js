function start(){
    //初始位置
    snake_position();
    //是否結束
    let lose = is_over();
    if(lose){
        document.body.addEventListener('keydown', play_again);
        return;
    }
    //清屏
    clear_screen();
    //eat
    eat();
    //apple
    apple();
    //snake
    snake();
    //score
    draw_score();
    //speed
    set_speed();

    timeout = setTimeout(start,1000/speed);
}

const c = document.getElementById('game');
const ctx = c.getContext('2d');


class my_snake{
    constructor(x,y){
        this.x = x;
        this.y =y;
    }
}//class

let speed = 8;

let pixel_count = 40;   //每格移動大小
let pixel_size = 40;    //每格大小

let s_x = 5;
let s_y = 5;
const snakePart =[];
let s_len = 0;

let apple_x = 2;
let apple_y = 2;

let cont_x = 0;
let cont_y = 0;

let score = 0;
let sle = 0;
let bool_keycode = false;

function snake_position(){
    s_x =s_x + cont_x;
    s_y =s_y + cont_y;
}

function is_over(){
    let over = false;
    if(s_x < 0 || s_x == 10 ||s_y < 0 ||s_y == 10){
        over = true;
    }//超出邊界

    for(let i=0;i<snakePart.length;i++){
        if(s_x != snakePart[0].x && s_y != snakePart[0].y){
            if(s_x == snakePart[i].x && s_y == snakePart[i].y){
                over = true;
            }
        }

    }//碰到身體

    if(over){
        ctx.fillStyle = "white";
        ctx.font = "50px Poppins";
        ctx.fillText("Game Over!", c.width/6.5, c.height /2);
        ctx.font = "40px Poppins";
        ctx.fillText("再玩一次?", c.width/3.5, c.height /2 + 50 );
        ctx.font = "25px Poppins";
        ctx.fillText("按空白鍵", c.width/2.7, c.height /2 +100 );
        bool_keycode = false;
    }//遊戲結束後流程

    return over;
}

function play_again(event) {
    if(event.keyCode == 32){
        location.reload();
    }
}

function clear_screen() {
    ctx.fillStyle= 'black';
    ctx.fillRect(0, 0, 400, 400);

    ctx.strokeStyle = "gray";
    ctx.strokeRect(0,0,40,40);
   
    for(let x = 0; x < 400; x+=40) {
        for(let y = 0; y < 400; y+=40) {
            ctx.strokeRect(x-0.5, y-0.5, 40, 40);  // 繪製矩形
        }
    }

}

function eat(){
    if(apple_x == s_x && apple_y == s_y){
        apple_x = Math.floor(Math.random()*10);
        apple_y = Math.floor(Math.random()*10);

        s_len++;
        score++;

        if(score > 5 && score%2 == 0){
            if(score != 0 && score >=15 && score %15 == 0){
                speed+=3;
            }else {
                speed++;
            }  
        }//變速
    }//頭碰到蘋果
    for(let i=0;i<snakePart.length;i++){
        let body = snakePart[i];

        

        if(apple_x == body.x && apple_y == body.y){
            apple_x = Math.floor(Math.random()*10);
            apple_y = Math.floor(Math.random()*10);

            s_len++;
            score++;

            if(score > 5 && score%2 == 0){
                if(score != 0 && score >=15 &&score %15 == 0){
                    speed+=5;
                }else {
                    speed++;
                }  
            }//變速
        }//身體碰到蘋果
    }
}

function apple(){
    ctx.fillStyle = "red";
    ctx.fillRect(apple_x*pixel_count,apple_y*pixel_count,pixel_size,pixel_size);
}

function snake(){
    ctx.fillStyle = "#BF00FF";
    for(let i=0;i<snakePart.length;i++){
        let body = snakePart[i];
        ctx.fillRect(body.x*pixel_count,body.y*pixel_count,pixel_size,pixel_size);
    }//draw body

    snakePart.push( new my_snake(s_x, s_y));
    if(snakePart.length > s_len){
        snakePart.shift();
    }
    ctx.fillStyle = "#4E2A84";
    ctx.fillRect(s_x*pixel_count,s_y*pixel_count,pixel_size,pixel_size);
}

function draw_score() {
    ctx.fillStyle = "white";
    ctx.font = "30px Poppins";
    ctx.fillText("Score: " + score, c.width-150, 30);
}

function set_speed() {
    if(score == 5){
        speed = 6;
    }    

}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {

    if(event.keyCode== 38 || event.keyCode== 87){
        bool_keycode = true;
        if(cont_y == 1 && s_len != 0){
            return;
        } //up
        cont_y = -1;
        cont_x = 0;
    }
    if(event.keyCode == 40 || event.keyCode == 83){
        bool_keycode = true;
        if(cont_y == -1 && s_len != 0){
            return;
        }//down
        cont_y = 1;
        cont_x = 0;
    }
    if(event.keyCode == 37 || event.keyCode== 65){
        bool_keycode = true;
        if(cont_x == 1 && s_len != 0){ 
            return;
        }//left
        cont_y = 0;
        cont_x = -1;
    }
    if(event.keyCode == 39 || event.keyCode== 68){
        bool_keycode = true;
        if(cont_x == -1 && s_len != 0){ 
            return;
        }//right
        cont_y = 0;
        cont_x = 1;
    }
    if(event.keyCode == 27 && bool_keycode == true){
        if(sle == 0){
            clearTimeout(timeout);
            sle++;
        }else{
            start();
            sle = 0;
        }
    }
}

function play_again(event) {
    if(event.keyCode == 32){
        location.reload();
    }
}


start();