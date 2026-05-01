"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
const isValidUrl = (url) => {
    try {
        const parseUrl = new URL(url);
        return parseUrl.protocol === "http:" || parseUrl.protocol === "https:";
    }
    catch (err) {
        return false;
    }
};
exports.isValidUrl = isValidUrl;
//# sourceMappingURL=validateUrl.js.map