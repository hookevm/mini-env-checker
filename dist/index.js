"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMobileType = exports.getEnviroment = void 0;
var typing_1 = require("./typing");
function getEnviroment() {
    var UA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    // 微信环境判断
    if (typeof wx !== 'undefined') {
        return typing_1.EnvType.isWechatMini;
    }
    // 支付宝环境判断
    if (UA.search(typing_1.H5Token.ALIPAY) !== -1) {
        return typing_1.EnvType.isAlipayH5;
    }
    if ('object' === typeof worker && 'function' === typeof worker.onMessage && 'function' === typeof worker.postMessage) {
        return typing_1.EnvType.isAipayJSWorker;
    }
    if (typeof my !== 'undefined') {
        return typing_1.EnvType.isAlipayMini;
    }
    // 钉钉环境判断
    if (UA.search(typing_1.H5Token.DINGDING) !== -1) {
        return typing_1.EnvType.isDingdingH5;
    }
    // 浏览器环境判断
    if (typeof window === 'object' && typeof document === 'object' && typeof Worker === 'function') {
        return typing_1.EnvType.isBrowser;
    }
    // if (typeof globalThis === 'object' && globalThis?.constructor?.name === 'DedicatedWorkerGlobalScope') {
    //   return EnvType.isBrowserWorker;
    // }
}
exports.getEnviroment = getEnviroment;
/**
 * 手机类型判断
 * @returns
 */
function getMobileType() {
    var env = getEnviroment();
    switch (env) {
        case typing_1.EnvType.isAlipayH5:
        case typing_1.EnvType.isDingdingH5:
            var UA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
            if (UA.search(/iPhone/) !== -1) {
                return typing_1.EnvType.isIPhone;
            }
            else if (UA.search(/Android/) !== -1) {
                return typing_1.EnvType.isAndroid;
            }
            else {
                return typing_1.EnvType.UNKNOWN;
            }
        case typing_1.EnvType.isAlipayMini:
            var myUA = my.getSystemInfoSync();
            if (myUA.platform.search(/ios|iphone/ig) !== -1) {
                return typing_1.EnvType.isIPhone;
            }
            else if (myUA.platform.search(/android/ig) !== -1) {
                return typing_1.EnvType.isAndroid;
            }
            break;
        default:
            return typing_1.EnvType.UNKNOWN;
    }
    return typing_1.EnvType.UNKNOWN;
}
exports.getMobileType = getMobileType;
