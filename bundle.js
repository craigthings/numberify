/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 190, height: 136 });
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUVwRCw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFLGtCQUFrQjtBQUNsQixLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFNLEdBQUcsRUFBQyxFQUFFO0lBQzdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7SUFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLEtBQUksSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsSUFBRyxHQUFHLENBQUMsbUJBQW1CO1lBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFdEUsSUFBSSxJQUFJLEdBQUcsS0FBNEIsQ0FBQztRQUN4QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLElBQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUMvQixTQUFTLEdBQUcsU0FBcUIsQ0FBQztZQUNsQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBb0IsQ0FBQztZQUM5QyxJQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQUUsU0FBUztZQUM5QixJQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7S0FDRjtJQUNILDRFQUE0RTtJQUM1RSwyRUFBMkU7SUFDM0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFBQzs7Ozs7Ozs7VUVsQ0Y7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL051bWJlcmlmeS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9OdW1iZXJpZnkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9OdW1iZXJpZnkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL051bWJlcmlmeS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAxOTAsIGhlaWdodDogMTM2IH0pO1xyXG5cclxuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXHJcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxyXG4vLyBwb3N0ZWQgbWVzc2FnZS5cclxuZmlnbWEudWkub25tZXNzYWdlID0gYXN5bmMgbXNnID0+IHtcclxuICAgIGxldCBmcmFtZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbi5maWx0ZXIobm9kZSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIik7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICBmcmFtZXMuc29ydCgoZnJhbWVBLCBmcmFtZUIpID0+IGZyYW1lQS54ID4gZnJhbWVCLnggPyAxIDogLTEpO1xyXG4gICAgbGV0IGZyYW1lSW5kZXggPSAwO1xyXG4gICAgZm9yKGxldCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgZnJhbWVJbmRleCsrO1xyXG4gICAgICBpZihtc2cubnVtYmVyRnJhbWVzRW5hYmxlZCkgZnJhbWUubmFtZSA9IGAke21zZy5wcmVmaXh9JHtmcmFtZUluZGV4fWA7XHJcblxyXG4gICAgICBsZXQgbm9kZSA9IGZyYW1lIGFzIHVua25vd24gYXMgUGFnZU5vZGU7XHJcbiAgICAgIGxldCB0ZXh0RmllbGRzID0gbm9kZS5maW5kQWxsKG5vZGUgPT4ge1xyXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09IFwiVEVYVFwiO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgdGV4dEZpZWxkIG9mIHRleHRGaWVsZHMpIHtcclxuICAgICAgICB0ZXh0RmllbGQgPSB0ZXh0RmllbGQgYXMgVGV4dE5vZGU7XHJcbiAgICAgICAgbGV0IGZvbnROYW1lID0gdGV4dEZpZWxkLmZvbnROYW1lIGFzIEZvbnROYW1lO1xyXG4gICAgICAgIGlmKCFmb250TmFtZS5mYW1pbHkpIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmKHRleHRGaWVsZC5uYW1lLmluZGV4T2YoJ3sjfScpID4gLTEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvbnROYW1lKTtcclxuICAgICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpO1xyXG4gICAgICAgICAgdGV4dEZpZWxkLmNoYXJhY3RlcnMgPSB0ZXh0RmllbGQubmFtZS5yZXBsYWNlKC97I30vZywgU3RyaW5nKGZyYW1lSW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAvLyBNYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHBsdWdpbiB3aGVuIHlvdSdyZSBkb25lLiBPdGhlcndpc2UgdGhlIHBsdWdpbiB3aWxsXHJcbiAgLy8ga2VlcCBydW5uaW5nLCB3aGljaCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXHJcbiAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxufTtcclxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9pbmRleC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9