import React, { useEffect } from "react";

function Loading({className}) {

    useEffect(() => {
        let canvas = document.querySelector('canvas');
        let ctx = canvas.getContext('2d');
        const width = window.innerWidth-4;
        const height = window.innerHeight-4;
        // canvas.width = width;
        // canvas.height = height;

        let enter = [true, true];
        let leave = [true, true];

        function Circle(x, y, r, color='#FFFFFF', s=0, e=Math.PI*2, c=false) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
            this.s = s;
            this.e = e;
            this.c = c;

            this.draw = () => {
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.arc(this.x, this.y, this.r, this.s, this.e, this.c);
                ctx.fill();
            }

            this.update = (circle, i) => {
                this.x++;
                if(this.x+this.r > circle.x-circle.r && enter[i]) {
                    circle.r++;
                    enter[i] = false;
                    leave[i] = true;
                }
                if(this.x-this.r > circle.x+circle.r && leave[i]) {
                    circle.r--;
                    enter[i] = true;
                    leave[i] = false;
                }
                if(this.x > circle.x + 40 && i === 0) this.x = 110;
                if(this.x > circle.x + 70 && i === 1) this.x = 80;
            }
        }

        let c1 = new Circle(150, 45, 20, 'rgba(0, 200, 200, 1)');
        let c2 = new Circle(110, 45, 12, 'rgba(0, 200, 200, 1)');
        let c3 = new Circle(80, 45, 8, 'rgba(0, 200, 200, 1)');

        function animation() {
            requestAnimationFrame(animation);
            ctx.clearRect(0, 0, width, height);
            c1.draw();
            c2.draw();
            c3.draw();
            c2.update(c1, 0);
            c3.update(c1, 1);
        }
        animation();
    }, [])

    return <canvas name="loading_canvas" className={`loading_canvas ${className}`}></canvas>
}

export default Loading