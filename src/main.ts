import { Application, Assets, Graphics } from 'pixi.js';


/** The PixiJS app Application instance, shared across the project */
export const app = new Application();

let hasInteracted = false;


/** Setup app and initialise assets */
async function init() {
    // Initialize the app
    await app.init({
        backgroundColor: 0x000000,
        resizeTo: window,
        width: 600,
        height: 600
    });

    // Add pixi canvas element to the document's body
    document.body.appendChild(app.canvas);

    // Trigger the first resize
    //resize();

    const center = new Graphics();

    center.rect(300-5, 300-5, 10, 10);
    center.fill(0xde3249);

    app.stage.addChild(center);
}

// Init everything
init();