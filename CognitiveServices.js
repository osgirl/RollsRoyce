! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.CognitiveServices = t() : e.CognitiveServices = t()
}(this, function() {
	return function(e) {
		function t(r) {
			if (n[r]) return n[r].exports;
			var o = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.i = function(e) {
			return e
		}, t.d = function(e, n, r) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 59)
	}([function(e, t, n) {
		"use strict";

		function r(e) {
			for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), r(n(32)), r(n(33)), r(n(10)), r(n(34)), r(n(1)), r(n(35)), r(n(11)), r(n(2)), r(n(36)), r(n(37)), r(n(38)), r(n(39)), r(n(40)), r(n(41)), r(n(42)), r(n(12)), r(n(43)), r(n(44)), r(n(13)), r(n(5)), r(n(14)), r(n(15)), r(n(45)), r(n(46)), r(n(47)), r(n(48))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3),
			o = function(e) {
				function t(t) {
					var n = e.call(this, t) || this;
					return n.name = "ArgumentNull", n.message = t, n
				}
				return r.__extends(t, e), t
			}(Error);
		t.ArgumentNullError = o;
		var i = function(e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return n.name = "InvalidOperation", n.message = t, n
			}
			return r.__extends(t, e), t
		}(Error);
		t.InvalidOperationError = i;
		var s = function(e) {
			function t(t, n) {
				var r = e.call(this, n) || this;
				return r.name = t + "ObjectDisposed", r.message = n, r
			}
			return r.__extends(t, e), t
		}(Error);
		t.ObjectDisposedError = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			var e = (new Date).getTime();
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
				var n = (e + 16 * Math.random()) % 16 | 0;
				return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
			})
		};
		t.CreateGuid = r;
		var o = function() {
			return r().replace(new RegExp("-", "g"), "").toUpperCase()
		};
		t.CreateNoDashGuid = o
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			function n() {
				this.constructor = e
			}
			S(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		}

		function o(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols)
				for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
			return n
		}

		function i(e, t, n, r) {
			var o, i = arguments.length,
				s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
			else
				for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
			return i > 3 && s && Object.defineProperty(t, n, s), s
		}

		function s(e, t) {
			return function(n, r) {
				t(n, r, e)
			}
		}

		function c(e, t) {
			if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		}

		function u(e, t, n, r) {
			return new(n || (n = Promise))(function(o, i) {
				function s(e) {
					try {
						u(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function c(e) {
					try {
						u(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					e.done ? o(e.value) : new n(function(t) {
						t(e.value)
					}).then(s, c)
				}
				u((r = r.apply(e, t || [])).next())
			})
		}

		function a(e, t) {
			function n(e) {
				return function(t) {
					return r([e, t])
				}
			}

			function r(n) {
				if (o) throw new TypeError("Generator is already executing.");
				for (; u;) try {
					if (o = 1, i && (s = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(i, n[1])).done) return s;
					switch (i = 0, s && (n = [0, s.value]), n[0]) {
						case 0:
						case 1:
							s = n;
							break;
						case 4:
							return u.label++, {
								value: n[1],
								done: !1
							};
						case 5:
							u.label++, i = n[1], n = [0];
							continue;
						case 7:
							n = u.ops.pop(), u.trys.pop();
							continue;
						default:
							if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
								u = 0;
								continue
							}
							if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
								u.label = n[1];
								break
							}
							if (6 === n[0] && u.label < s[1]) {
								u.label = s[1], s = n;
								break
							}
							if (s && u.label < s[2]) {
								u.label = s[2], u.ops.push(n);
								break
							}
							s[2] && u.ops.pop(), u.trys.pop();
							continue
					}
					n = t.call(e, u)
				} catch (e) {
					n = [6, e], i = 0
				} finally {
					o = s = 0
				}
				if (5 & n[0]) throw n[1];
				return {
					value: n[0] ? n[1] : void 0,
					done: !0
				}
			}
			var o, i, s, c, u = {
				label: 0,
				sent: function() {
					if (1 & s[0]) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			};
			return c = {
				next: n(0),
				throw: n(1),
				return: n(2)
			}, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
				return this
			}), c
		}

		function l(e, t) {
			for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
		}

		function d(e) {
			var t = "function" == typeof Symbol && e[Symbol.iterator],
				n = 0;
			return t ? t.call(e) : {
				next: function() {
					return e && n >= e.length && (e = void 0), {
						value: e && e[n++],
						done: !e
					}
				}
			}
		}

		function f(e, t) {
			var n = "function" == typeof Symbol && e[Symbol.iterator];
			if (!n) return e;
			var r, o, i = n.call(e),
				s = [];
			try {
				for (;
					(void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
			} catch (e) {
				o = {
					error: e
				}
			} finally {
				try {
					r && !r.done && (n = i.return) && n.call(i)
				} finally {
					if (o) throw o.error
				}
			}
			return s
		}

		function h() {
			for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
			return e
		}

		function p(e) {
			return this instanceof p ? (this.v = e, this) : new p(e)
		}

		function v(e, t, n) {
			function r(e) {
				l[e] && (a[e] = function(t) {
					return new Promise(function(n, r) {
						d.push([e, t, n, r]) > 1 || o(e, t)
					})
				})
			}

			function o(e, t) {
				try {
					i(l[e](t))
				} catch (e) {
					u(d[0][3], e)
				}
			}

			function i(e) {
				e.value instanceof p ? Promise.resolve(e.value.v).then(s, c) : u(d[0][2], e)
			}

			function s(e) {
				o("next", e)
			}

			function c(e) {
				o("throw", e)
			}

			function u(e, t) {
				e(t), d.shift(), d.length && o(d[0][0], d[0][1])
			}
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var a, l = n.apply(e, t || []),
				d = [];
			return a = {}, r("next"), r("throw"), r("return"), a[Symbol.asyncIterator] = function() {
				return this
			}, a
		}

		function g(e) {
			function t(t, o) {
				e[t] && (n[t] = function(n) {
					return (r = !r) ? {
						value: p(e[t](n)),
						done: "return" === t
					} : o ? o(n) : n
				})
			}
			var n, r;
			return n = {}, t("next"), t("throw", function(e) {
				throw e
			}), t("return"), n[Symbol.iterator] = function() {
				return this
			}, n
		}

		function m(e) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var t = e[Symbol.asyncIterator];
			return t ? t.call(e) : "function" == typeof d ? d(e) : e[Symbol.iterator]()
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.__extends = r, n.d(t, "__assign", function() {
			return y
		}), t.__rest = o, t.__decorate = i, t.__param = s, t.__metadata = c, t.__awaiter = u, t.__generator = a, t.__exportStar = l, t.__values = d, t.__read = f, t.__spread = h, t.__await = p, t.__asyncGenerator = v, t.__asyncDelegator = g, t.__asyncValues = m;
		/*! *****************************************************************************
		Copyright (c) Microsoft Corporation. All rights reserved.
		Licensed under the Apache License, Version 2.0 (the "License"); you may not use
		this file except in compliance with the License. You may obtain a copy of the
		License at http://www.apache.org/licenses/LICENSE-2.0

		THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
		KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
		WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
		MERCHANTABLITY OR NON-INFRINGEMENT.

		See the Apache Version 2.0 License for specific language governing permissions
		and limitations under the License.
		***************************************************************************** */
		var S = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(e, t) {
			e.__proto__ = t
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
		}, y = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) {
				t = arguments[n];
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
			}
			return e
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), r(n(22)), r(n(24)), r(n(25)), r(n(26)), r(n(23)), r(n(27)), r(n(28)), r(n(29)), r(n(30)), r(n(31)), r(n(9))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(2);
		! function(e) {
			e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
		}(t.EventType || (t.EventType = {}));
		var o = function() {
			function e(e, t) {
				this.name = e, this.eventId = r.CreateNoDashGuid(), this.eventTime = (new Date).toISOString(), this.eventType = t, this.metadata = {}
			}
			return Object.defineProperty(e.prototype, "Name", {
				get: function() {
					return this.name
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "EventId", {
				get: function() {
					return this.eventId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "EventTime", {
				get: function() {
					return this.eventTime
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "EventType", {
				get: function() {
					return this.eventType
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Metadata", {
				get: function() {
					return this.metadata
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.PlatformEvent = o
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), r(n(51)), r(n(52)), r(n(7)), r(n(53)), r(n(8)), r(n(54)), r(n(17)), r(n(57)), r(n(58))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t) {
				this.headerName = e, this.token = t
			}
			return Object.defineProperty(e.prototype, "HeaderName", {
				get: function() {
					return this.headerName
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Token", {
				get: function() {
					return this.token
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.AuthInfo = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3),
			o = n(0),
			i = function(e) {
				function t(t, n, r) {
					void 0 === r && (r = o.EventType.Info);
					var i = e.call(this, t, r) || this;
					return i.requestId = n, i
				}
				return r.__extends(t, e), Object.defineProperty(t.prototype, "RequestId", {
					get: function() {
						return this.requestId
					},
					enumerable: !0,
					configurable: !0
				}), t
			}(o.PlatformEvent);
		t.SpeechRecognitionEvent = i;
		var s = function(e) {
			function t(t, n, r) {
				var o = e.call(this, t, n) || this;
				return o.result = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "Result", {
				get: function() {
					return this.result
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.SpeechRecognitionResultEvent = s;
		var c = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "RecognitionTriggeredEvent", t) || this;
				return o.audioSourceId = n, o.audioNodeId = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
				get: function() {
					return this.audioSourceId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "AudioNodeId", {
				get: function() {
					return this.audioNodeId
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.RecognitionTriggeredEvent = c;
		var u = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "ListeningStartedEvent", t) || this;
				return o.audioSourceId = n, o.audioNodeId = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
				get: function() {
					return this.audioSourceId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "AudioNodeId", {
				get: function() {
					return this.audioNodeId
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ListeningStartedEvent = u;
		var a = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "ConnectingToServiceEvent", t) || this;
				return o.authFetchEventid = n, o.connectionId = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "AuthFetchEventid", {
				get: function() {
					return this.authFetchEventid
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "ConnectionId", {
				get: function() {
					return this.connectionId
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ConnectingToServiceEvent = a;
		var l = function(e) {
			function t(t, n, r, o, i) {
				var s = e.call(this, "RecognitionStartedEvent", t) || this;
				return s.audioSourceId = n, s.audioNodeId = r, s.authFetchEventId = o, s.connectionId = i, s
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
				get: function() {
					return this.audioSourceId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "AudioNodeId", {
				get: function() {
					return this.audioNodeId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "AuthFetchEventId", {
				get: function() {
					return this.authFetchEventId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "ConnectionId", {
				get: function() {
					return this.connectionId
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.RecognitionStartedEvent = l;
		var d = function(e) {
			function t(t, n) {
				return e.call(this, "SpeechStartDetectedEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(s);
		t.SpeechStartDetectedEvent = d;
		var f = function(e) {
			function t(t, n) {
				return e.call(this, "SpeechHypothesisEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(s);
		t.SpeechHypothesisEvent = f;
		var h = function(e) {
			function t(t, n) {
				return e.call(this, "SpeechFragmentEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(s);
		t.SpeechFragmentEvent = h;
		var p = function(e) {
			function t(t, n) {
				return e.call(this, "SpeechEndDetectedEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(s);
		t.SpeechEndDetectedEvent = p;
		var v = function(e) {
			function t(t, n) {
				return e.call(this, "SpeechSimplePhraseEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(s);
		t.SpeechSimplePhraseEvent = v;
		var g = function(e) {
			function t(t, n) {
				return e.call(this, "SpeechDetailedPhraseEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(s);
		t.SpeechDetailedPhraseEvent = g;
		var m;
		! function(e) {
			e[e.Success = 0] = "Success", e[e.AudioSourceError = 1] = "AudioSourceError", e[e.AudioSourceTimeout = 2] = "AudioSourceTimeout", e[e.AuthTokenFetchError = 3] = "AuthTokenFetchError", e[e.AuthTokenFetchTimeout = 4] = "AuthTokenFetchTimeout", e[e.UnAuthorized = 5] = "UnAuthorized", e[e.ConnectTimeout = 6] = "ConnectTimeout", e[e.ConnectError = 7] = "ConnectError", e[e.ClientRecognitionActivityTimeout = 8] = "ClientRecognitionActivityTimeout", e[e.UnknownError = 9] = "UnknownError"
		}(m = t.RecognitionCompletionStatus || (t.RecognitionCompletionStatus = {}));
		var S = function(e) {
			function t(t, n, r, i, s, c, u, a) {
				var l = e.call(this, "RecognitionEndedEvent", t, u === m.Success ? o.EventType.Info : o.EventType.Error) || this;
				return l.audioSourceId = n, l.audioNodeId = r, l.connectionId = s, l.authFetchEventId = i, l.status = u, l.error = a, l.serviceTag = c, l
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
				get: function() {
					return this.audioSourceId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "AudioNodeId", {
				get: function() {
					return this.audioNodeId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "AuthFetchEventId", {
				get: function() {
					return this.authFetchEventId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "ConnectionId", {
				get: function() {
					return this.connectionId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "ServiceTag", {
				get: function() {
					return this.serviceTag
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "Status", {
				get: function() {
					return this.status
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "Error", {
				get: function() {
					return this.error
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.RecognitionEndedEvent = S
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = function() {
				function e(e, t, n) {
					var o = this;
					if (this.Open = function() {
							return o.connectionState === r.ConnectionState.Disconnected ? r.PromiseHelper.FromError("Cannot open a connection that is in " + o.connectionState + " state") : o.connectionEstablishDeferral ? o.connectionEstablishDeferral.Promise() : (o.connectionEstablishDeferral = new r.Deferred, o.connectionState = r.ConnectionState.Connecting, o.websocketClient = new WebSocket(o.uri), o.websocketClient.binaryType = "arraybuffer", o.receivingMessageQueue = new r.Queue, o.disconnectDeferral = new r.Deferred, o.sendMessageQueue = new r.Queue, o.ProcessSendQueue(), o.OnEvent(new r.ConnectionStartEvent(o.connectionId, o.uri)), o.websocketClient.onopen = function(e) {
								o.connectionState = r.ConnectionState.Connected, o.OnEvent(new r.ConnectionEstablishedEvent(o.connectionId)), o.connectionEstablishDeferral.Resolve(new r.ConnectionOpenResponse(200, ""))
							}, o.websocketClient.onerror = function(e) {
								o.connectionState, r.ConnectionState.Connecting
							}, o.websocketClient.onclose = function(e) {
								o.connectionState === r.ConnectionState.Connecting ? (o.connectionState = r.ConnectionState.Disconnected, o.OnEvent(new r.ConnectionEstablishErrorEvent(o.connectionId, e.code, e.reason)), o.connectionEstablishDeferral.Resolve(new r.ConnectionOpenResponse(e.code, e.reason))) : o.OnEvent(new r.ConnectionClosedEvent(o.connectionId, e.code, e.reason)), o.OnClose(e.code, e.reason)
							}, o.websocketClient.onmessage = function(e) {
								var t = (new Date).toISOString();
								if (o.connectionState === r.ConnectionState.Connected) {
									var n = new r.Deferred;
									if (o.receivingMessageQueue.EnqueueFromPromise(n.Promise()), e.data instanceof ArrayBuffer) {
										var i = new r.RawWebsocketMessage(r.MessageType.Binary, e.data);
										o.messageFormatter.ToConnectionMessage(i).On(function(e) {
											o.OnEvent(new r.ConnectionMessageReceivedEvent(o.connectionId, t, e)), n.Resolve(e)
										}, function(e) {
											n.Reject("Invalid binary message format. Error: " + e)
										})
									} else {
										var i = new r.RawWebsocketMessage(r.MessageType.Text, e.data);
										o.messageFormatter.ToConnectionMessage(i).On(function(e) {
											o.OnEvent(new r.ConnectionMessageReceivedEvent(o.connectionId, t, e)), n.Resolve(e)
										}, function(e) {
											n.Reject("Invalid text message format. Error: " + e)
										})
									}
								}
							}, o.connectionEstablishDeferral.Promise())
						}, this.Send = function(e) {
							if (o.connectionState !== r.ConnectionState.Connected) return r.PromiseHelper.FromError("Cannot send on connection that is in " + o.connectionState + " state");
							var t = new r.Deferred,
								n = new r.Deferred;
							return o.sendMessageQueue.EnqueueFromPromise(n.Promise()), o.messageFormatter.FromConnectionMessage(e).On(function(r) {
								n.Resolve({
									Message: e,
									RawWebsocketMessage: r,
									SendStatusDeferral: t
								})
							}, function(e) {
								n.Reject("Error formatting the message. " + e)
							}), t.Promise()
						}, this.Read = function() {
							return o.connectionState !== r.ConnectionState.Connected ? r.PromiseHelper.FromError("Cannot read on connection that is in " + o.connectionState + " state") : o.receivingMessageQueue.Dequeue()
						}, this.Close = function(e) {
							if (!o.websocketClient) {
								var t = new r.Deferred;
								return t.Resolve(!0), t.Promise()
							}
							return o.connectionState !== r.ConnectionState.Connected && o.websocketClient.close(1e3, e || "Normal closure by client"), o.disconnectDeferral.Promise()
						}, this.SendRawMessage = function(e) {
							try {
								return o.OnEvent(new r.ConnectionMessageSentEvent(o.connectionId, (new Date).toISOString(), e.Message)), o.websocketClient.send(e.RawWebsocketMessage.Payload), r.PromiseHelper.FromResult(!0)
							} catch (e) {
								return r.PromiseHelper.FromError("websocket send error: " + e)
							}
						}, this.OnClose = function(e, t) {
							var n = "Connection closed. " + e + ": " + t;
							o.connectionState = r.ConnectionState.Disconnected, o.disconnectDeferral.Resolve(!0), o.receivingMessageQueue.Dispose(t), o.receivingMessageQueue.DrainAndDispose(function(e) {}, n), o.sendMessageQueue.DrainAndDispose(function(e) {
								e.SendStatusDeferral.Reject(n)
							}, n)
						}, this.ProcessSendQueue = function() {
							o.sendMessageQueue.Dequeue().On(function(e) {
								o.SendRawMessage(e).On(function(t) {
									e.SendStatusDeferral.Resolve(t), o.ProcessSendQueue()
								}, function(t) {
									e.SendStatusDeferral.Reject(t), o.ProcessSendQueue()
								})
							}, function(e) {})
						}, this.OnEvent = function(e) {
							o.connectionEvents.OnEvent(e), r.Events.Instance.OnEvent(e)
						}, !e) throw new r.ArgumentNullError("uri");
					if (!n) throw new r.ArgumentNullError("messageFormatter");
					this.connectionEvents = new r.EventSource, this.connectionId = t, this.messageFormatter = n, this.connectionState = r.ConnectionState.None, this.uri = e
				}
				return Object.defineProperty(e.prototype, "State", {
					get: function() {
						return this.connectionState
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Events", {
					get: function() {
						return this.connectionEvents
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.WebsocketMessageAdapter = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, o = n(1),
			i = n(2);
		! function(e) {
			e[e.Text = 0] = "Text", e[e.Binary = 1] = "Binary"
		}(r = t.MessageType || (t.MessageType = {}));
		var s = function() {
			function e(e, t, n, s) {
				if (this.body = null, e === r.Text && t && "string" != typeof t) throw new o.InvalidOperationError("Payload must be a string");
				if (e === r.Binary && t && !(t instanceof ArrayBuffer)) throw new o.InvalidOperationError("Payload must be ArrayBuffer");
				this.messageType = e, this.body = t, this.headers = n || {}, this.id = s || i.CreateNoDashGuid()
			}
			return Object.defineProperty(e.prototype, "MessageType", {
				get: function() {
					return this.messageType
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Headers", {
				get: function() {
					return this.headers
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Body", {
				get: function() {
					return this.body
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "TextBody", {
				get: function() {
					if (this.messageType === r.Binary) throw new o.InvalidOperationError("Not supported for binary message");
					return this.body
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "BinaryBody", {
				get: function() {
					if (this.messageType === r.Text) throw new o.InvalidOperationError("Not supported for text message");
					return this.body
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Id", {
				get: function() {
					return this.id
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.ConnectionMessage = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			o = n(2),
			i = function() {
				function e(e) {
					var t = this;
					this.eventListeners = {}, this.isDisposed = !1, this.OnEvent = function(e) {
						if (t.IsDisposed()) throw new r.ObjectDisposedError("EventSource");
						if (t.Metadata)
							for (var n in t.Metadata) n && e.Metadata && (e.Metadata[n] || (e.Metadata[n] = t.Metadata[n]));
						for (var o in t.eventListeners) o && t.eventListeners[o] && t.eventListeners[o](e)
					}, this.Attach = function(e) {
						var n = o.CreateNoDashGuid();
						return t.eventListeners[n] = e, {
							Detach: function() {
								delete t.eventListeners[n]
							}
						}
					}, this.AttachListener = function(e) {
						return t.Attach(e.OnEvent)
					}, this.IsDisposed = function() {
						return t.isDisposed
					}, this.Dispose = function() {
						t.eventListeners = null, t.isDisposed = !0
					}, this.metadata = e
				}
				return Object.defineProperty(e.prototype, "Metadata", {
					get: function() {
						return this.metadata
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.EventSource = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			o = function() {
				function e() {
					var e = this;
					this.store = {}, this.Get = function(t) {
						if (!t) throw new r.ArgumentNullError("key");
						return e.store[t]
					}, this.GetOrAdd = function(t, n) {
						if (!t) throw new r.ArgumentNullError("key");
						return void 0 === e.store[t] && (e.store[t] = n), e.store[t]
					}, this.Set = function(t, n) {
						if (!t) throw new r.ArgumentNullError("key");
						e.store[t] = n
					}, this.Remove = function(t) {
						if (!t) throw new r.ArgumentNullError("key");
						void 0 !== e.store[t] && delete e.store[t]
					}
				}
				return e
			}();
		t.InMemoryStorage = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			o = function() {
				function e(t) {
					var n = this;
					if (this.subscriptionIdCounter = 0, this.addSubscriptions = {}, this.removeSubscriptions = {}, this.disposedSubscriptions = {}, this.disposeReason = null, this.Get = function(e) {
							return n.ThrowIfDisposed(), n.list[e]
						}, this.First = function() {
							return n.Get(0)
						}, this.Last = function() {
							return n.Get(n.Length() - 1)
						}, this.Add = function(e) {
							n.ThrowIfDisposed(), n.InsertAt(n.list.length, e)
						}, this.InsertAt = function(e, t) {
							n.ThrowIfDisposed(), 0 === e ? n.list.unshift(t) : e === n.list.length ? n.list.push(t) : n.list.splice(e, 0, t), n.TriggerSubscriptions(n.addSubscriptions)
						}, this.RemoveFirst = function() {
							return n.ThrowIfDisposed(), n.RemoveAt(0)
						}, this.RemoveLast = function() {
							return n.ThrowIfDisposed(), n.RemoveAt(n.Length() - 1)
						}, this.RemoveAt = function(e) {
							return n.ThrowIfDisposed(), n.Remove(e, 1)[0]
						}, this.Remove = function(e, t) {
							n.ThrowIfDisposed();
							var r = n.list.splice(e, t);
							return n.TriggerSubscriptions(n.removeSubscriptions), r
						}, this.Clear = function() {
							n.ThrowIfDisposed(), n.Remove(0, n.Length())
						}, this.Length = function() {
							return n.ThrowIfDisposed(), n.list.length
						}, this.OnAdded = function(e) {
							n.ThrowIfDisposed();
							var t = n.subscriptionIdCounter++;
							return n.addSubscriptions[t] = e, {
								Detach: function() {
									delete n.addSubscriptions[t]
								}
							}
						}, this.OnRemoved = function(e) {
							n.ThrowIfDisposed();
							var t = n.subscriptionIdCounter++;
							return n.removeSubscriptions[t] = e, {
								Detach: function() {
									delete n.removeSubscriptions[t]
								}
							}
						}, this.OnDisposed = function(e) {
							n.ThrowIfDisposed();
							var t = n.subscriptionIdCounter++;
							return n.disposedSubscriptions[t] = e, {
								Detach: function() {
									delete n.disposedSubscriptions[t]
								}
							}
						}, this.Join = function(e) {
							return n.ThrowIfDisposed(), n.list.join(e)
						}, this.ToArray = function() {
							var e = Array();
							return n.list.forEach(function(t) {
								e.push(t)
							}), e
						}, this.Any = function(e) {
							return n.ThrowIfDisposed(), e ? n.Where(e).Length() > 0 : n.Length() > 0
						}, this.All = function(e) {
							return n.ThrowIfDisposed(), n.Where(e).Length() === n.Length()
						}, this.ForEach = function(e) {
							n.ThrowIfDisposed();
							for (var t = 0; t < n.Length(); t++) e(n.list[t], t)
						}, this.Select = function(t) {
							n.ThrowIfDisposed();
							for (var r = [], o = 0; o < n.list.length; o++) r.push(t(n.list[o], o));
							return new e(r)
						}, this.Where = function(t) {
							n.ThrowIfDisposed();
							for (var r = new e, o = 0; o < n.list.length; o++) t(n.list[o], o) && r.Add(n.list[o]);
							return r
						}, this.OrderBy = function(t) {
							return n.ThrowIfDisposed(), new e(n.ToArray().sort(t))
						}, this.OrderByDesc = function(e) {
							return n.ThrowIfDisposed(), n.OrderBy(function(t, n) {
								return e(n, t)
							})
						}, this.Clone = function() {
							return n.ThrowIfDisposed(), new e(n.ToArray())
						}, this.Concat = function(t) {
							return n.ThrowIfDisposed(), new e(n.list.concat(t.ToArray()))
						}, this.ConcatArray = function(t) {
							return n.ThrowIfDisposed(), new e(n.list.concat(t))
						}, this.IsDisposed = function() {
							return null == n.list
						}, this.Dispose = function(e) {
							n.IsDisposed() || (n.disposeReason = e, n.list = null, n.addSubscriptions = null, n.removeSubscriptions = null, n.TriggerSubscriptions(n.disposedSubscriptions))
						}, this.ThrowIfDisposed = function() {
							if (n.IsDisposed()) throw new r.ObjectDisposedError("List", n.disposeReason)
						}, this.TriggerSubscriptions = function(e) {
							if (e)
								for (var t in e) t && e[t]()
						}, this.list = [], t)
						for (var o = 0, i = t; o < i.length; o++) {
							var s = i[o];
							this.list.push(s)
						}
				}
				return e
			}();
		t.List = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, o = n(1);
		! function(e) {
			e[e.None = 0] = "None", e[e.Resolved = 1] = "Resolved", e[e.Rejected = 2] = "Rejected"
		}(r = t.PromiseState || (t.PromiseState = {}));
		var i = function() {
			function e(e) {
				var t = this;
				this.ThrowIfError = function() {
					if (t.IsError) throw t.Error
				}, e.On(function(e) {
					t.isCompleted || (t.isCompleted = !0, t.isError = !1, t.result = e)
				}, function(e) {
					t.isCompleted || (t.isCompleted = !0, t.isError = !0, t.error = e)
				})
			}
			return Object.defineProperty(e.prototype, "IsCompleted", {
				get: function() {
					return this.isCompleted
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "IsError", {
				get: function() {
					return this.isError
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Error", {
				get: function() {
					return this.error
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Result", {
				get: function() {
					return this.result
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.PromiseResult = i;
		var s = function() {
			function e() {
				var e = this;
				this.SetResult = function(t) {
					e.onSetResult(t)
				}, this.SetError = function(t) {
					e.onSetError(t)
				}, this.On = function(t, n) {
					e.onSetResult = t, e.onSetError = n
				}
			}
			return e
		}();
		t.PromiseResultEventSource = s;
		var c = function() {
			function e() {}
			return e
		}();
		c.WhenAll = function(e) {
			if (!e || 0 === e.length) throw new o.ArgumentNullError("promises");
			for (var t = new a, n = [], r = 0, i = function() {
					++r === e.length && (0 === n.length ? t.Resolve(!0) : t.Reject(n.join(", ")))
				}, s = 0, c = e; s < c.length; s++) {
				c[s].On(function(e) {
					i()
				}, function(e) {
					n.push(e), i()
				})
			}
			return t.Promise()
		}, c.FromResult = function(e) {
			var t = new a;
			return t.Resolve(e), t.Promise()
		}, c.FromError = function(e) {
			var t = new a;
			return t.Reject(e), t.Promise()
		}, t.PromiseHelper = c;
		var u = function() {
			function e(e) {
				var t = this;
				this.Result = function() {
					return t.sink.Result
				}, this.ContinueWith = function(e) {
					if (!e) throw new o.ArgumentNullError("continuationCallback");
					var n = new a;
					return t.sink.on(function(r) {
						try {
							var o = e(t.sink.Result);
							n.Resolve(o)
						} catch (e) {
							n.Reject("'Unhandled callback error: " + e + "'")
						}
					}, function(r) {
						try {
							var o = e(t.sink.Result);
							n.Resolve(o)
						} catch (e) {
							n.Reject("'Unhandled callback error: " + e + ". InnerError: " + r + "'")
						}
					}), n.Promise()
				}, this.OnSuccessContinueWith = function(e) {
					if (!e) throw new o.ArgumentNullError("continuationCallback");
					var n = new a;
					return t.sink.on(function(t) {
						try {
							var r = e(t);
							n.Resolve(r)
						} catch (e) {
							n.Reject("'Unhandled callback error: " + e + "'")
						}
					}, function(e) {
						n.Reject("'Unhandled callback error: " + e + "'")
					}), n.Promise()
				}, this.ContinueWithPromise = function(e) {
					if (!e) throw new o.ArgumentNullError("continuationCallback");
					var n = new a;
					return t.sink.on(function(r) {
						try {
							var o = e(t.sink.Result);
							if (!o) throw new Error("'Continuation callback did not return promise'");
							o.On(function(e) {
								n.Resolve(e)
							}, function(e) {
								n.Reject(e)
							})
						} catch (e) {
							n.Reject("'Unhandled callback error: " + e + "'")
						}
					}, function(r) {
						try {
							var o = e(t.sink.Result);
							if (!o) throw new Error("Continuation callback did not return promise");
							o.On(function(e) {
								n.Resolve(e)
							}, function(e) {
								n.Reject(e)
							})
						} catch (e) {
							n.Reject("'Unhandled callback error: " + e + ". InnerError: " + r + "'")
						}
					}), n.Promise()
				}, this.OnSuccessContinueWithPromise = function(e) {
					if (!e) throw new o.ArgumentNullError("continuationCallback");
					var n = new a;
					return t.sink.on(function(t) {
						try {
							var r = e(t);
							if (!r) throw new Error("Continuation callback did not return promise");
							r.On(function(e) {
								n.Resolve(e)
							}, function(e) {
								n.Reject(e)
							})
						} catch (e) {
							n.Reject("'Unhandled callback error: " + e + "'")
						}
					}, function(e) {
						n.Reject("'Unhandled callback error: " + e + ".'")
					}), n.Promise()
				}, this.On = function(e, n) {
					if (!e) throw new o.ArgumentNullError("successCallback");
					if (!n) throw new o.ArgumentNullError("errorCallback");
					return t.sink.on(e, n), t
				}, this.Finally = function(e) {
					if (!e) throw new o.ArgumentNullError("callback");
					var n = function(t) {
						e()
					};
					return t.On(n, n)
				}, this.sink = e
			}
			return e
		}();
		t.Promise = u;
		var a = function() {
			function e() {
				var e = this;
				this.State = function() {
					return e.sink.State
				}, this.Promise = function() {
					return e.promise
				}, this.Resolve = function(t) {
					return e.sink.Resolve(t), e
				}, this.Reject = function(t) {
					return e.sink.Reject(t), e
				}, this.sink = new l, this.promise = new u(this.sink)
			}
			return e
		}();
		t.Deferred = a;
		var l = function() {
			function e() {
				var e = this;
				this.state = r.None, this.promiseResult = null, this.promiseResultEvents = null, this.successHandlers = [], this.errorHandlers = [], this.Resolve = function(t) {
					if (e.state !== r.None) throw new Error("'Cannot resolve a completed promise'");
					e.state = r.Resolved, e.promiseResultEvents.SetResult(t);
					for (var n = 0; n < e.successHandlers.length; n++) e.ExecuteSuccessCallback(t, e.successHandlers[n], e.errorHandlers[n]);
					e.DetachHandlers()
				}, this.Reject = function(t) {
					if (e.state !== r.None) throw new Error("'Cannot reject a completed promise'");
					e.state = r.Rejected, e.promiseResultEvents.SetError(t);
					for (var n = 0, o = e.errorHandlers; n < o.length; n++) {
						var i = o[n];
						e.ExecuteErrorCallback(t, i)
					}
					e.DetachHandlers()
				}, this.on = function(t, n) {
					null == t && (t = function(e) {}), e.state === r.None ? (e.successHandlers.push(t), e.errorHandlers.push(n)) : (e.state === r.Resolved ? e.ExecuteSuccessCallback(e.promiseResult.Result, t, n) : e.state === r.Rejected && e.ExecuteErrorCallback(e.promiseResult.Error, n), e.DetachHandlers())
				}, this.ExecuteSuccessCallback = function(t, n, r) {
					try {
						n(t)
					} catch (t) {
						e.ExecuteErrorCallback("'Unhandled callback error: " + t + "'", r)
					}
				}, this.ExecuteErrorCallback = function(e, t) {
					if (!t) throw new Error("'Unhandled error: " + e + "'");
					try {
						t(e)
					} catch (t) {
						throw new Error("'Unhandled callback error: " + t + ". InnerError: " + e + "'")
					}
				}, this.DetachHandlers = function() {
					e.errorHandlers = [], e.successHandlers = []
				}, this.promiseResultEvents = new s, this.promiseResult = new i(this.promiseResultEvents)
			}
			return Object.defineProperty(e.prototype, "State", {
				get: function() {
					return this.state
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Result", {
				get: function() {
					return this.promiseResult
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.Sink = l
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, o = n(1),
			i = n(13),
			s = n(14);
		! function(e) {
			e[e.Dequeue = 0] = "Dequeue", e[e.Peek = 1] = "Peek"
		}(r || (r = {}));
		var c = function() {
			function e(e) {
				var t = this;
				this.promiseStore = new i.List, this.isDrainInProgress = !1, this.isDisposing = !1, this.disposeReason = null, this.Enqueue = function(e) {
					t.ThrowIfDispose(), t.EnqueueFromPromise(s.PromiseHelper.FromResult(e))
				}, this.EnqueueFromPromise = function(e) {
					t.ThrowIfDispose(), t.promiseStore.Add(e), e.Finally(function() {
						for (; t.promiseStore.Length() > 0 && t.promiseStore.First().Result().IsCompleted;) {
							var e = t.promiseStore.RemoveFirst();
							e.Result().IsError || t.list.Add(e.Result().Result)
						}
					})
				}, this.Dequeue = function() {
					t.ThrowIfDispose();
					var e = new s.Deferred;
					return t.subscribers.Add({
						deferral: e,
						type: r.Dequeue
					}), t.Drain(), e.Promise()
				}, this.Peek = function() {
					t.ThrowIfDispose();
					var e = new s.Deferred;
					return t.subscribers.Add({
						deferral: e,
						type: r.Peek
					}), t.Drain(), e.Promise()
				}, this.Length = function() {
					return t.ThrowIfDispose(), t.list.Length()
				}, this.IsDisposed = function() {
					return null == t.subscribers
				}, this.DrainAndDispose = function(e, n) {
					if (!t.IsDisposed() && !t.isDisposing) {
						for (t.disposeReason = n, t.isDisposing = !0; t.subscribers.Length() > 0;) {
							t.subscribers.RemoveFirst().deferral.Reject("Disposed")
						}
						for (var r = 0, o = t.detachables; r < o.length; r++) {
							o[r].Detach()
						}
						if (t.promiseStore.Length() > 0 && e) return s.PromiseHelper.WhenAll(t.promiseStore.ToArray()).ContinueWith(function() {
							return t.subscribers = null, t.list.ForEach(function(t, n) {
								e(t)
							}), t.list = null, !0
						});
						t.subscribers = null, t.list = null
					}
					return s.PromiseHelper.FromResult(!0)
				}, this.Dispose = function(e) {
					t.DrainAndDispose(null, e)
				}, this.Drain = function() {
					if (!t.isDrainInProgress && !t.isDisposing) {
						for (t.isDrainInProgress = !0; t.list.Length() > 0 && t.subscribers.Length() > 0 && !t.isDisposing;) {
							var e = t.subscribers.RemoveFirst();
							if (e.type === r.Peek) e.deferral.Resolve(t.list.First());
							else {
								var n = t.list.RemoveFirst();
								e.deferral.Resolve(n)
							}
						}
						t.isDrainInProgress = !1
					}
				}, this.ThrowIfDispose = function() {
					if (t.IsDisposed()) {
						if (t.disposeReason) throw new o.InvalidOperationError(t.disposeReason);
						throw new o.ObjectDisposedError("Queue")
					}
					if (t.isDisposing) throw new o.InvalidOperationError("Queue disposing")
				}, this.list = e || new i.List, this.detachables = [], this.subscribers = new i.List, this.detachables.push(this.list.OnAdded(this.Drain))
			}
			return e
		}();
		t.Queue = c
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(4),
			o = n(0),
			i = n(6),
			s = "testhooks",
			c = "X-ConnectionId",
			u = function() {
				function e() {
					var e = this;
					this.Create = function(t, n, o) {
						var u = "";
						switch (t.RecognitionMode) {
							case i.RecognitionMode.Conversation:
								u = e.Host + e.ConversationRelativeUri;
								break;
							case i.RecognitionMode.Dictation:
								u = e.Host + e.DictationRelativeUri;
								break;
							default:
								u = e.Host + e.InteractiveRelativeUri
						}
						var a = {
							format: i.SpeechResultFormat[t.Format].toString().toLowerCase(),
							language: t.Language
						};
						e.IsDebugModeEnabled && (a[s] = "1");
						var l = {};
						return l[n.HeaderName] = n.Token, l[c] = o, new r.WebsocketConnection(u, a, l, new i.WebsocketMessageFormatter, o)
					}
				}
				return Object.defineProperty(e.prototype, "Host", {
					get: function() {
						return o.Storage.Local.GetOrAdd("Host", "wss://speech.platform.bing.com")
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "InteractiveRelativeUri", {
					get: function() {
						return o.Storage.Local.GetOrAdd("InteractiveRelativeUri", "/speech/recognition/interactive/cognitiveservices/v1")
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "ConversationRelativeUri", {
					get: function() {
						return o.Storage.Local.GetOrAdd("ConversationRelativeUri", "/speech/recognition/conversation/cognitiveservices/v1")
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "DictationRelativeUri", {
					get: function() {
						return o.Storage.Local.GetOrAdd("DictationRelativeUri", "/speech/recognition/dictation/cognitiveservices/v1")
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "IsDebugModeEnabled", {
					get: function() {
						return "true" === o.Storage.Local.GetOrAdd("IsDebugModeEnabled", "false").toLowerCase()
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.SpeechConnectionFactory = u
	}, function(e, t, n) {
		"use strict";
		(function(e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n;
			! function(e) {
				e[e.Interactive = 0] = "Interactive", e[e.Conversation = 1] = "Conversation", e[e.Dictation = 2] = "Dictation"
			}(n = t.RecognitionMode || (t.RecognitionMode = {}));
			var r;
			! function(e) {
				e[e.Simple = 0] = "Simple", e[e.Detailed = 1] = "Detailed"
			}(r = t.SpeechResultFormat || (t.SpeechResultFormat = {}));
			var o = function() {
				function e(e, t, o, c) {
					void 0 === t && (t = n.Interactive), void 0 === o && (o = "en-us"), void 0 === c && (c = r.Simple), this.recognitionMode = n.Interactive, this.speechConfig = e || new i(new s(null, null)), this.recognitionMode = t, this.language = o, this.format = c, this.recognitionActivityTimeout = t === n.Interactive ? 8e3 : 25e3
				}
				return Object.defineProperty(e.prototype, "RecognitionMode", {
					get: function() {
						return this.recognitionMode
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Language", {
					get: function() {
						return this.language
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Format", {
					get: function() {
						return this.format
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "SpeechConfig", {
					get: function() {
						return this.speechConfig
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "RecognitionActivityTimeout", {
					get: function() {
						return this.recognitionActivityTimeout
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "IsContinuousRecognition", {
					get: function() {
						return this.recognitionMode !== n.Interactive
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
			t.RecognizerConfig = o;
			var i = function() {
				function e(e) {
					var t = this;
					this.Serialize = function() {
						return JSON.stringify(t, function(e, t) {
							if (t && "object" == typeof t) {
								var n = {};
								for (var r in t) Object.hasOwnProperty.call(t, r) && (n[r && r.charAt(0).toLowerCase() + r.substring(1)] = t[r]);
								return n
							}
							return t
						})
					}, this.context = e
				}
				return Object.defineProperty(e.prototype, "Context", {
					get: function() {
						return this.context
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
			t.SpeechConfig = i;
			var s = function() {
				function t(t, n) {
					this.system = new e, this.os = t, this.device = n
				}
				return Object.defineProperty(t.prototype, "System", {
					get: function() {
						return this.system
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "OS", {
					get: function() {
						return this.os
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Device", {
					get: function() {
						return this.device
					},
					enumerable: !0,
					configurable: !0
				}), t
			}();
			t.Context = s;
			var e = function() {
				function e() {
					this.version = "1.0.00000"
				}
				return Object.defineProperty(e.prototype, "Version", {
					get: function() {
						return this.version
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
			t.System = e;
			var c = function() {
				function e(e, t, n) {
					this.platform = e, this.name = t, this.version = n
				}
				return Object.defineProperty(e.prototype, "Platform", {
					get: function() {
						return this.platform
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Name", {
					get: function() {
						return this.name
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Version", {
					get: function() {
						return this.version
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
			t.OS = c;
			var u = function() {
				function e(e, t, n) {
					this.manufacturer = e, this.model = t, this.version = n
				}
				return Object.defineProperty(e.prototype, "Manufacturer", {
					get: function() {
						return this.manufacturer
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Model", {
					get: function() {
						return this.model
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Version", {
					get: function() {
						return this.version
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
			t.Device = u
		}).call(t, n(61))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.log = function(e) {
			for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			"undefined" != typeof window && window.botchatDebug && e && console.log.apply(console, [e].concat(t))
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3),
			o = n(21),
			i = n(60),
			s = n(18),
			c = function() {
				function e(e) {
					void 0 === e && (e = {});
					var t = this;
					this.audioStreamStartInitiated = !1, this.isStreamingToService = !1, this.onIntermediateResult = null, this.onFinalResult = null, this.onAudioStreamingToService = null, this.onRecognitionFailed = null, this.locale = null, this.actualRecognizer = null, this.grammars = null, this.properties = e;
					var n, r = o.RecognitionMode.Interactive,
						i = o.SpeechResultFormat.Simple,
						s = e.locale || "en-US",
						c = new o.RecognizerConfig(new o.SpeechConfig(new o.Context(new o.OS(navigator.userAgent, "Browser", null), new o.Device("WebChat", "WebChat", "1.0.00000"))), r, s, i);
					if (e.subscriptionKey) n = new o.CognitiveSubscriptionKeyAuthentication(e.subscriptionKey);
					else {
						if (!e.fetchCallback || !e.fetchOnExpiryCallback) throw new Error("Error: The CognitiveServicesSpeechRecognizer requires either a subscriptionKey or a fetchCallback and fetchOnExpiryCallback.");
						n = new o.CognitiveTokenAuthentication(function(e) {
							var n = new o.Deferred;
							return t.properties.fetchCallback(e).then(function(e) {
								return n.Resolve(e)
							}, function(e) {
								return n.Reject(e)
							}), n.Promise()
						}, function(e) {
							var n = new o.Deferred;
							return t.properties.fetchOnExpiryCallback(e).then(function(e) {
								return n.Resolve(e)
							}, function(e) {
								return n.Reject(e)
							}), n.Promise()
						})
					}
					window.navigator.getUserMedia ? this.actualRecognizer = o.CreateRecognizer(c, n) : console.error("This browser does not support speech recognition")
				}
				return e.prototype.warmup = function() {}, e.prototype.setGrammars = function(e) {
					this.grammars = e
				}, e.prototype.startRecognizing = function() {
					return r.__awaiter(this, void 0, void 0, function() {
						var e, t, n = this;
						return r.__generator(this, function(r) {
							return this.actualRecognizer ? (e = function(e) {
								switch (n.log(e.Name), e.Name) {
									case "RecognitionTriggeredEvent":
									case "ListeningStartedEvent":
									case "SpeechStartDetectedEvent":
									case "SpeechEndDetectedEvent":
									case "SpeechDetailedPhraseEvent":
									case "ConnectingToServiceEvent":
										break;
									case "RecognitionStartedEvent":
										n.onAudioStreamingToService && n.onAudioStreamingToService(), n.isStreamingToService = !0;
										break;
									case "SpeechHypothesisEvent":
										var t = e;
										n.log("Hypothesis Result: " + t.Result.Text), n.onIntermediateResult && n.onIntermediateResult(t.Result.Text);
										break;
									case "SpeechSimplePhraseEvent":
										var r = e;
										o.RecognitionStatus[r.Result.RecognitionStatus] === o.RecognitionStatus.Success ? n.onFinalResult && n.onFinalResult(r.Result.DisplayText) : (n.onRecognitionFailed && n.onRecognitionFailed(), n.log("Recognition Status: " + r.Result.RecognitionStatus.toString()));
										break;
									case "RecognitionEndedEvent":
										n.isStreamingToService = !1;
										break;
									default:
										n.log(e.Name + " is unexpected")
								}
							}, this.referenceGrammarId && (t = i.default(t, ["dgi", "Groups"], function(e) {
								return void 0 === e && (e = []), e.concat([{
									Type: "Generic",
									Hints: {
										ReferenceGrammar: n.referenceGrammarId
									}
								}])
							})), this.grammars && (t = i.default(t, ["dgi", "Groups"], function(e) {
								return void 0 === e && (e = []), e.concat([{
									Type: "Generic",
									Items: n.grammars.map(function(e) {
										return {
											Text: e
										}
									})
								}])
							})), [2, this.actualRecognizer.Recognize(e, t && JSON.stringify(t))]) : (this.log("ERROR: no recognizer?"), [2])
						})
					})
				}, e.prototype.speechIsAvailable = function() {
					return null != this.actualRecognizer
				}, e.prototype.stopRecognizing = function() {
					return r.__awaiter(this, void 0, void 0, function() {
						return r.__generator(this, function(e) {
							return null != this.actualRecognizer && this.actualRecognizer.AudioSource.TurnOff(), this.isStreamingToService = !1, [2]
						})
					})
				}, e.prototype.log = function(e) {
					s.log("CognitiveServicesSpeechRecognizer: " + e)
				}, e
			}();
		t.SpeechRecognizer = c
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, o = n(18);
		! function(e) {
			e[e.Male = 0] = "Male", e[e.Female = 1] = "Female"
		}(r = t.SynthesisGender || (t.SynthesisGender = {}));
		var i = function() {
			function e(e) {
				this._requestQueue = null, this._isPlaying = !1, this._helper = new s(e), this._properties = e, this._requestQueue = new Array
			}
			return e.prototype.speak = function(e, t, n, r) {
				var o = this;
				void 0 === n && (n = null), void 0 === r && (r = null), this._requestQueue.push({
					isReadyToPlay: !1,
					data: null,
					text: e,
					locale: t,
					onSpeakingStarted: n,
					onSpeakingFinished: r
				}), this.getSpeechData().then(function() {
					o.playAudio()
				})
			}, e.prototype.stopSpeaking = function() {
				this._isPlaying && (this._requestQueue = [], this._isPlaying = !1, this._audioElement && "closed" !== this._audioElement.state && this._audioElement.close())
			}, e.prototype.playAudio = function() {
				var e = this;
				if (0 !== this._requestQueue.length) {
					var t = this._requestQueue[0];
					if (t) return t.isReadyToPlay ? void(this._isPlaying || (this._isPlaying = !0, this._audioElement && "closed" !== this._audioElement.state || ("undefined" != typeof webkitAudioContext ? this._audioElement = new webkitAudioContext : this._audioElement = new AudioContext), this._audioElement.decodeAudioData(t.data, function(n) {
						var r = e._audioElement.createBufferSource();
						r.buffer = n, r.connect(e._audioElement.destination), t.onSpeakingStarted && t.onSpeakingStarted(), r.start(0), r.onended = function(n) {
							e._isPlaying = !1, t.onSpeakingFinished && t.onSpeakingFinished(), e._requestQueue = e._requestQueue.slice(1, e._requestQueue.length), e._requestQueue.length > 0 && e.playAudio()
						}
					}, function(t) {
						e.log(t.message), e._isPlaying = !1, e._requestQueue = e._requestQueue.slice(1, e._requestQueue.length), e._requestQueue.length > 0 && e.playAudio()
					}))) : void window.setTimeout(function() {
						return e.playAudio()
					}, 100)
				}
			}, e.prototype.getSpeechData = function() {
				var e = this;
				if (0 !== this._requestQueue.length) {
					var t = this._requestQueue[this._requestQueue.length - 1];
					return this._helper.fetchSpeechData(t.text, t.locale, this._properties).then(function(e) {
						t.data = e, t.isReadyToPlay = !0
					}, function(t) {
						e.log(t), e._requestQueue = e._requestQueue.slice(0, e._requestQueue.length - 1)
					})
				}
			}, e.prototype.log = function(e) {
				o.log("CognitiveServicesSpeechSynthesis: " + e)
			}, e
		}();
		t.SpeechSynthesizer = i;
		var s = function() {
			function e(e) {
				var t = this;
				if (this._tokenURL = "https://api.cognitive.microsoft.com/sts/v1.0/issueToken", this._synthesisURL = "https://speech.platform.bing.com/synthesize", this._outputFormat = "riff-16khz-16bit-mono-pcm", this._femaleVoiceMap = {
						"ar-eg": "Microsoft Server Speech Text to Speech Voice (ar-EG, Hoda)",
						"ca-es": "Microsoft Server Speech Text to Speech Voice (ca-ES, HerenaRUS)",
						"da-dk": "Microsoft Server Speech Text to Speech Voice (da-DK, HelleRUS)",
						"de-de": "Microsoft Server Speech Text to Speech Voice (de-DE, Hedda)",
						"en-au": "Microsoft Server Speech Text to Speech Voice (en-AU, Catherine)",
						"en-ca": "Microsoft Server Speech Text to Speech Voice (en-CA, Linda)",
						"en-gb": "Microsoft Server Speech Text to Speech Voice (en-GB, Susan, Apollo)",
						"en-in": "Microsoft Server Speech Text to Speech Voice (en-IN, Heera, Apollo)",
						"en-us": "Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)",
						"es-es": "Microsoft Server Speech Text to Speech Voice (es-ES, Laura, Apollo)",
						"es-mx": "Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)",
						"fi-fi": "Microsoft Server Speech Text to Speech Voice (fi-FI, HeidiRUS)",
						"fr-ca": "Microsoft Server Speech Text to Speech Voice (fr-CA, Caroline)",
						"fr-fr": "Microsoft Server Speech Text to Speech Voice (fr-FR, Julie, Apollo)",
						"hi-in": "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana, Apollo)",
						"ja-jp": "Microsoft Server Speech Text to Speech Voice (ja-JP, Ayumi, Apollo)",
						"ko-kr": "Microsoft Server Speech Text to Speech Voice (ko-KR, HeamiRUS)",
						"nb-no": "Microsoft Server Speech Text to Speech Voice (nb-NO, HuldaRUS)",
						"nl-nl": "Microsoft Server Speech Text to Speech Voice (nl-NL, HannaRUS)",
						"pl-pl": "Microsoft Server Speech Text to Speech Voice (pl-PL, PaulinaRUS)",
						"pt-br": "Microsoft Server Speech Text to Speech Voice (pt-BR, HeloisaRUS)",
						"pt-pt": "Microsoft Server Speech Text to Speech Voice (pt-PT, HeliaRUS)",
						"ru-ru": "Microsoft Server Speech Text to Speech Voice (ru-RU, Irina, Apollo)",
						"sv-se": "Microsoft Server Speech Text to Speech Voice (sv-SE, HedvigRUS)",
						"tr-tr": "Microsoft Server Speech Text to Speech Voice (tr-TR, SedaRUS)",
						"zh-cn": "Microsoft Server Speech Text to Speech Voice (zh-CN, HuihuiRUS)",
						"zh-hk": "Microsoft Server Speech Text to Speech Voice (zh-HK, Tracy, Apollo)",
						"zh-tw": "Microsoft Server Speech Text to Speech Voice (zh-TW, Yating, Apollo)"
					}, this._maleVoiceMap = {
						"ar-sa": "Microsoft Server Speech Text to Speech Voice (ar-SA, Naayf)",
						"cs-cz": "Microsoft Server Speech Text to Speech Voice (cs-CZ, Vit)",
						"de-at": "Microsoft Server Speech Text to Speech Voice (de-AT, Michael)",
						"de-ch": "Microsoft Server Speech Text to Speech Voice (de-CH, Karsten)",
						"de-de": "Microsoft Server Speech Text to Speech Voice (de-DE, Stefan, Apollo)",
						"el-gr": "Microsoft Server Speech Text to Speech Voice (el-GR, Stefanos)",
						"en-gb": "Microsoft Server Speech Text to Speech Voice (en-GB, George, Apollo)",
						"en-ie": "Microsoft Server Speech Text to Speech Voice (en-IE, Shaun)",
						"en-in": "Microsoft Server Speech Text to Speech Voice (en-IN, Ravi, Apollo)",
						"en-us": "Microsoft Server Speech Text to Speech Voice (en-US, BenjaminRUS)",
						"es-es": "Microsoft Server Speech Text to Speech Voice (es-ES, Pablo, Apollo)",
						"es-mx": "Microsoft Server Speech Text to Speech Voice (es-MX, Raul, Apollo)",
						"fr-ch": "Microsoft Server Speech Text to Speech Voice (fr-CH, Guillaume)",
						"fr-fr": "Microsoft Server Speech Text to Speech Voice (fr-FR, Paul, Apollo)",
						"he-il": "Microsoft Server Speech Text to Speech Voice (he-IL, Asaf)",
						"hi-in": "Microsoft Server Speech Text to Speech Voice (hi-IN, Hemant)",
						"hu-hu": "Microsoft Server Speech Text to Speech Voice (hu-HU, Szabolcs)",
						"id-id": "Microsoft Server Speech Text to Speech Voice (id-ID, Andika)",
						"it-it": "Microsoft Server Speech Text to Speech Voice (it-IT, Cosimo, Apollo)",
						"ja-jp": "Microsoft Server Speech Text to Speech Voice (ja-JP, Ichiro, Apollo)",
						"pt-br": "Microsoft Server Speech Text to Speech Voice (pt-BR, Daniel, Apollo)",
						"ro-ro": "Microsoft Server Speech Text to Speech Voice (ro-RO, Andrei)",
						"ru-ru": "Microsoft Server Speech Text to Speech Voice (ru-RU, Pavel, Apollo)",
						"sk-sk": "Microsoft Server Speech Text to Speech Voice (sk-SK, Filip)",
						"th-th": "Microsoft Server Speech Text to Speech Voice (th-TH, Pattara)",
						"zh-cn": "Microsoft Server Speech Text to Speech Voice (zh-CN, Kangkang, Apollo)",
						"zh-hk": "Microsoft Server Speech Text to Speech Voice (zh-HK, Danny, Apollo)",
						"zh-tw": "Microsoft Server Speech Text to Speech Voice (zh-TW, Zhiwei, Apollo)"
					}, e.subscriptionKey) this._tokenCallback = function(e) {
					return t.fetchSpeechToken(e)
				}, this._tokenExpiredCallback = function(e) {
					return t.fetchSpeechToken(e)
				};
				else {
					if (!e.fetchCallback || !e.fetchOnExpiryCallback) throw new Error("Error: The CognitiveServicesSpeechSynthesis requires either a subscriptionKey or a fetchCallback and a fetchOnExpiryCallback.");
					this._tokenCallback = e.fetchCallback, this._tokenExpiredCallback = e.fetchOnExpiryCallback
				}
			}
			return e.prototype.fetchSpeechData = function(e, t, n) {
				var r = this,
					o = this.makeSSML(e, t, n),
					i = function(e) {
						r._lastTokenTime = Date.now();
						var t = [{
							name: "Content-type",
							value: "application/ssml+xml"
						}, {
							name: "X-Microsoft-OutputFormat",
							value: r._outputFormat
						}, {
							name: "Authorization",
							value: e
						}];
						return r.makeHttpCall("POST", r._synthesisURL, !0, t, o)
					};
				return Date.now() - this._lastTokenTime > 5e5 ? this._tokenExpiredCallback(n.subscriptionKey).then(function(e) {
					return i(e)
				}) : this._tokenCallback(n.subscriptionKey).then(function(e) {
					return i(e)
				})
			}, e.prototype.makeSSML = function(e, t, n) {
				if (0 === e.indexOf("<speak")) return this.processSSML(e, n);
				var o = "<speak version='1.0' xml:lang='" + t + "'><voice xml:lang='" + t + "' xml:gender='" + (n && n.gender ? r[n.gender] : "Female") + "' name='";
				return n.voiceName ? o += n.voiceName : null !== n.gender && void 0 !== n.gender ? o += this.fetchVoiceName(t, n.gender) : o += this.fetchVoiceName(t, r.Female), o + "'>" + this.encodeHTML(e) + "</voice></speak>"
			}, e.prototype.processSSML = function(e, t) {
				var n, o = !1,
					i = /xml:lang=['"](\w\w-\w\w)['"]/.exec(e);
				n = i ? i[1] : "en-us";
				var s = t && t.gender;
				null !== s && void 0 !== s || (s = r.Female);
				for (var c = new DOMParser, u = c.parseFromString(e, "text/xml"), a = u.documentElement.childNodes, l = 0; l < a.length; ++l)
					if ("voice" === a[l].nodeName) {
						for (var d = 0; d < a[l].attributes.length; ++d) {
							if ("name" === a[l].attributes[d].nodeName) {
								o = !0;
								break
							}
							"xml:gender" === a[l].attributes[d].nodeName && (s = "male" === a[l].attributes[d].nodeValue.toLowerCase() ? r.Male : r.Female)
						}
						if (!o) {
							var f = u.createAttribute("name");
							f.value = t && t.voiceName || this.fetchVoiceName(n, s), a[l].attributes.setNamedItem(f), o = !0
						}
						break
					}
				var h = new XMLSerializer;
				if (!o) {
					var p = u.createElement("voice"),
						f = u.createAttribute("name");
					for (f.value = t && t.voiceName || this.fetchVoiceName(n, s), p.attributes.setNamedItem(f); a.length > 0;) p.appendChild(u.documentElement.firstChild);
					u.documentElement.appendChild(p)
				}
				return h.serializeToString(u)
			}, e.prototype.encodeHTML = function(e) {
				return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
			}, e.prototype.fetchSpeechToken = function(e) {
				var t = [{
					name: "Ocp-Apim-Subscription-Key",
					value: e
				}, {
					name: "Access-Control-Allow-Origin",
					value: "*"
				}];
				return this.makeHttpCall("POST", this._tokenURL, !1, t).then(function(e) {
					return o.log("New authentication token generated."), Promise.resolve(e)
				}, function(e) {
					var t = "Failed to generate authentication token";
					return o.log(t), Promise.reject(t)
				})
			}, e.prototype.makeHttpCall = function(e, t, n, r, o) {
				return void 0 === n && (n = !1), new Promise(function(i, s) {
					var c = new XMLHttpRequest;
					n && (c.responseType = "arraybuffer"), c.onreadystatechange = function(e) {
						4 === c.readyState && (c.status >= 200 && c.status < 300 ? i(n ? c.response : c.responseText) : s(c.status))
					};
					try {
						c.open(e, t, !0), r && r.forEach(function(e) {
							c.setRequestHeader(e.name, e.value)
						}), o ? c.send(o) : c.send()
					} catch (e) {
						s(e)
					}
				})
			}, e.prototype.fetchVoiceName = function(e, t) {
				var n = e.toLowerCase();
				return t === r.Female ? this._femaleVoiceMap[n] || this._femaleVoiceMap["en-us"] : this._maleVoiceMap[n] || this._maleVoiceMap["en-us"]
			}, e
		}()
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(4);
		n(0).Events.Instance.AttachListener(new o.ConsoleLoggingListener), r(n(0)), r(n(4)), r(n(6)), r(n(49))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = function() {
				function e(e) {
					void 0 === e && (e = r.EventType.Warning);
					var t = this;
					this.OnEvent = function(e) {
						if (e.EventType >= t.logLevelFilter) {
							var n = t.ToString(e);
							switch (e.EventType) {
								case r.EventType.Debug:
									console.debug(n);
									break;
								case r.EventType.Info:
									console.info(n);
									break;
								case r.EventType.Warning:
									console.warn(n);
									break;
								case r.EventType.Error:
									console.error(n);
									break;
								default:
									console.log(n)
							}
						}
					}, this.ToString = function(e) {
						var t = ["" + e.EventTime, "" + e.Name];
						for (var n in e)
							if (n && e.hasOwnProperty(n) && "eventTime" !== n && "eventType" !== n && "eventId" !== n && "name" !== n && "constructor" !== n) {
								var r = e[n],
									o = "<NULL>";
								void 0 !== r && null !== r && (o = "number" == typeof r || "string" == typeof r ? r.toString() : JSON.stringify(r)), t.push(n + ": " + o)
							}
						return t.join(" | ")
					}, this.logLevelFilter = e
				}
				return e
			}();
		t.ConsoleLoggingListener = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = n(4),
			i = function() {
				function e(t, n) {
					var i = this;
					this.streams = {}, this.TurnOn = function() {
						if ("undefined" == typeof FileReader) {
							var t = "Browser does not support FileReader.";
							return i.OnEvent(new r.AudioSourceErrorEvent(t, "")), r.PromiseHelper.FromError(t)
						}
						if (i.file.name.lastIndexOf(".wav") !== i.file.name.length - 4) {
							var t = i.file.name + " is not supported. Only WAVE files are allowed at the moment.";
							return i.OnEvent(new r.AudioSourceErrorEvent(t, "")), r.PromiseHelper.FromError(t)
						}
						if (i.file.size > e.MAX_SIZE) {
							var t = i.file.name + " exceeds the maximum allowed file size (" + e.MAX_SIZE + ").";
							return i.OnEvent(new r.AudioSourceErrorEvent(t, "")), r.PromiseHelper.FromError(t)
						}
						return i.OnEvent(new r.AudioSourceInitializingEvent(i.id)), i.OnEvent(new r.AudioSourceReadyEvent(i.id)), r.PromiseHelper.FromResult(!0)
					}, this.Id = function() {
						return i.id
					}, this.Attach = function(e) {
						return i.OnEvent(new r.AudioStreamNodeAttachingEvent(i.id, e)), i.Upload(e).OnSuccessContinueWith(function(t) {
							return i.OnEvent(new r.AudioStreamNodeAttachedEvent(i.id, e)), {
								Detach: function() {
									t.Close(), delete i.streams[e], i.OnEvent(new r.AudioStreamNodeDetachedEvent(i.id, e)), i.TurnOff()
								},
								Id: function() {
									return e
								},
								Read: function() {
									return t.Read()
								}
							}
						})
					}, this.Detach = function(e) {
						e && i.streams[e] && (i.streams[e].Close(), delete i.streams[e], i.OnEvent(new r.AudioStreamNodeDetachedEvent(i.id, e)))
					}, this.TurnOff = function() {
						for (var e in i.streams)
							if (e) {
								var t = i.streams[e];
								t && !t.IsClosed && t.Close()
							}
						return i.OnEvent(new r.AudioSourceOffEvent(i.id)), r.PromiseHelper.FromResult(!0)
					}, this.Upload = function(t) {
						return i.TurnOn().OnSuccessContinueWith(function(n) {
							var s = new r.Stream(t);
							i.streams[t] = s;
							var c = new FileReader,
								u = 0,
								a = e.CHUNK_SIZE,
								l = 0,
								d = function(t) {
									if (!s.IsClosed) {
										if (0 !== l) {
											var n = Date.now() - l;
											if (n < e.UPLOAD_INTERVAL) return void new o.Timer(e.UPLOAD_INTERVAL - n, d).start()
										}
										if (s.Write(c.result), l = Date.now(), a < i.file.size) {
											u = a, a = Math.min(a + e.CHUNK_SIZE, i.file.size);
											var r = i.file.slice(u, a);
											c.readAsArrayBuffer(r)
										} else s.Close()
									}
								};
							c.onload = d, c.onerror = function(e) {
								var n = "Error occurred while processing '" + i.file.name + "'. " + e.error;
								throw i.OnEvent(new r.AudioStreamNodeErrorEvent(i.id, t, e.error)), new Error(n)
							};
							var f = i.file.slice(u, a);
							return c.readAsArrayBuffer(f), s.GetReader()
						})
					}, this.OnEvent = function(e) {
						i.events.OnEvent(e), r.Events.Instance.OnEvent(e)
					}, this.id = n || r.CreateNoDashGuid(), this.events = new r.EventSource, this.file = t
				}
				return Object.defineProperty(e.prototype, "Events", {
					get: function() {
						return this.events
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		i.SAMPLE_RATE = 32e3, i.CHUNK_SIZE = 2 * i.SAMPLE_RATE / 5, i.UPLOAD_INTERVAL = 200, i.MAX_SIZE = 600 * i.SAMPLE_RATE + 44, t.FileAudioSource = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = function() {
				function e() {
					this.Get = function(e) {
						if (!e) throw new r.ArgumentNullError("key");
						return localStorage.getItem(e)
					}, this.GetOrAdd = function(e, t) {
						if (!e) throw new r.ArgumentNullError("key");
						var n = localStorage.getItem(e);
						return null !== n && void 0 !== n || localStorage.setItem(e, t), localStorage.getItem(e)
					}, this.Set = function(e, t) {
						if (!e) throw new r.ArgumentNullError("key");
						localStorage.setItem(e, t)
					}, this.Remove = function(e) {
						if (!e) throw new r.ArgumentNullError("key");
						localStorage.removeItem(e)
					}
				}
				return e
			}();
		t.LocalStorage = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = function() {
				function e(e, t) {
					var n = this;
					this.streams = {}, this.TurnOn = function() {
						if (n.initializeDeferral) return n.initializeDeferral.Promise();
						n.initializeDeferral = new r.Deferred, n.CreateAudioContext();
						var e = window.navigator,
							t = e.getUserMedia || e.webkitGetUserMedia || e.mozGetUserMedia || e.msGetUserMedia;
						if (e.mediaDevices && (t = function(t, n, r) {
								e.mediaDevices.getUserMedia(t).then(n).catch(r)
							}), t) {
							var o = function() {
								n.OnEvent(new r.AudioSourceInitializingEvent(n.id)), t({
									audio: !0,
									video: !1
								}, function(e) {
									n.mediaStream = e, n.OnEvent(new r.AudioSourceReadyEvent(n.id)), n.initializeDeferral.Resolve(!0)
								}, function(e) {
									var t = "Error occurred during microphone initialization: " + e,
										o = n.initializeDeferral;
									n.initializeDeferral = null, o.Reject(t), n.OnEvent(new r.AudioSourceErrorEvent(n.id, t))
								})
							};
							"suspended" === n.context.state ? n.context.resume().then(o, function(e) {
								n.initializeDeferral.Reject("Failed to initialize audio context: " + e)
							}) : o()
						} else {
							var i = "Browser does not support getUserMedia.";
							n.initializeDeferral.Reject(i), n.OnEvent(new r.AudioSourceErrorEvent(i, ""))
						}
						return n.initializeDeferral.Promise()
					}, this.Id = function() {
						return n.id
					}, this.Attach = function(e) {
						return n.OnEvent(new r.AudioStreamNodeAttachingEvent(n.id, e)), n.Listen(e).OnSuccessContinueWith(function(t) {
							return n.OnEvent(new r.AudioStreamNodeAttachedEvent(n.id, e)), {
								Detach: function() {
									t.Close(), delete n.streams[e], n.OnEvent(new r.AudioStreamNodeDetachedEvent(n.id, e)), n.TurnOff()
								},
								Id: function() {
									return e
								},
								Read: function() {
									return t.Read()
								}
							}
						})
					}, this.Detach = function(e) {
						e && n.streams[e] && (n.streams[e].Close(), delete n.streams[e], n.OnEvent(new r.AudioStreamNodeDetachedEvent(n.id, e)))
					}, this.TurnOff = function() {
						for (var e in n.streams)
							if (e) {
								var t = n.streams[e];
								t && t.Close()
							}
						return n.OnEvent(new r.AudioSourceOffEvent(n.id)), n.initializeDeferral = null, n.DestroyAudioContext(), r.PromiseHelper.FromResult(!0)
					}, this.Listen = function(e) {
						return n.TurnOn().OnSuccessContinueWith(function(t) {
							var o = new r.Stream(e);
							n.streams[e] = o;
							try {
								n.recorder.Record(n.context, n.mediaStream, o)
							} catch (t) {
								throw n.OnEvent(new r.AudioStreamNodeErrorEvent(n.id, e, t)), t
							}
							return o.GetReader()
						})
					}, this.OnEvent = function(e) {
						n.events.OnEvent(e), r.Events.Instance.OnEvent(e)
					}, this.CreateAudioContext = function() {
						if (!n.context) {
							var e = window.AudioContext || window.webkitAudioContext || !1;
							if (!e) throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
							n.context = new e
						}
					}, this.DestroyAudioContext = function() {
						n.context && (n.recorder.ReleaseMediaResources(n.context), "close" in n.context ? (n.context.close(), n.context = null) : "running" === n.context.state && n.context.suspend())
					}, this.id = t || r.CreateNoDashGuid(), this.events = new r.EventSource, this.recorder = e
				}
				return Object.defineProperty(e.prototype, "Events", {
					get: function() {
						return this.events
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.MicAudioSource = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e) {
				var t = this;
				this.Record = function(e, n, r) {
					var o = new MediaRecorder(n, t.mediaRecorderOptions);
					o.ondataavailable = function(e) {
						if (r) {
							var t = new FileReader;
							t.readAsArrayBuffer(e.data), t.onloadend = function(e) {
								r.Write(t.result)
							}
						}
					}, t.mediaResources = {
						recorder: o,
						stream: n
					}, o.start(100)
				}, this.ReleaseMediaResources = function(e) {
					"inactive" !== t.mediaResources.recorder.state && t.mediaResources.recorder.stop(), t.mediaResources.stream.getTracks().forEach(function(e) {
						return e.stop()
					})
				}, this.mediaRecorderOptions = e
			}
			return e
		}();
		t.OpusRecorder = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = function() {
				function e() {
					var e = this;
					this.Record = function(t, n, o) {
						var i = function() {
								var e = 0;
								try {
									return t.createScriptProcessor(e, 1, 1)
								} catch (r) {
									e = 2048;
									for (var n = t.sampleRate; e < 16384 && n >= 32e3;) e <<= 1, n >>= 1;
									return t.createScriptProcessor(e, 1, 1)
								}
							}(),
							s = new r.RiffPcmEncoder(t.sampleRate, 16e3),
							c = !0;
						i.onaudioprocess = function(e) {
							var t = e.inputBuffer.getChannelData(0);
							if (o && !o.IsClosed) {
								var n = s.Encode(c, t);
								n && (o.Write(n), c = !1)
							}
						};
						var u = t.createMediaStreamSource(n);
						e.mediaResources = {
							scriptProcessorNode: i,
							source: u,
							stream: n
						}, u.connect(i), i.connect(t.destination)
					}, this.ReleaseMediaResources = function(t) {
						e.mediaResources && (e.mediaResources.scriptProcessorNode && (e.mediaResources.scriptProcessorNode.disconnect(t.destination), e.mediaResources.scriptProcessorNode = null), e.mediaResources.source && (e.mediaResources.source.disconnect(), e.mediaResources.stream.getTracks().forEach(function(e) {
							return e.stop()
						}), e.mediaResources.source = null))
					}
				}
				return e
			}();
		t.PcmRecorder = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = function() {
				function e() {
					this.Get = function(e) {
						if (!e) throw new r.ArgumentNullError("key");
						return sessionStorage.getItem(e)
					}, this.GetOrAdd = function(e, t) {
						if (!e) throw new r.ArgumentNullError("key");
						var n = sessionStorage.getItem(e);
						return null !== n && void 0 !== n || sessionStorage.setItem(e, t), sessionStorage.getItem(e)
					}, this.Set = function(e, t) {
						if (!e) throw new r.ArgumentNullError("key");
						sessionStorage.setItem(e, t)
					}, this.Remove = function(e) {
						if (!e) throw new r.ArgumentNullError("key");
						sessionStorage.removeItem(e)
					}
				}
				return e
			}();
		t.SessionStorage = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t) {
				var n = this;
				this.start = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					n.timerId && n.stop(), n.timerId = setTimeout(n.successCallback, n.delayInMillisec, e)
				}, this.stop = function() {
					clearTimeout(n.timerId)
				}, this.delayInMillisec = e, this.successCallback = t
			}
			return e
		}();
		t.Timer = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = n(9),
			i = function() {
				function e(e, t, n, i, s) {
					var c = this;
					if (this.isDisposed = !1, this.Dispose = function() {
							c.isDisposed = !0, c.connectionMessageAdapter && c.connectionMessageAdapter.Close()
						}, this.IsDisposed = function() {
							return c.isDisposed
						}, this.State = function() {
							return c.connectionMessageAdapter.State
						}, this.Open = function() {
							return c.connectionMessageAdapter.Open()
						}, this.Send = function(e) {
							return c.connectionMessageAdapter.Send(e)
						}, this.Read = function() {
							return c.connectionMessageAdapter.Read()
						}, !e) throw new r.ArgumentNullError("uri");
					if (!i) throw new r.ArgumentNullError("messageFormatter");
					this.messageFormatter = i;
					var u = "",
						a = 0;
					if (t)
						for (var l in t)
							if (l) {
								u += 0 === a ? "?" : "&";
								var d = encodeURIComponent(t[l]);
								u += l + "=" + d, a++
							}
					if (n)
						for (var f in n)
							if (f) {
								u += 0 === a ? "?" : "&";
								var d = encodeURIComponent(n[f]);
								u += f + "=" + d, a++
							}
					this.uri = e + u, this.id = s || r.CreateNoDashGuid(), this.connectionMessageAdapter = new o.WebsocketMessageAdapter(this.uri, this.Id, this.messageFormatter)
				}
				return Object.defineProperty(e.prototype, "Id", {
					get: function() {
						return this.id
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Events", {
					get: function() {
						return this.connectionMessageAdapter.Events
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.WebsocketConnection = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3),
			o = n(5),
			i = function(e) {
				function t(t, n, r) {
					void 0 === r && (r = o.EventType.Info);
					var i = e.call(this, t, r) || this;
					return i.audioSourceId = n, i
				}
				return r.__extends(t, e), Object.defineProperty(t.prototype, "AudioSourceId", {
					get: function() {
						return this.audioSourceId
					},
					enumerable: !0,
					configurable: !0
				}), t
			}(o.PlatformEvent);
		t.AudioSourceEvent = i;
		var s = function(e) {
			function t(t) {
				return e.call(this, "AudioSourceInitializingEvent", t) || this
			}
			return r.__extends(t, e), t
		}(i);
		t.AudioSourceInitializingEvent = s;
		var c = function(e) {
			function t(t) {
				return e.call(this, "AudioSourceReadyEvent", t) || this
			}
			return r.__extends(t, e), t
		}(i);
		t.AudioSourceReadyEvent = c;
		var u = function(e) {
			function t(t) {
				return e.call(this, "AudioSourceOffEvent", t) || this
			}
			return r.__extends(t, e), t
		}(i);
		t.AudioSourceOffEvent = u;
		var a = function(e) {
			function t(t, n) {
				var r = e.call(this, "AudioSourceErrorEvent", t, o.EventType.Error) || this;
				return r.error = n, r
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "Error", {
				get: function() {
					return this.error
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.AudioSourceErrorEvent = a;
		var l = function(e) {
			function t(t, n, r) {
				var o = e.call(this, t, n) || this;
				return o.audioNodeId = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "AudioNodeId", {
				get: function() {
					return this.audioNodeId
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.AudioStreamNodeEvent = l;
		var d = function(e) {
			function t(t, n) {
				return e.call(this, "AudioStreamNodeAttachingEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(l);
		t.AudioStreamNodeAttachingEvent = d;
		var f = function(e) {
			function t(t, n) {
				return e.call(this, "AudioStreamNodeAttachedEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(l);
		t.AudioStreamNodeAttachedEvent = f;
		var h = function(e) {
			function t(t, n) {
				return e.call(this, "AudioStreamNodeDetachedEvent", t, n) || this
			}
			return r.__extends(t, e), t
		}(l);
		t.AudioStreamNodeDetachedEvent = h;
		var p = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "AudioStreamNodeErrorEvent", t, n) || this;
				return o.error = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "Error", {
				get: function() {
					return this.error
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(l);
		t.AudioStreamNodeErrorEvent = p
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3),
			o = n(5),
			i = function(e) {
				function t(t, n, r) {
					void 0 === r && (r = o.EventType.Info);
					var i = e.call(this, t, r) || this;
					return i.connectionId = n, i
				}
				return r.__extends(t, e), Object.defineProperty(t.prototype, "ConnectionId", {
					get: function() {
						return this.connectionId
					},
					enumerable: !0,
					configurable: !0
				}), t
			}(o.PlatformEvent);
		t.ConnectionEvent = i;
		var s = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "ConnectionStartEvent", t) || this;
				return o.uri = n, o.headers = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "Uri", {
				get: function() {
					return this.uri
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "Headers", {
				get: function() {
					return this.headers
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ConnectionStartEvent = s;
		var c = function(e) {
			function t(t, n) {
				return e.call(this, "ConnectionEstablishedEvent", t) || this
			}
			return r.__extends(t, e), t
		}(i);
		t.ConnectionEstablishedEvent = c;
		var u = function(e) {
			function t(t, n, r) {
				var i = e.call(this, "ConnectionClosedEvent", t, o.EventType.Warning) || this;
				return i.reason = r, i.statusCode = n, i
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "Reason", {
				get: function() {
					return this.reason
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "StatusCode", {
				get: function() {
					return this.statusCode
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ConnectionClosedEvent = u;
		var a = function(e) {
			function t(t, n, r) {
				var i = e.call(this, "ConnectionEstablishErrorEvent", t, o.EventType.Error) || this;
				return i.statusCode = n, i.reason = r, i
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "Reason", {
				get: function() {
					return this.reason
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "StatusCode", {
				get: function() {
					return this.statusCode
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ConnectionEstablishErrorEvent = a;
		var l = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "ConnectionMessageReceivedEvent", t) || this;
				return o.networkReceivedTime = n, o.message = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "NetworkReceivedTime", {
				get: function() {
					return this.networkReceivedTime
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "Message", {
				get: function() {
					return this.message
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ConnectionMessageReceivedEvent = l;
		var d = function(e) {
			function t(t, n, r) {
				var o = e.call(this, "ConnectionMessageSentEvent", t) || this;
				return o.networkSentTime = n, o.message = r, o
			}
			return r.__extends(t, e), Object.defineProperty(t.prototype, "NetworkSentTime", {
				get: function() {
					return this.networkSentTime
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "Message", {
				get: function() {
					return this.message
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(i);
		t.ConnectionMessageSentEvent = d
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t) {
				this.statusCode = e, this.reason = t
			}
			return Object.defineProperty(e.prototype, "StatusCode", {
				get: function() {
					return this.statusCode
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Reason", {
				get: function() {
					return this.reason
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.ConnectionOpenResponse = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			o = n(11),
			i = function() {
				function e() {}
				return Object.defineProperty(e, "Instance", {
					get: function() {
						return e.instance
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		i.instance = new o.EventSource, i.SetEventSource = function(e) {
			if (!e) throw new r.ArgumentNullError("eventSource");
			i.instance = e
		}, t.Events = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		! function(e) {
			e[e.None = 0] = "None", e[e.Connected = 1] = "Connected", e[e.Connecting = 2] = "Connecting", e[e.Disconnected = 3] = "Disconnected"
		}(t.ConnectionState || (t.ConnectionState = {}))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(10),
			o = n(1),
			i = n(2),
			s = function() {
				function e(e, t, n) {
					if (this.payload = null, !t) throw new o.ArgumentNullError("payload");
					if (e === r.MessageType.Binary && !(t instanceof ArrayBuffer)) throw new o.InvalidOperationError("Payload must be ArrayBuffer");
					if (e === r.MessageType.Text && "string" != typeof t) throw new o.InvalidOperationError("Payload must be a string");
					this.messageType = e, this.payload = t, this.id = n || i.CreateNoDashGuid()
				}
				return Object.defineProperty(e.prototype, "MessageType", {
					get: function() {
						return this.messageType
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Payload", {
					get: function() {
						return this.payload
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "TextContent", {
					get: function() {
						if (this.messageType === r.MessageType.Binary) throw new o.InvalidOperationError("Not supported for binary message");
						return this.payload
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "BinaryContent", {
					get: function() {
						if (this.messageType === r.MessageType.Text) throw new o.InvalidOperationError("Not supported for text message");
						return this.payload
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Id", {
					get: function() {
						return this.id
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.RawWebsocketMessage = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t) {
				var n = this;
				this.channelCount = 1, this.Encode = function(e, t) {
					var r = n.DownSampleAudioFrame(t, n.actualSampleRate, n.desiredSampleRate);
					if (!r) return null;
					var o = 2 * r.length;
					if (!e) {
						var i = new ArrayBuffer(o),
							s = new DataView(i);
						return n.FloatTo16BitPCM(s, 0, r), i
					}
					var c = new ArrayBuffer(44 + o),
						u = new DataView(c);
					return n.SetString(u, 0, "RIFF"), u.setUint32(4, 0, !0), n.SetString(u, 8, "WAVEfmt "), u.setUint32(16, 16, !0), u.setUint16(20, 1, !0), u.setUint16(22, n.channelCount, !0), u.setUint32(24, n.desiredSampleRate, !0), u.setUint32(28, n.desiredSampleRate * n.channelCount * 2, !0), u.setUint16(32, 2 * n.channelCount, !0), u.setUint16(34, 16, !0), n.SetString(u, 36, "data"), u.setUint32(40, 0, !0), n.FloatTo16BitPCM(u, 44, r), c
				}, this.SetString = function(e, t, n) {
					for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r))
				}, this.FloatTo16BitPCM = function(e, t, n) {
					for (var r = 0; r < n.length; r++, t += 2) {
						var o = Math.max(-1, Math.min(1, n[r]));
						e.setInt16(t, o < 0 ? 32768 * o : 32767 * o, !0)
					}
				}, this.DownSampleAudioFrame = function(e, t, n) {
					if (n === t || n > t) return e;
					for (var r = t / n, o = Math.round(e.length / r), i = new Float32Array(o), s = 0, c = 0; c < o;) {
						for (var u = Math.round((c + 1) * r), a = 0, l = 0; s < u && s < e.length;) a += e[s++], l++;
						i[c++] = a / l
					}
					return i
				}, this.actualSampleRate = e, this.desiredSampleRate = t
			}
			return e
		}();
		t.RiffPcmEncoder = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			o = n(12),
			i = function() {
				function e() {}
				return Object.defineProperty(e, "Session", {
					get: function() {
						return e.sessionStorage
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e, "Local", {
					get: function() {
						return e.localStorage
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		i.sessionStorage = new o.InMemoryStorage, i.localStorage = new o.InMemoryStorage, i.SetSessionStorage = function(e) {
			if (!e) throw new r.ArgumentNullError("sessionStorage");
			i.sessionStorage = e
		}, i.SetLocalStorage = function(e) {
			if (!e) throw new r.ArgumentNullError("localStorage");
			i.localStorage = e
		}, t.Storage = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			o = n(2),
			i = n(15),
			s = function() {
				function e(e) {
					var t = this;
					this.readerIdCounter = 1, this.isEnded = !1, this.Write = function(e) {
						t.ThrowIfClosed(), t.WriteStreamChunk({
							Buffer: e,
							IsEnd: !1
						})
					}, this.GetReader = function() {
						var e = t.readerIdCounter;
						t.readerIdCounter++;
						var n = new i.Queue,
							r = t.streambuffer.length;
						t.readerQueues[e] = n;
						for (var o = 0; o < r; o++) n.Enqueue(t.streambuffer[o]);
						return new c(t.id, n, function() {
							delete t.readerQueues[e]
						})
					}, this.Close = function() {
						t.isEnded || (t.WriteStreamChunk({
							Buffer: null,
							IsEnd: !0
						}), t.isEnded = !0)
					}, this.WriteStreamChunk = function(e) {
						t.ThrowIfClosed(), t.streambuffer.push(e);
						for (var n in t.readerQueues)
							if (!t.readerQueues[n].IsDisposed()) try {
								t.readerQueues[n].Enqueue(e)
							} catch (e) {}
					}, this.ThrowIfClosed = function() {
						if (t.isEnded) throw new r.InvalidOperationError("Stream closed")
					}, this.id = e || o.CreateNoDashGuid(), this.streambuffer = [], this.readerQueues = {}
				}
				return Object.defineProperty(e.prototype, "IsClosed", {
					get: function() {
						return this.isEnded
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Id", {
					get: function() {
						return this.id
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.Stream = s;
		var c = function() {
			function e(e, t, n) {
				var o = this;
				this.isClosed = !1, this.Read = function() {
					if (o.IsClosed) throw new r.InvalidOperationError("StreamReader closed");
					return o.readerQueue.Dequeue().OnSuccessContinueWith(function(e) {
						return e.IsEnd && o.readerQueue.Dispose("End of stream reached"), e
					})
				}, this.Close = function() {
					o.isClosed || (o.isClosed = !0, o.readerQueue.Dispose("StreamReader closed"), o.onClose())
				}, this.readerQueue = t, this.onClose = n, this.streamId = e
			}
			return Object.defineProperty(e.prototype, "IsClosed", {
				get: function() {
					return this.isClosed
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "StreamId", {
				get: function() {
					return this.streamId
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.StreamReader = c
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), r(n(50)), r(n(16))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(4),
			o = n(6),
			i = n(16),
			s = function(e, t) {
				return c(e, t)
			};
		t.CreateRecognizer = s;
		var c = function(e, t) {
			return a(e, t, new r.MicAudioSource(new r.PcmRecorder))
		};
		t.CreateRecognizerWithPcmRecorder = c;
		var u = function(e, t, n) {
			return a(e, t, new r.FileAudioSource(n))
		};
		t.CreateRecognizerWithFileAudioSource = u;
		var a = function(e, t, n) {
			return new o.Recognizer(t, new i.SpeechConnectionFactory, n, e)
		};
		t.CreateRecognizerWithCustomAudioSource = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = n(7),
			i = "Ocp-Apim-Subscription-Key",
			s = function() {
				function e(e) {
					var t = this;
					if (this.Fetch = function(e) {
							return r.PromiseHelper.FromResult(t.authInfo)
						}, this.FetchOnExpiry = function(e) {
							return r.PromiseHelper.FromResult(t.authInfo)
						}, !e) throw new r.ArgumentNullError("subscriptionKey");
					this.authInfo = new o.AuthInfo(i, e)
				}
				return e
			}();
		t.CognitiveSubscriptionKeyAuthentication = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = n(7),
			i = "Authorization",
			s = function() {
				function e(e, t) {
					var n = this;
					if (this.Fetch = function(e) {
							return n.fetchCallback(e).OnSuccessContinueWith(function(e) {
								return new o.AuthInfo(i, e)
							})
						}, this.FetchOnExpiry = function(e) {
							return n.fetchOnExpiryCallback(e).OnSuccessContinueWith(function(e) {
								return new o.AuthInfo(i, e)
							})
						}, !e) throw new r.ArgumentNullError("fetchCallback");
					if (!t) throw new r.ArgumentNullError("fetchOnExpiryCallback");
					this.fetchCallback = e, this.fetchOnExpiryCallback = t
				}
				return e
			}();
		t.CognitiveTokenAuthentication = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = n(8),
			i = n(17),
			s = n(55),
			c = n(56),
			u = function() {
				function e(e, t, n, o) {
					var s = this;
					if (this.Recognize = function(e, t) {
							var n = new a(s.audioSource.Id(), e);
							return n.ListenForServiceTelemetry(s.audioSource.Events), s.audioSource.Attach(n.AudioNodeId).ContinueWithPromise(function(e) {
								if (e.IsError) throw n.OnAudioSourceAttachCompleted(null, !0, e.Error), new Error(e.Error);
								n.OnAudioSourceAttachCompleted(e.Result, !1);
								var o = e.Result;
								return s.FetchConnection(n).OnSuccessContinueWith(function(e) {
									var i = s.ReceiveMessage(e, n),
										c = s.SendSpeechConfig(n.RequestId, e, s.recognizerConfig.SpeechConfig.Serialize()).OnSuccessContinueWithPromise(function(r) {
											return s.SendSpeechContext(n.RequestId, e, t).OnSuccessContinueWithPromise(function(t) {
												return s.SendAudio(n.RequestId, e, o, n)
											})
										}),
										u = r.PromiseHelper.WhenAll([i, c]);
									return u.On(function(t) {
										n.Dispose(), s.SendTelemetryData(n.RequestId, e, n.GetTelemetry())
									}, function(t) {
										n.Dispose(t), s.SendTelemetryData(n.RequestId, e, n.GetTelemetry())
									}), u
								}), n.CompletionPromise
							})
						}, this.FetchConnection = function(e, t) {
							if (void 0 === t && (t = !1), s.connectionFetchPromise) return s.connectionFetchPromise.Result().IsError || s.connectionFetchPromise.Result().Result.State() === r.ConnectionState.Disconnected ? (s.connectionId = null, s.connectionFetchPromise = null, s.FetchConnection(e)) : (e.OnPreConnectionStart(s.authFetchEventId, s.connectionId), e.OnConnectionEstablishCompleted(200), e.ListenForServiceTelemetry(s.connectionFetchPromise.Result().Result.Events), s.connectionFetchPromise);
							s.authFetchEventId = r.CreateNoDashGuid(), s.connectionId = r.CreateNoDashGuid(), e.OnPreConnectionStart(s.authFetchEventId, s.connectionId);
							var n = t ? s.authentication.FetchOnExpiry(s.authFetchEventId) : s.authentication.Fetch(s.authFetchEventId);
							return s.connectionFetchPromise = n.ContinueWithPromise(function(n) {
								if (n.IsError) throw e.OnAuthCompleted(!0, n.Error), new Error(n.Error);
								e.OnAuthCompleted(!1);
								var o = s.connectionFactory.Create(s.recognizerConfig, n.Result, s.connectionId);
								return e.ListenForServiceTelemetry(o.Events), o.Open().OnSuccessContinueWithPromise(function(n) {
									return 200 === n.StatusCode ? (e.OnConnectionEstablishCompleted(n.StatusCode), r.PromiseHelper.FromResult(o)) : 403 !== n.StatusCode || t ? (e.OnConnectionEstablishCompleted(n.StatusCode, n.Reason), r.PromiseHelper.FromError("Unable to contact server. StatusCode: " + n.StatusCode + ", Reason: " + n.Reason)) : s.FetchConnection(e, !0)
								})
							}), s.connectionFetchPromise
						}, this.ReceiveMessage = function(e, t) {
							return e.Read().OnSuccessContinueWithPromise(function(n) {
								var o = c.SpeechConnectionMessage.FromConnectionMessage(n);
								if (o.RequestId.toLowerCase() === t.RequestId.toLowerCase()) switch (o.Path.toLowerCase()) {
									case "turn.start":
										t.OnServiceTurnStartResponse(JSON.parse(o.TextBody));
										break;
									case "speech.startDetected":
										t.OnServiceSpeechStartDetectedResponse(JSON.parse(o.TextBody));
										break;
									case "speech.hypothesis":
										t.OnServiceSpeechHypothesisResponse(JSON.parse(o.TextBody));
										break;
									case "speech.fragment":
										t.OnServiceSpeechFragmentResponse(JSON.parse(o.TextBody));
										break;
									case "speech.enddetected":
										t.OnServiceSpeechEndDetectedResponse(JSON.parse(o.TextBody));
										break;
									case "speech.phrase":
										s.recognizerConfig.IsContinuousRecognition && s.SendTelemetryData(t.RequestId, e, t.GetTelemetry()), s.recognizerConfig.Format === i.SpeechResultFormat.Simple ? t.OnServiceSimpleSpeechPhraseResponse(JSON.parse(o.TextBody)) : t.OnServiceDetailedSpeechPhraseResponse(JSON.parse(o.TextBody));
										break;
									case "turn.end":
										return t.OnServiceTurnEndResponse(), r.PromiseHelper.FromResult(!0)
								}
								return s.ReceiveMessage(e, t)
							})
						}, this.SendSpeechConfig = function(e, t, n) {
							return n && s.connectionId !== s.speechConfigConnectionId ? (s.speechConfigConnectionId = s.connectionId, t.Send(new c.SpeechConnectionMessage(r.MessageType.Text, "speech.config", e, "application/json", n))) : r.PromiseHelper.FromResult(!0)
						}, this.SendSpeechContext = function(e, t, n) {
							return n ? t.Send(new c.SpeechConnectionMessage(r.MessageType.Text, "speech.context", e, "application/json", n)) : r.PromiseHelper.FromResult(!0)
						}, this.SendTelemetryData = function(e, t, n) {
							return t.Send(new c.SpeechConnectionMessage(r.MessageType.Text, "telemetry", e, "application/json", n))
						}, this.SendAudio = function(e, t, n, o) {
							var i = new r.Deferred,
								s = function(u) {
									n.Read().On(function(n) {
										if (o.IsSpeechEnded) return void i.Resolve(!0);
										var u = n.IsEnd ? null : n.Buffer,
											a = t.Send(new c.SpeechConnectionMessage(r.MessageType.Binary, "audio", e, null, u));
										n.IsEnd ? i.Resolve(!0) : a.OnSuccessContinueWith(s)
									}, function(e) {
										o.IsSpeechEnded ? i.Resolve(!0) : i.Reject(e)
									})
								};
							return s(!0), i.Promise()
						}, !e) throw new r.ArgumentNullError("authentication");
					if (!t) throw new r.ArgumentNullError("connectionFactory");
					if (!n) throw new r.ArgumentNullError("audioSource");
					if (!o) throw new r.ArgumentNullError("recognizerConfig");
					this.authentication = e, this.connectionFactory = t, this.audioSource = n, this.recognizerConfig = o
				}
				return Object.defineProperty(e.prototype, "AudioSource", {
					get: function() {
						return this.audioSource
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.Recognizer = u;
		var a = function() {
			function e(e, t) {
				var n = this;
				this.isDisposed = !1, this.detachables = new Array, this.isAudioNodeDetached = !1, this.isCompleted = !1, this.OnAudioSourceAttachCompleted = function(e, t, r) {
					n.audioNode = e, t ? n.OnComplete(o.RecognitionCompletionStatus.AudioSourceError, r) : n.OnEvent(new o.ListeningStartedEvent(n.requestId, n.audioSourceId, n.audioNodeId))
				}, this.OnPreConnectionStart = function(e, t) {
					n.authFetchEventId = e, n.connectionId = t, n.OnEvent(new o.ConnectingToServiceEvent(n.requestId, n.authFetchEventId, n.connectionId))
				}, this.OnAuthCompleted = function(e, t) {
					e && n.OnComplete(o.RecognitionCompletionStatus.AuthTokenFetchError, t)
				}, this.OnConnectionEstablishCompleted = function(e, t) {
					if (200 === e) return void n.OnEvent(new o.RecognitionStartedEvent(n.RequestId, n.audioSourceId, n.audioNodeId, n.authFetchEventId, n.connectionId));
					403 === e ? n.OnComplete(o.RecognitionCompletionStatus.UnAuthorized, t) : n.OnComplete(o.RecognitionCompletionStatus.ConnectError, t)
				}, this.OnServiceTurnStartResponse = function(e) {
					e && e.context && e.context.serviceTag && (n.serviceTag = e.context.serviceTag)
				}, this.OnServiceSpeechStartDetectedResponse = function(e) {
					n.OnEvent(new o.SpeechStartDetectedEvent(n.RequestId, e))
				}, this.OnServiceSpeechHypothesisResponse = function(e) {
					n.OnEvent(new o.SpeechHypothesisEvent(n.RequestId, e))
				}, this.OnServiceSpeechFragmentResponse = function(e) {
					n.OnEvent(new o.SpeechFragmentEvent(n.RequestId, e))
				}, this.OnServiceSpeechEndDetectedResponse = function(e) {
					n.DetachAudioNode(), n.OnEvent(new o.SpeechEndDetectedEvent(n.RequestId, e))
				}, this.OnServiceSimpleSpeechPhraseResponse = function(e) {
					n.OnEvent(new o.SpeechSimplePhraseEvent(n.RequestId, e))
				}, this.OnServiceDetailedSpeechPhraseResponse = function(e) {
					n.OnEvent(new o.SpeechDetailedPhraseEvent(n.RequestId, e))
				}, this.OnServiceTurnEndResponse = function() {
					n.OnComplete(o.RecognitionCompletionStatus.Success)
				}, this.OnConnectionError = function(e) {
					n.OnComplete(o.RecognitionCompletionStatus.UnknownError, e)
				}, this.Dispose = function(e) {
					if (!n.isDisposed) {
						n.OnComplete(o.RecognitionCompletionStatus.UnknownError, e), n.isDisposed = !0;
						for (var t = 0, r = n.detachables; t < r.length; t++) {
							r[t].Detach()
						}
						n.serviceTelemetryListener.Dispose()
					}
				}, this.GetTelemetry = function() {
					return n.serviceTelemetryListener.GetTelemetry()
				}, this.OnComplete = function(e, t) {
					n.isCompleted || (n.isCompleted = !0, n.DetachAudioNode(), n.OnEvent(new o.RecognitionEndedEvent(n.RequestId, n.audioSourceId, n.audioNodeId, n.authFetchEventId, n.connectionId, n.serviceTag, e, t || "")))
				}, this.DetachAudioNode = function() {
					n.isAudioNodeDetached || (n.isAudioNodeDetached = !0, n.audioNode && n.audioNode.Detach())
				}, this.OnEvent = function(e) {
					n.serviceTelemetryListener.OnEvent(e), r.Events.Instance.OnEvent(e), n.onEventCallback && n.onEventCallback(e)
				}, this.audioSourceId = e, this.onEventCallback = t, this.requestId = r.CreateNoDashGuid(), this.audioNodeId = r.CreateNoDashGuid(), this.requestCompletionDeferral = new r.Deferred, this.serviceTelemetryListener = new s.ServiceTelemetryListener(this.requestId, this.audioSourceId, this.audioNodeId), this.OnEvent(new o.RecognitionTriggeredEvent(this.RequestId, this.audioSourceId, this.audioNodeId))
			}
			return Object.defineProperty(e.prototype, "RequestId", {
				get: function() {
					return this.requestId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "AudioNodeId", {
				get: function() {
					return this.audioNodeId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "CompletionPromise", {
				get: function() {
					return this.requestCompletionDeferral.Promise()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "IsSpeechEnded", {
				get: function() {
					return this.isAudioNodeDetached
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "IsCompleted", {
				get: function() {
					return this.isCompleted
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.ListenForServiceTelemetry = function(e) {
				this.detachables.push(e.AttachListener(this.serviceTelemetryListener))
			}, e
		}()
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = n(8),
			i = function() {
				function e(e, t, n) {
					var i = this;
					this.isDisposed = !1, this.listeningTriggerMetric = null, this.micMetric = null, this.connectionEstablishMetric = null, this.OnEvent = function(e) {
						i.isDisposed || (e instanceof o.RecognitionTriggeredEvent && e.RequestId === i.requestId && (i.listeningTriggerMetric = {
							End: e.EventTime,
							Name: "ListeningTrigger",
							Start: e.EventTime
						}), e instanceof r.AudioStreamNodeAttachingEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micStartTime = e.EventTime), e instanceof r.AudioStreamNodeAttachedEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micStartTime = e.EventTime), e instanceof r.AudioSourceErrorEvent && e.AudioSourceId === i.audioSourceId && (i.micMetric || (i.micMetric = {
							End: e.EventTime,
							Error: e.Error,
							Name: "Microphone",
							Start: i.micStartTime
						})), e instanceof r.AudioStreamNodeErrorEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micMetric || (i.micMetric = {
							End: e.EventTime,
							Error: e.Error,
							Name: "Microphone",
							Start: i.micStartTime
						})), e instanceof r.AudioStreamNodeDetachedEvent && e.AudioSourceId === i.audioSourceId && e.AudioNodeId === i.audioNodeId && (i.micMetric || (i.micMetric = {
							End: e.EventTime,
							Name: "Microphone",
							Start: i.micStartTime
						})), e instanceof o.ConnectingToServiceEvent && e.RequestId === i.requestId && (i.connectionId = e.ConnectionId), e instanceof r.ConnectionStartEvent && e.ConnectionId === i.connectionId && (i.connectionStartTime = e.EventTime), e instanceof r.ConnectionEstablishedEvent && e.ConnectionId === i.connectionId && (i.connectionEstablishMetric || (i.connectionEstablishMetric = {
							End: e.EventTime,
							Id: i.connectionId,
							Name: "Connection",
							Start: i.connectionStartTime
						})), e instanceof r.ConnectionEstablishErrorEvent && e.ConnectionId === i.connectionId && (i.connectionEstablishMetric || (i.connectionEstablishMetric = {
							End: e.EventTime,
							Error: i.GetConnectionError(e.StatusCode),
							Id: i.connectionId,
							Name: "Connection",
							Start: i.connectionStartTime
						})), e instanceof r.ConnectionMessageReceivedEvent && e.ConnectionId === i.connectionId && e.Message && e.Message.Headers && e.Message.Headers.path && (i.receivedMessages[e.Message.Headers.path] || (i.receivedMessages[e.Message.Headers.path] = new Array), i.receivedMessages[e.Message.Headers.path].push(e.NetworkReceivedTime)))
					}, this.GetTelemetry = function() {
						var e = new Array;
						i.listeningTriggerMetric && e.push(i.listeningTriggerMetric), i.micMetric && e.push(i.micMetric), i.connectionEstablishMetric && e.push(i.connectionEstablishMetric);
						var t = {
								Metrics: e,
								ReceivedMessages: i.receivedMessages
							},
							n = JSON.stringify(t);
						return i.receivedMessages = {}, i.listeningTriggerMetric = null, i.micMetric = null, i.connectionEstablishMetric = null, n
					}, this.Dispose = function() {
						i.isDisposed = !0
					}, this.GetConnectionError = function(e) {
						switch (e) {
							case 400:
							case 1002:
							case 1003:
							case 1005:
							case 1007:
							case 1008:
							case 1009:
								return "BadRequest";
							case 401:
								return "Unauthorized";
							case 403:
								return "Forbidden";
							case 503:
							case 1001:
								return "ServerUnavailable";
							case 500:
							case 1011:
								return "ServerError";
							case 408:
							case 504:
								return "Timeout";
							default:
								return "statuscode:" + e.toString()
						}
					}, this.requestId = e, this.audioSourceId = t, this.audioNodeId = n, this.receivedMessages = {}
				}
				return e
			}();
		t.ServiceTelemetryListener = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3),
			o = n(0),
			i = "path",
			s = "content-type",
			c = "x-requestid",
			u = "x-timestamp",
			a = function(e) {
				function t(t, n, r, a, l, d, f) {
					var h = this;
					if (!n) throw new o.ArgumentNullError("path");
					if (!r) throw new o.ArgumentNullError("requestId");
					var p = {};
					if (p[i] = n, p[c] = r, p[u] = (new Date).toISOString(), a && (p[s] = a), d)
						for (var v in d) v && (p[v] = d[v]);
					return h = f ? e.call(this, t, l, p, f) || this : e.call(this, t, l, p) || this, h.path = n, h.requestId = r, h.contentType = a, h.additionalHeaders = d, h
				}
				return r.__extends(t, e), Object.defineProperty(t.prototype, "Path", {
					get: function() {
						return this.path
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "RequestId", {
					get: function() {
						return this.requestId
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "ContentType", {
					get: function() {
						return this.contentType
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "AdditionalHeaders", {
					get: function() {
						return this.additionalHeaders
					},
					enumerable: !0,
					configurable: !0
				}), t
			}(o.ConnectionMessage);
		a.FromConnectionMessage = function(e) {
			var t = null,
				n = null,
				r = null,
				o = {};
			if (e.Headers)
				for (var l in e.Headers) l && (l.toLowerCase() === i.toLowerCase() ? t = e.Headers[l] : l.toLowerCase() === c.toLowerCase() ? n = e.Headers[l] : l.toLowerCase() === u.toLowerCase() ? e.Headers[l] : l.toLowerCase() === s.toLowerCase() ? r = e.Headers[l] : o[l] = e.Headers[l]);
			return new a(e.MessageType, t, n, r, e.Body, o, e.Id)
		}, t.SpeechConnectionMessage = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		! function(e) {
			e[e.Success = 0] = "Success", e[e.NoMatch = 1] = "NoMatch", e[e.InitialSilenceTimeout = 2] = "InitialSilenceTimeout", e[e.BabbleTimeout = 3] = "BabbleTimeout", e[e.Error = 4] = "Error", e[e.EndOfDictation = 5] = "EndOfDictation"
		}(t.RecognitionStatus || (t.RecognitionStatus = {}))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			o = "\r\n",
			i = function() {
				function e() {
					var e = this;
					this.ToConnectionMessage = function(t) {
						var n = new r.Deferred;
						try {
							if (t.MessageType === r.MessageType.Text) {
								var o = t.TextContent,
									i = {},
									s = null;
								if (o) {
									var c = o.split("\r\n\r\n");
									c && c.length > 0 && (i = e.ParseHeaders(c[0]), c.length > 1 && (s = c[1]))
								}
								n.Resolve(new r.ConnectionMessage(t.MessageType, s, i, t.Id))
							} else if (t.MessageType === r.MessageType.Binary) {
								var u = t.BinaryContent,
									i = {},
									s = null;
								if (!u || u.byteLength < 2) throw new Error("Invalid binary message format. Header length missing.");
								var a = new DataView(u),
									l = a.getInt16(0);
								if (u.byteLength < l + 2) throw new Error("Invalid binary message format. Header content missing.");
								for (var d = "", f = 0; f < l; f++) d += String.fromCharCode(a.getInt8(f + 2));
								i = e.ParseHeaders(d), u.byteLength > l + 2 && (s = u.slice(2 + l)), n.Resolve(new r.ConnectionMessage(t.MessageType, s, i, t.Id))
							}
						} catch (e) {
							n.Reject("Error formatting the message. Error: " + e)
						}
						return n.Promise()
					}, this.FromConnectionMessage = function(t) {
						var n = new r.Deferred;
						try {
							if (t.MessageType === r.MessageType.Text) {
								var i = "" + e.MakeHeaders(t) + o + (t.TextBody ? t.TextBody : "");
								n.Resolve(new r.RawWebsocketMessage(r.MessageType.Text, i, t.Id))
							} else if (t.MessageType === r.MessageType.Binary) {
								var s = e.MakeHeaders(t),
									c = t.BinaryBody,
									u = new Int8Array(e.StringToArrayBuffer(s)),
									i = new ArrayBuffer(2 + u.byteLength + (c ? c.byteLength : 0)),
									a = new DataView(i);
								a.setInt16(0, u.length);
								for (var l = 0; l < u.byteLength; l++) a.setInt8(2 + l, u[l]);
								if (c)
									for (var d = new Int8Array(c), l = 0; l < d.byteLength; l++) a.setInt8(2 + u.byteLength + l, d[l]);
								n.Resolve(new r.RawWebsocketMessage(r.MessageType.Binary, i, t.Id))
							}
						} catch (e) {
							n.Reject("Error formatting the message. " + e)
						}
						return n.Promise()
					}, this.MakeHeaders = function(e) {
						var t = "";
						if (e.Headers)
							for (var n in e.Headers) n && (t += n + ": " + e.Headers[n] + o);
						return t
					}, this.ParseHeaders = function(e) {
						var t = {};
						if (e) {
							var n = e.match(/[^\r\n]+/g);
							if (t)
								for (var r = 0, o = n; r < o.length; r++) {
									var i = o[r];
									if (i) {
										var s = i.indexOf(":"),
											c = s > 0 ? i.substr(0, s).trim().toLowerCase() : i,
											u = s > 0 && i.length > s + 1 ? i.substr(s + 1).trim() : "";
										t[c] = u
									}
								}
						}
						return t
					}, this.StringToArrayBuffer = function(e) {
						for (var t = new ArrayBuffer(e.length), n = new DataView(t), r = 0; r < e.length; r++) n.setUint8(r, e.charCodeAt(r));
						return t
					}
				}
				return e
			}();
		t.WebsocketMessageFormatter = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(19);
		t.SpeechRecognizer = r.SpeechRecognizer;
		var o = n(20);
		t.SpeechSynthesizer = o.SpeechSynthesizer, t.SynthesisGender = o.SynthesisGender
	}, function(e, t, n) {
		"use strict";

		function r(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function o(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
			return Array.from(e)
		}

		function i(e, t, n) {
			if (!Array.isArray(t)) throw new Error("path must be an array");
			if (!t.length) return n(e);
			t = t.slice();
			var u = t.shift(),
				a = void 0 !== e && e[u],
				l = e;
			if ("string" != typeof u || "object" === (void 0 === l ? "undefined" : c(l)) && !Array.isArray(l) ? "number" != typeof u || Array.isArray(l) || (l = []) : l = {}, "number" == typeof u) {
				if (n || t.length) {
					if (-1 === u) return [].concat(o(l), [i([], t, n)]);
					var d = i(a, t, n);
					if (void 0 !== d) return d === a ? e : (l = [].concat(o(l)), l[u] = d, l)
				}
				return u in l && (l = [].concat(o(l)), l.splice(u, 1)), l
			}
			if (n || t.length) {
				var f = i(a, t, n);
				if (void 0 !== f) return f === a ? e : s({}, l, r({}, u, f))
			}
			return u in l && (l = s({}, l), delete l[u]), l
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			},
			c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
		t.default = i
	}, function(e, t) {
		e.exports = {
			import: function() {
				throw new Error("System.import cannot be used indirectly")
			}
		}
	}])
});
//# sourceMappingURL=CognitiveServices.js.map