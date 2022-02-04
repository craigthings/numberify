var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Trade Gothic Next LT Pro", style: "Regular" });
    let frames = figma.currentPage.children.filter(node => node.type === "FRAME");
    // console.log(frames);
    frames.sort((frameA, frameB) => frameA.x > frameB.x ? 1 : -1);
    frames.forEach((frame, i) => {
        let node = frame;
        let textFields = node.findAll(node => {
            return node.type === "TEXT";
        });
        textFields.forEach((textField) => __awaiter(this, void 0, void 0, function* () {
            textField = textField;
            let fontName = textField.fontName;
            // await figma.loadFontAsync(fontName);
            if (textField.name.indexOf('{p#}') > -1)
                textField.characters = String(i + 1);
        }));
    });
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
});
