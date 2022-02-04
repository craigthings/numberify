// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    // if (msg.type === 'create-rectangles') {
    //   const nodes: SceneNode[] = [];
    //   for (let i = 0; i < msg.count; i++) {
    //     const rect = figma.createRectangle();
    //     rect.x = i * 150;
    //     rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
    //     figma.currentPage.appendChild(rect);
    //     nodes.push(rect);
    //   } // test
    //   figma.currentPage.selection = nodes;
    //   figma.viewport.scrollAndZoomIntoView(nodes);
    // }
    // var frames = figma
    // .currentPage
    // .findAll(node => node.type === "FRAME")
    // .filter(node => (node as TextNode).characters === "{p#}");
    // let textFields = frames.map(node => { return node as TextNode });
    let frames = figma.currentPage.children.filter(node => node.type === "FRAME");
    // console.log(frames);
    frames.sort((frameA, frameB) => frameA.x > frameB.x ? 1 : -1);
    frames.forEach((frame, i) => {
        console.log(frame.parent.children);
        frame.parent.children.forEach(node => { console.log(node.name); });
        frame.name = 'Slide' + (i + 1);
    });
    // textFields.forEach(text => { console.log(text.characters) });
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
