figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async msg => {
    await figma.loadFontAsync({ family: "Trade Gothic Next LT Pro", style: "Regular" });
    let frames = figma.currentPage.children.filter(node => node.type === "FRAME");
    
    // console.log(frames);
    frames.sort((frameA, frameB) => frameA.x > frameB.x ? 1 : -1);
    frames.forEach((frame, i) => {
      let node = frame as unknown as PageNode;
      let textFields = node.findAll(node => {
        return node.type === "TEXT";
      });
      textFields.forEach(async textField => {
        textField = textField as TextNode;
        let fontName = textField.fontName as FontName;
        // await figma.loadFontAsync(fontName);
        if(textField.name.indexOf('{p#}') > -1) textField.characters = String(i + 1);
      });
    })
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
