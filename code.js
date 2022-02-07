var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 300, height: 153 });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    let frames = figma.currentPage.children.filter(node => node.type === "FRAME");
    console.log(msg);
    frames.sort((frameA, frameB) => frameA.x > frameB.x ? 1 : -1);
    let frameIndex = 0;
    for (let frame of frames) {
        frameIndex++;
        if (msg.numberFramesEnabled)
            frame.name = `${msg.prefix}${frameIndex}`;
        let node = frame;
        let textFields = node.findAll(node => {
            return node.type === "TEXT";
        });
        for (let textField of textFields) {
            textField = textField;
            let fontName = textField.fontName;
            if (!fontName.family)
                continue;
            if (textField.name.indexOf('{#}') > -1) {
                console.log(fontName);
                yield figma.loadFontAsync(fontName);
                textField.characters = textField.name.replace(/{#}/g, String(frameIndex));
            }
        }
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
});
