import Matter from "matter-js";
        
document.addEventListener("DOMContentLoaded", () => {
    const {
        Engine,
        Render,
        Runner,
        Composites,
        Composite,
        Bodies
    } = Matter;

    const engine = Engine.create();

    const world = engine.world;


    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: true
        }
    });

    Render.run(render);

    var runner = Runner.create();
    Runner.run(runner, engine);
    // add bodies

    var stack = Composites.stack(100, 600 - 21 - 20 * 20, 10, 10, 20, 0, function (x: number, y: number) {
        return Bodies.circle(x, y, 20);
    });

    Composite.add(world, [
        // walls
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        stack
    ]);

    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });
});