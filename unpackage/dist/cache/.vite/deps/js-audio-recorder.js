var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// E:/JavaProjects/zhihui/node_modules/js-audio-recorder/dist/recorder.js
var require_recorder = __commonJS({
  "E:/JavaProjects/zhihui/node_modules/js-audio-recorder/dist/recorder.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Recorder = e() : t.Recorder = e();
    }(exports, function() {
      return function(t) {
        var e = {};
        function n(i) {
          if (e[i])
            return e[i].exports;
          var o = e[i] = { i, l: false, exports: {} };
          return t[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, i) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: i });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var i = /* @__PURE__ */ Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var o in t2)
              n.d(i, o, (function(e3) {
                return t2[e3];
              }).bind(null, o));
          return i;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "", n(n.s = 1);
      }([function(t, e, n) {
        "use strict";
        function i(t2, e2, n2) {
          for (var i2 = 0; i2 < n2.length; i2++)
            t2.setUint8(e2 + i2, n2.charCodeAt(i2));
        }
        Object.defineProperty(e, "__esModule", { value: true }), e.compress = function(t2, e2, n2) {
          for (var i2 = e2 / n2, o = Math.max(i2, 1), r = t2.left, a = t2.right, s = Math.floor((r.length + a.length) / i2), u = new Float32Array(s), c = 0, l = 0; c < s; ) {
            var f = Math.floor(l);
            u[c] = r[f], c++, a.length && (u[c] = a[f], c++), l += o;
          }
          return u;
        }, e.encodePCM = function(t2, e2, n2) {
          void 0 === n2 && (n2 = true);
          var i2 = 0, o = t2.length * (e2 / 8), r = new ArrayBuffer(o), a = new DataView(r);
          if (8 === e2)
            for (var s = 0; s < t2.length; s++, i2++) {
              var u = (c = Math.max(-1, Math.min(1, t2[s]))) < 0 ? 128 * c : 127 * c;
              u = +u + 128, a.setInt8(i2, u);
            }
          else
            for (s = 0; s < t2.length; s++, i2 += 2) {
              var c = Math.max(-1, Math.min(1, t2[s]));
              a.setInt16(i2, c < 0 ? 32768 * c : 32767 * c, n2);
            }
          return a;
        }, e.encodeWAV = function(t2, e2, n2, o, r, a) {
          void 0 === a && (a = true);
          var s = n2 > e2 ? e2 : n2, u = r, c = new ArrayBuffer(44 + t2.byteLength), l = new DataView(c), f = o, p = 0;
          i(l, p, "RIFF"), p += 4, l.setUint32(p, 36 + t2.byteLength, a), i(l, p += 4, "WAVE"), i(l, p += 4, "fmt "), p += 4, l.setUint32(p, 16, a), p += 4, l.setUint16(p, 1, a), p += 2, l.setUint16(p, f, a), p += 2, l.setUint32(p, s, a), p += 4, l.setUint32(p, f * s * (u / 8), a), p += 4, l.setUint16(p, f * (u / 8), a), p += 2, l.setUint16(p, u, a), i(l, p += 2, "data"), p += 4, l.setUint32(p, t2.byteLength, a), p += 4;
          for (var d = 0; d < t2.byteLength; )
            l.setUint8(p, t2.getUint8(d)), p++, d++;
          return l;
        };
      }, function(t, e, n) {
        "use strict";
        var i, o = this && this.__extends || (i = function(t2, e2) {
          return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3)
              e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          i(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        Object.defineProperty(e, "__esModule", { value: true });
        var r = n(2), a = n(0), s = n(3), u = function(t2) {
          function e2(e3) {
            void 0 === e3 && (e3 = {});
            var n2 = t2.call(this, e3) || this;
            return n2.isrecording = false, n2.ispause = false, n2.isplaying = false, n2;
          }
          return o(e2, t2), e2.prototype.setOption = function(t3) {
            void 0 === t3 && (t3 = {}), this.setNewOption(t3);
          }, e2.prototype.start = function() {
            return this.isrecording ? Promise.reject() : (this.isrecording = true, this.startRecord());
          }, e2.prototype.pause = function() {
            this.isrecording && !this.ispause && (this.ispause = true, this.pauseRecord());
          }, e2.prototype.resume = function() {
            this.isrecording && this.ispause && (this.ispause = false, this.resumeRecord());
          }, e2.prototype.stop = function() {
            this.isrecording && (this.isrecording = false, this.ispause = false, this.stopRecord());
          }, e2.prototype.play = function() {
            this.stop(), this.isplaying = true, this.onplay && this.onplay(), s.default.addPlayEnd(this.onplayend);
            var t3 = this.getWAV();
            t3.byteLength > 44 && s.default.play(t3.buffer);
          }, e2.prototype.getPlayTime = function() {
            return s.default.getPlayTime();
          }, e2.prototype.pausePlay = function() {
            !this.isrecording && this.isplaying && (this.isplaying = false, this.onpauseplay && this.onpauseplay(), s.default.pausePlay());
          }, e2.prototype.resumePlay = function() {
            this.isrecording || this.isplaying || (this.isplaying = true, this.onresumeplay && this.onresumeplay(), s.default.resumePlay());
          }, e2.prototype.stopPlay = function() {
            this.isrecording || (this.isplaying = false, this.onstopplay && this.onstopplay(), s.default.stopPlay());
          }, e2.prototype.destroy = function() {
            return s.default.destroyPlay(), this.destroyRecord();
          }, e2.prototype.getRecordAnalyseData = function() {
            return this.getAnalyseData();
          }, e2.prototype.getPlayAnalyseData = function() {
            return s.default.getAnalyseData();
          }, e2.prototype.getPCM = function() {
            this.stop();
            var t3 = this.getData();
            return t3 = a.compress(t3, this.inputSampleRate, this.outputSampleRate), a.encodePCM(t3, this.oututSampleBits, this.littleEdian);
          }, e2.prototype.getPCMBlob = function() {
            return new Blob([this.getPCM()]);
          }, e2.prototype.downloadPCM = function(t3) {
            void 0 === t3 && (t3 = "recorder");
            var e3 = this.getPCMBlob();
            r.downloadPCM(e3, t3);
          }, e2.prototype.getWAV = function() {
            var t3 = this.getPCM();
            return a.encodeWAV(t3, this.inputSampleRate, this.outputSampleRate, this.config.numChannels, this.oututSampleBits, this.littleEdian);
          }, e2.prototype.getWAVBlob = function() {
            return new Blob([this.getWAV()], { type: "audio/wav" });
          }, e2.prototype.downloadWAV = function(t3) {
            void 0 === t3 && (t3 = "recorder");
            var e3 = this.getWAVBlob();
            r.downloadWAV(e3, t3);
          }, e2.prototype.download = function(t3, e3, n2) {
            r.download(t3, e3, n2);
          }, e2.prototype.getChannelData = function() {
            var t3 = this.getPCM(), e3 = t3.byteLength, n2 = this.littleEdian, i2 = { left: null, right: null };
            if (2 === this.config.numChannels) {
              var o2 = new DataView(new ArrayBuffer(e3 / 2)), r2 = new DataView(new ArrayBuffer(e3 / 2));
              if (16 === this.config.sampleBits)
                for (var a2 = 0; a2 < e3 / 2; a2 += 2)
                  o2.setInt16(a2, t3.getInt16(2 * a2, n2), n2), r2.setInt16(a2, t3.getInt16(2 * a2 + 2, n2), n2);
              else
                for (a2 = 0; a2 < e3 / 2; a2 += 2)
                  o2.setInt8(a2, t3.getInt8(2 * a2)), r2.setInt8(a2, t3.getInt8(2 * a2 + 1));
              i2.left = o2, i2.right = r2;
            } else
              i2.left = t3;
            return i2;
          }, e2;
        }(n(5).default);
        e.default = u;
      }, function(t, e, n) {
        "use strict";
        function i(t2, e2, n2) {
          var i2 = document.createElement("a");
          i2.href = window.URL.createObjectURL(t2), i2.download = e2 + "." + n2, i2.click();
        }
        Object.defineProperty(e, "__esModule", { value: true }), e.downloadWAV = function(t2, e2) {
          void 0 === e2 && (e2 = "recorder"), i(t2, e2, "wav");
        }, e.downloadPCM = function(t2, e2) {
          void 0 === e2 && (e2 = "recorder"), i(t2, e2, "pcm");
        }, e.download = function(t2, e2, n2) {
          return i(t2, e2, n2);
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(4), o = null, r = 0, a = 0, s = null, u = null, c = null, l = false, f = 0, p = function() {
        };
        function d() {
          return l = false, s.decodeAudioData(c.slice(0), function(t2) {
            (o = s.createBufferSource()).onended = function() {
              l || (f = s.currentTime - a + r, p());
            }, o.buffer = t2, o.connect(u), u.connect(s.destination), o.start(0, r), a = s.currentTime;
          }, function(t2) {
            i.throwError(t2);
          });
        }
        function h() {
          o && (o.stop(), o = null);
        }
        var y = function() {
          function t2() {
          }
          return t2.play = function(t3) {
            return s || (s = new (window.AudioContext || window.webkitAudioContext)(), (u = s.createAnalyser()).fftSize = 2048), this.stopPlay(), c = t3, f = 0, d();
          }, t2.pausePlay = function() {
            h(), r += s.currentTime - a, l = true;
          }, t2.resumePlay = function() {
            return d();
          }, t2.stopPlay = function() {
            r = 0, c = null, h();
          }, t2.destroyPlay = function() {
            this.stopPlay();
          }, t2.getAnalyseData = function() {
            var t3 = new Uint8Array(u.frequencyBinCount);
            return u.getByteTimeDomainData(t3), t3;
          }, t2.addPlayEnd = function(t3) {
            void 0 === t3 && (t3 = function() {
            }), p = t3;
          }, t2.getPlayTime = function() {
            var t3 = l ? r : s.currentTime - a + r;
            return f || t3;
          }, t2;
        }();
        e.default = y;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.throwError = function(t2) {
          throw new Error(t2);
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(0), o = function() {
          function t2(e2) {
            void 0 === e2 && (e2 = {}), this.size = 0, this.lBuffer = [], this.rBuffer = [], this.tempPCM = [], this.inputSampleBits = 16, this.fileSize = 0, this.duration = 0, this.needRecord = true;
            var n2, i2 = new (window.AudioContext || window.webkitAudioContext)();
            this.inputSampleRate = i2.sampleRate, this.setNewOption(e2), this.littleEdian = (n2 = new ArrayBuffer(2), new DataView(n2).setInt16(0, 256, true), 256 === new Int16Array(n2)[0]), t2.initUserMedia();
          }
          return t2.prototype.setNewOption = function(t3) {
            void 0 === t3 && (t3 = {}), this.config = { sampleBits: ~[8, 16].indexOf(t3.sampleBits) ? t3.sampleBits : 16, sampleRate: ~[8e3, 11025, 16e3, 22050, 24e3, 44100, 48e3].indexOf(t3.sampleRate) ? t3.sampleRate : this.inputSampleRate, numChannels: ~[1, 2].indexOf(t3.numChannels) ? t3.numChannels : 1 }, this.outputSampleRate = this.config.sampleRate, this.oututSampleBits = this.config.sampleBits;
          }, t2.prototype.startRecord = function() {
            var t3 = this;
            return this.context && this.destroyRecord(), this.initRecorder(), navigator.mediaDevices.getUserMedia({ audio: true }).then(function(e2) {
              t3.audioInput = t3.context.createMediaStreamSource(e2), t3.stream = e2;
            }).then(function() {
              t3.audioInput.connect(t3.analyser), t3.analyser.connect(t3.recorder), t3.recorder.connect(t3.context.destination);
            });
          }, t2.prototype.pauseRecord = function() {
            this.needRecord = false;
          }, t2.prototype.resumeRecord = function() {
            this.needRecord = true;
          }, t2.prototype.stopRecord = function() {
            this.audioInput && this.audioInput.disconnect(), this.source && this.source.stop(), this.recorder.disconnect(), this.analyser.disconnect(), this.needRecord = true;
          }, t2.prototype.destroyRecord = function() {
            return this.clearRecordStatus(), this.stopStream(), this.closeAudioContext();
          }, t2.prototype.getAnalyseData = function() {
            var t3 = new Uint8Array(this.analyser.frequencyBinCount);
            return this.analyser.getByteTimeDomainData(t3), t3;
          }, t2.prototype.getData = function() {
            return this.flat();
          }, t2.prototype.clearRecordStatus = function() {
            this.lBuffer.length = 0, this.rBuffer.length = 0, this.size = 0, this.fileSize = 0, this.PCM = null, this.audioInput = null, this.duration = 0;
          }, t2.prototype.flat = function() {
            var t3 = null, e2 = new Float32Array(0);
            1 === this.config.numChannels ? t3 = new Float32Array(this.size) : (t3 = new Float32Array(this.size / 2), e2 = new Float32Array(this.size / 2));
            for (var n2 = 0, i2 = 0; i2 < this.lBuffer.length; i2++)
              t3.set(this.lBuffer[i2], n2), n2 += this.lBuffer[i2].length;
            n2 = 0;
            for (i2 = 0; i2 < this.rBuffer.length; i2++)
              e2.set(this.rBuffer[i2], n2), n2 += this.rBuffer[i2].length;
            return { left: t3, right: e2 };
          }, t2.prototype.initRecorder = function() {
            var t3 = this;
            this.clearRecordStatus(), this.context = new (window.AudioContext || window.webkitAudioContext)(), this.analyser = this.context.createAnalyser(), this.analyser.fftSize = 2048;
            var e2 = this.context.createScriptProcessor || this.context.createJavaScriptNode;
            this.recorder = e2.apply(this.context, [4096, this.config.numChannels, this.config.numChannels]), this.recorder.onaudioprocess = function(e3) {
              if (t3.needRecord) {
                var n2, i2 = e3.inputBuffer.getChannelData(0), o2 = null;
                t3.lBuffer.push(new Float32Array(i2)), t3.size += i2.length, 2 === t3.config.numChannels && (o2 = e3.inputBuffer.getChannelData(1), t3.rBuffer.push(new Float32Array(o2)), t3.size += o2.length), t3.fileSize = Math.floor(t3.size / Math.max(t3.inputSampleRate / t3.outputSampleRate, 1)) * (t3.oututSampleBits / 8), n2 = 100 * Math.max.apply(Math, i2), t3.duration += 4096 / t3.inputSampleRate, t3.onprocess && t3.onprocess(t3.duration), t3.onprogress && t3.onprogress({ duration: t3.duration, fileSize: t3.fileSize, vol: n2 });
              }
            };
          }, t2.prototype.stopStream = function() {
            this.stream && this.stream.getTracks && (this.stream.getTracks().forEach(function(t3) {
              return t3.stop();
            }), this.stream = null);
          }, t2.prototype.closeAudioContext = function() {
            return this.context && this.context.close && "closed" !== this.context.state ? this.context.close() : new Promise(function(t3) {
              t3();
            });
          }, t2.initUserMedia = function() {
            void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}), void 0 === navigator.mediaDevices.getUserMedia && (navigator.mediaDevices.getUserMedia = function(t3) {
              var e2 = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
              return e2 ? new Promise(function(n2, i2) {
                e2.call(navigator, t3, n2, i2);
              }) : Promise.reject(new Error("浏览器不支持 getUserMedia !"));
            });
          }, t2.prototype.transformIntoPCM = function(t3, e2) {
            var n2 = new Float32Array(t3), o2 = new Float32Array(e2), r = i.compress({ left: n2, right: o2 }, this.inputSampleRate, this.outputSampleRate);
            return i.encodePCM(r, this.oututSampleBits, this.littleEdian);
          }, t2.getPermission = function() {
            return this.initUserMedia(), navigator.mediaDevices.getUserMedia({ audio: true }).then(function(t3) {
              t3 && t3.getTracks().forEach(function(t4) {
                return t4.stop();
              });
            });
          }, t2;
        }();
        e.default = o;
      }]).default;
    });
  }
});

// E:/JavaProjects/zhihui/node_modules/js-audio-recorder/index.js
var require_js_audio_recorder = __commonJS({
  "E:/JavaProjects/zhihui/node_modules/js-audio-recorder/index.js"(exports, module) {
    module.exports = require_recorder();
  }
});
export default require_js_audio_recorder();
/*! Bundled license information:

js-audio-recorder/dist/recorder.js:
  (*!
   * 
   * js-audio-recorder - js audio recorder plugin
   * 
   * @version v1.0.7
   * @homepage https://github.com/2fps/recorder
   * @author 2fps <echoweb@126.com> (https://www.zhuyuntao.cn)
   * @license MIT
   *         
   *)
*/
//# sourceMappingURL=js-audio-recorder.js.map
