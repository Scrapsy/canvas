export function draw_frame(ctx) {
    ctx.clearRect(0, 0, 300, 600);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 600);
    ctx.lineTo(300, 600);
    ctx.lineTo(300, 0);
    ctx.lineTo(0, 0);
    ctx.stroke();
}