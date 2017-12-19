/**
 * videojs-fmp4
 * @version 0.0.1
 * @copyright 2017 lixiaobin8878@gmail.com
 * @license Apache-2.0
 */
(function (f) { if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f() } else if (typeof define === "function" && define.amd) { define([], f) } else { var g; if (typeof window !== "undefined") { g = window } else if (typeof global !== "undefined") { g = global } else if (typeof self !== "undefined") { g = self } else { g = this } g.videojsFmp4 = f() } })(function () {
    var define, module, exports; return (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
        1: [function (require, module, exports) {
            (function (global) {
                'use strict';

                exports.__esModule = true;

                var _video = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

                var _video2 = _interopRequireDefault(_video);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @file plugin.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */

                var Html5 = _video2.default.getTech('Html5');

                var Fmp4 = function (_Html) {
                    _inherits(Fmp4, _Html);

                    function Fmp4() {
                        _classCallCheck(this, Fmp4);

                        return _possibleConstructorReturn(this, _Html.apply(this, arguments));
                    }

                    /**
                     * A getter/setter for the `Flash` Tech's source object.
                     *
                     * @param {Tech~SourceObject} [src]
                     *        The source object you want to set on the `Flash` techs.
                     *
                     * @return {Tech~SourceObject|undefined}
                     *         - The current source object when a source is not passed in.
                     *         - undefined when setting
                     */
                    Fmp4.prototype.setSrc = function setSrc(src) {
                        var video = this.el_;
                        var me = this;
                        var mediaSource = new MediaSource;
                        video.src = URL.createObjectURL(mediaSource);

                        function fetchAB(url, cb) {
                            var xhr = new XMLHttpRequest;
                            xhr.open('get', url);
                            xhr.responseType = 'arraybuffer';
                            xhr.onload = function () {
                                cb(xhr.response);
                            };
                            xhr.error = function () {
                               me.trigger('error');
                            };
                            xhr.send();
                        };
                        mediaSource.addEventListener('sourceopen', function () {
                            var mediaSource = this;
                            var sourceBuffer = mediaSource.addSourceBuffer(Fmp4.mimeCodec);
                            fetchAB(src, function (buf) {
                                sourceBuffer.addEventListener('updateend', function () {
                                    mediaSource.endOfStream();
                                    video.play();
                                });
                                sourceBuffer.appendBuffer(buf);
                            });
                        });
                    };

                    /**
                     * Dispose of Fmp4.
                     */
                    Fmp4.prototype.dispose = function dispose() {
                        _Html.prototype.dispose.call(this);
                    };

                    return Fmp4;
                }(Html5);

                Fmp4.mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

                /**
                 * Check if the Fmp4 tech is currently supported.
                 *
                 * @return {boolean}
                 *  - True if the Fmp4 tech is supported.
                 *  - False otherwise.
                 */
                Fmp4.isSupported = function () {
                    return 'MediaSource' in window && MediaSource.isTypeSupported(Fmp4.mimeCodec);
                };

                /**
                 * Fmp4 supported mime types.
                 *
                 * @constant {Object}
                 */
                Fmp4.formats = {
                    'video/fmp4': 'fmp4'
                };

                /**
                 * Check if the tech can support the given type
                 *
                 * @param {string} type
                 *        The mimetype to check
                 * @return {string} 'probably', 'maybe', or '' (empty string)
                 */
                Fmp4.canPlayType = function (type) {
                    if (Fmp4.isSupported() && type in Fmp4.formats) {
                        return 'maybe';
                    }
                    return '';
                };

                /**
                 * Check if the tech can support the given source
                 * @param {Object} srcObj
                 *        The source object
                 * @param {Object} options
                 *        The options passed to the tech
                 * @return {string} 'probably', 'maybe', or '' (empty string)
                 */
                Fmp4.canPlaySource = function (srcObj, options) {
                    return Fmp4.canPlayType(srcObj.type);
                };


                Fmp4.VERSION = '0.0.1';

                _video2.default.registerTech('fmp4', Fmp4);

                exports.default = Fmp4;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}]
    }, {}, [1])(1)
});