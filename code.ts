figma.showUI(__html__, { width: 300, height: 153 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async msg => {
    let frames = figma.currentPage.children.filter(node => node.type === "FRAME");
    
    console.log(msg);
    frames.sort((frameA, frameB) => frameA.x > frameB.x ? 1 : -1);
    let frameIndex = 0;
    for(let frame of frames) {
      frameIndex++;

      if(msg.numberFramesEnabled) frame.name = `${msg.prefix}${frameIndex}`;

      let node = frame as unknown as PageNode;
      let textFields = node.findAll(node => {
        return node.type === "TEXT";
      });
      
      for(let textField of textFields) {
        textField = textField as TextNode;
        let fontName = textField.fontName as FontName;
        if(!fontName.family) continue;
        if(textField.name.indexOf('{p#}') > -1) {
          console.log(fontName);
          await figma.loadFontAsync(fontName);
          textField.characters = String(frameIndex);
        }
      }
    }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
