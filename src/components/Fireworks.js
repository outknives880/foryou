import { jsx as _jsx } from "react/jsx-runtime";
// paste di: src/components/Fireworks.tsx
import { useEffect } from "react";
const Fireworks = () => {
    useEffect(() => {
        const canvas = document.getElementById("fireworks");
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles = [];
        class Particle {
            x;
            y;
            vx;
            vy;
            alpha;
            color;
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 5;
                this.vy = (Math.random() - 0.5) * 5;
                this.alpha = 1;
                this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= 0.01;
            }
            draw(ctx) {
                ctx.canvas.classList.add("firework-particle");
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const createFirework = () => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(x, y));
            }
        };
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.update();
                p.draw(ctx);
                if (p.alpha <= 0)
                    particles.splice(i, 1);
            });
            requestAnimationFrame(animate);
        };
        setInterval(createFirework, 1500);
        animate();
    }, []);
    return _jsx("canvas", { id: "fireworks", style: { position: "fixed", top: 0, left: 0, zIndex: -1 } });
};
export default Fireworks;
