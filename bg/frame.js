export function draw_frame(ctx) {
    ctx.clearRect(0, 0, 300, 600);
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, 300, 600);
    ctx.fillStyle = "#FAFAFA";
    ctx.fillRect(5, 5, 290, 545);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 600);
    ctx.lineTo(300, 600);
    ctx.lineTo(300, 0);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.moveTo(5, 5);
    ctx.lineTo(5, 549);
    ctx.lineTo(294, 549);
    ctx.lineTo(294, 5);
    ctx.lineTo(5, 5);
    ctx.stroke();
}