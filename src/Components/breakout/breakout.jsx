import {useRef, useEffect} from "react";
import { BallMovement } from "./BallMovement";
import data from "./data"


let{ball0bj} = data;
export default function Breakout(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const render =()=>{

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0,0,canvas.width,canvas.height)
            //ctx.fillstyle = "green";
            //ctx.fillRect(10,10,150,100)
            //console.log("Creating a circle")
           BallMovement(ctx,ball0bj);
            requestAnimationFrame(render);
        }
        render();

    }, [])


    return(
        <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
    );
}