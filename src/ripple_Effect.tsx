import React, { useRef, useEffect } from 'react';

// RippleとCoordsクラスの定義は同じまま使用

type Coords = {
    x: number;
    y: number;
};

class Ripple {
    position: Coords;
    circleSize: number;
    maxSize: number;
    opacity: number;
    ctx: CanvasRenderingContext2D;
    strokeColor: string;
    animationSpeed: number;
    opacityStep: number;

    constructor(x: number, y: number, circleSize: number, ctx: CanvasRenderingContext2D) {
        this.position = { x, y };
        this.circleSize = circleSize;
        this.maxSize = 100; // ここでは固定値にしていますが、設定から取得することもできます
        this.opacity = 1;
        this.ctx = ctx;
        this.strokeColor = `rgba(148, 217, 255, ${this.opacity})`; // ここも設定から取得することができます
        this.animationSpeed = 5; // これも設定から取得できます
        this.opacityStep = (this.animationSpeed / (this.maxSize - circleSize)) / 2;
    }

    update() {
        this.circleSize += this.animationSpeed;
        this.opacity -= this.opacityStep;
        this.strokeColor = `rgba(148, 217, 255, ${this.opacity})`; // 色の更新
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.arc(this.position.x, this.position.y, this.circleSize, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}


const RippleComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Rippleの設定
    // const rippleSettings = {
    //     maxSize: 100,
    //     animationSpeed: 5,
    //     strokeColor: [148, 217, 255],
    // };

    const canvasSettings = {
        blur: 8,
        ratio: 1,
    };

    useEffect(() => {
        const ripples: Ripple[] = []; // ripplesをuseEffect内に移動
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        canvas.style.filter = `blur(${canvasSettings.blur}px)`;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth * canvasSettings.ratio;
            canvas.height = window.innerHeight * canvasSettings.ratio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const canvasMouseOver = (e: MouseEvent) => {
            const x = e.clientX * canvasSettings.ratio;
            const y = e.clientY * canvasSettings.ratio;
            ripples.unshift(new Ripple(x, y, 2, ctx));
        };

        canvas.addEventListener('mousemove', canvasMouseOver);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ripples.forEach((ripple, index) => {
                ripple.update();
                ripple.draw();
                if (ripple.opacity <= 0) {
                    ripples.splice(index, 1);
                }
            });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', canvasMouseOver);
        };
    }, [canvasSettings.ratio, canvasSettings.blur]); // ripplesを依存配列から削除

    return <canvas ref={canvasRef} />;
};

export default RippleComponent;
