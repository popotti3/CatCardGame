export function BallMovement(ctx,ball0bj){
    let data = new Ball(ball0bj.x, ball0bj.y, ball0bj.rad)
    data.draw(ctx);
    ball0bj.x += ball0bj.dx;
    ball0bj.y += ball0bj.dy;
}

class Ball{
    constructor(x, y, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
 
    }

    draw(ctx){
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(this.x,this.y,this.rad, 0, 2 * Math.PI);
            ctx.strokeStyle = "black"
            ctx.lineWidth = 4;
            ctx.fill();
            ctx.stroke();
    }

}