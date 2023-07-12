document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas") as HTMLCanvasElement;

    const size: number = 200;

    canvas.height = size;
    canvas.width = size;

    document.body.appendChild(canvas);

    const ctxNullable: CanvasRenderingContext2D | null = canvas.getContext("2d");

    if (!ctxNullable) {
        return;
    }

    const ctx: CanvasRenderingContext2D = ctxNullable;

    function init() {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, size, size);

        ctx.fillStyle = "#abcdef";

        let i = 1;

        for (let y = 10; y < size; y += 20) {
            for (let x = i * 10; x < size; x += 20) {
                ctx.fillRect(x, y, 10, 10);
            }

            i = (i + 1) % 2;
        }

        window.requestAnimationFrame(draw);
    }

    let count = 0;

    function draw() {
        if (++count < 300) {
            window.requestAnimationFrame(draw);
        }
    }

    window.requestAnimationFrame(init);
});