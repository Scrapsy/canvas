export class Framing {
    draw_background(ctx) {
        ctx.fillStyle = "#FAFAFA";
        ctx.fillRect(0, 0, 300, 600);
    }

    draw_foreground(ctx) {
        ctx.fillStyle = "#333333";
        ctx.fillRect(0, 0, 5, 600);
        ctx.fillRect(0, 0, 300, 5);
        ctx.fillRect(295, 0, 5, 600);
        ctx.fillRect(0, 550, 300, 50);

        ctx.strokeStyle = "#000";
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
}