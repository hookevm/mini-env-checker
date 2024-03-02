"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H5Token = exports.EnvType = void 0;
var EnvType;
(function (EnvType) {
    EnvType["isAlipayH5"] = "isAlipayH5";
    EnvType["isAlipayMini"] = "isAlipayMini";
    EnvType["isAipayJSWorker"] = "isAipayJSWorker";
    EnvType["isBrowser"] = "isBrowser";
    EnvType["isBrowserWorker"] = "isBrowserWorker";
    EnvType["isWechatMini"] = "isWechatMini";
    EnvType["isDingdingH5"] = "isDingdingH5";
    EnvType["isIPhone"] = "isPhone";
    EnvType["isAndroid"] = "isAndroid";
    EnvType["UNKNOWN"] = "unKnown";
})(EnvType = exports.EnvType || (exports.EnvType = {}));
var H5Token;
(function (H5Token) {
    H5Token["ALIPAY"] = "Nebula";
    H5Token["DINGDING"] = "DingTalk";
})(H5Token = exports.H5Token || (exports.H5Token = {}));
