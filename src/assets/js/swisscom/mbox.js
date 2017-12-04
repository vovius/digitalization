// TAGMAN-1401 portal stage has flicker
(function () {
	var ttFlickerGuard = document.createElement("style");
	ttFlickerGuard.id = "ttFlickerGuard";
	ttFlickerGuard.innerHTML = 'body{opacity:0}';
	document.head.appendChild(ttFlickerGuard);
	setTimeout(function () {
		var guard = document.getElementById('ttFlickerGuard');
		if (guard) document.head.removeChild(guard);
	}, 500);
})();

// compression: 1

var mboxCopyright = "Copyright 1996-2015. Adobe Systems Incorporated. All rights reserved.";
var TNT = TNT || {};
TNT.a = (function () {
	return {
		nestedMboxes: [],
		b: {
			companyName: "Test&amp;Target",
			isProduction: true,
			adminUrl: "http://admin6.testandtarget.omniture.com/admin",
			clientCode: "swisscomag",
			serverHost: "swisscomag.tt.omtrdc.net",
			mboxTimeout: 15000,
			mboxLoadedTimeout: 100,
			mboxFactoryDisabledTimeout: 30 * 60,
			bodyPollingTimeout: 16,
			bodyHidingEnabled: false,
			bodyHiddenStyle: "body{opacity:0}",
			sessionExpirationTimeout: 31 * 60,
			experienceManagerDisabledTimeout: 30 * 60,
			experienceManagerTimeout: 5000,
			visitorApiTimeout: 500,
			visitorApiPageDisplayTimeout: 500,
			overrideMboxEdgeServer: false,
			overrideMboxEdgeServerTimeout: 31 * 60,
			tntIdLifetime: 1209600,
			crossDomain: "enabled",
			trafficDuration: 10368000,
			trafficLevelPercentage: 100,
			clientSessionIdSupport: true,
			clientTntIdSupport: false,
			passPageParameters: true,
			usePersistentCookies: true,
			crossDomainEnabled: true,
			crossDomainXOnly: false,
			imsOrgId: "A174401053C92A7E0A490D4C@AdobeOrg",
			globalMboxName: "target-global-mbox",
			globalMboxLocationDomId: "",
			globalMboxAutoCreate: true,
			experienceManagerPluginUrl: "//cdn.tt.omtrdc.net/cdn/target.js",
			siteCatalystPluginName: "tt",
			mboxVersion: 62,
			optoutEnabled: false,
			secureOnly: false,
			mboxIsSupportedFunction: function () {
				return true;
			},
			parametersFunction: function () {
				return "";
			},
			cookieDomainFunction: function () {
				if (window.SCS && window.SCS.tiq && window.SCS.tiq.mbox && window.SCS.tiq.mbox.getCustomCookieDomain) {
					return window.SCS.tiq.mbox.getCustomCookieDomain();
				} else {
					return mboxCookiePageDomain();
				}
			}
		},
		c: {
			d: "mboxPage",
			e: "mboxMCGVID",
			f: "mboxMCGLH",
			g: "mboxAAMB",
			h: "mboxMCAVID",
			i: "mboxMCSDID",
			j: "mboxCount",
			k: "mboxHost",
			l: "mboxFactoryId",
			m: "mboxPC",
			n: "screenHeight",
			o: "screenWidth",
			p: "browserWidth",
			q: "browserHeight",
			r: "browserTimeOffset",
			s: "colorDepth",
			t: "mboxXDomain",
			u: "mboxURL",
			v: "mboxReferrer",
			w: "mboxVersion",
			x: "mbox",
			y: "mboxId",
			z: "mboxDOMLoaded",
			A: "mboxTime",
			B: "scPluginVersion"
		},
		C: {D: "mboxDisable", E: "mboxSession", F: "mboxEnv", G: "mboxDebug"},
		H: {D: "disable", E: "session", m: "PC", I: "level", J: "check", G: "debug", K: "em-disabled", L: "mboxEdgeServer"},
		M: {N: "default", O: "mbox", P: "mboxImported-", Q: 60000, R: "mboxDefault", S: "mboxMarker-", T: 250, B: 1, U: "mboxedge", V: "tt.omtrdc.net"}
	}
}());
TNT.a.W = {};
(function (X) {
	var Y = {}.toString;

	function Z(_) {
		return _ === void(0);
	}

	function ab(_) {
		return _ === null;
	}

	function bb(_) {
		if (Z(_) || ab(_)) {
			return true;
		}
		return _.length === 0;
	}

	function cb(_) {
		return Y.call(_) === '[object Function]';
	}

	function db(_) {
		return Y.call(_) === '[object Array]';
	}

	function eb(_) {
		return Y.call(_) === '[object String]';
	}

	function fb(_) {
		return Y.call(_) === '[object Object]';
	}

	function gb(hb, ib) {
		var jb = hb.length, kb = -1;
		while (++kb < jb) {
			ib(hb[kb]);
		}
	}

	X.Z = Z;
	X.ab = ab;
	X.bb = bb;
	X.cb = cb;
	X.db = db;
	X.eb = eb;
	X.fb = fb;
	X.gb = gb;
}(TNT.a.W));
mboxUrlBuilder = function (lb, mb) {
	this.lb = lb;
	this.mb = mb;
	this.nb = [];
	this.ob = function (u) {
		return u;
	};
	this.pb = null;
};
mboxUrlBuilder.prototype = {
	constructor: mboxUrlBuilder, addNewParameter: function (qb, _) {
		this.nb.push({name: qb, value: _});
		return this;
	}, addParameterIfAbsent: function (qb, _) {
		if (!_) {
			return;
		}
		for (var rb = 0; rb < this.nb.length; rb++) {
			var sb = this.nb[rb];
			if (sb.name === qb) {
				return this;
			}
		}
		this.checkInvalidCharacters(qb);
		return this.addNewParameter(qb, _);
	}, addParameter: function (qb, _) {
		this.checkInvalidCharacters(qb);
		for (var rb = 0; rb < this.nb.length; rb++) {
			var sb = this.nb[rb];
			if (sb.name === qb) {
				sb.value = _;
				return this;
			}
		}
		return this.addNewParameter(qb, _);
	}, addParameters: function (nb) {
		if (!nb) {
			return this;
		}
		for (var rb = 0; rb < nb.length; rb++) {
			var tb = nb[rb];
			var ub = tb.indexOf('=');
			if (ub === -1 || ub === 0) {
				continue;
			}
			this.addParameter(tb.substring(0, ub), tb.substring(ub + 1, tb.length));
		}
		return this;
	}, setServerType: function (vb) {
		this.wb = vb;
	}, setBasePath: function (pb) {
		this.pb = pb;
	}, setUrlProcessAction: function (xb) {
		this.ob = xb;
	}, buildUrl: function () {
		var yb = TNT.a.b.secureOnly, zb = yb ? 'https:' : '', Ab = TNT.a.Bb(this.lb), Cb = this.pb ? this.pb : '/m2/' + this.mb + '/mbox/' + this.wb, u = zb + '//' + Ab + Cb,
			Db = [];
		for (var rb = 0; rb < this.nb.length; rb++) {
			var sb = this.nb[rb];
			Db.push(encodeURIComponent(sb.name) + '=' + encodeURIComponent(sb.value));
		}
		u += u.indexOf('?') != -1 ? '&' + Db.join('&') : '?' + Db.join('&');
		return this.Eb(this.ob(u));
	}, getParameters: function () {
		return this.nb;
	}, setParameters: function (nb) {
		this.nb = nb;
	}, clone: function () {
		var Fb = new mboxUrlBuilder(this.lb, this.mb);
		Fb.setServerType(this.wb);
		Fb.setBasePath(this.pb);
		Fb.setUrlProcessAction(this.ob);
		for (var rb = 0; rb < this.nb.length; rb++) {
			Fb.addParameter(this.nb[rb].name, this.nb[rb].value);
		}
		return Fb;
	}, Eb: function (Gb) {
		return Gb.replace(/\"/g, '&quot;').replace(/>/g, '&gt;');
	}, checkInvalidCharacters: function (qb) {
		var Hb = new RegExp('(\'|")');
		if (Hb.exec(qb)) {
			throw "Parameter '" + qb + "' contains invalid characters";
		}
	}
};
TNT.a.Ib = function () {
	var Jb = [], Kb = 0, Lb = [];

	function Mb(Nb, Ob) {
		Kb += 1;
		Jb[Nb] = Ob;
		Pb();
	}

	function Pb() {
		var jb = Lb.length, kb = -1, Qb;
		if (Kb !== Jb.length || !Lb.length) {
			return;
		}
		while (++kb < jb) {
			Qb = Lb[kb];
			Qb.fn.apply(Qb.ctx, Jb);
		}
	}

	return {
		Rb: function () {
			var Nb = Jb.length;
			Jb[Jb.length] = null;
			return function () {
				Mb(Nb, [].slice.call(arguments));
			};
		}, Sb: function (cb, context) {
			Lb.push({fn: cb, ctx: context});
			Pb();
		}
	};
};
(function (X, W, c, b, Tb) {
	var Ub = new RegExp("\\|MCMID\\|"), Vb = 'vst.', Wb = Vb + 'trk', Xb = Vb + 'trks';

	function Yb(Zb, _) {
		return encodeURIComponent(Zb) + '=' + encodeURIComponent(_);
	}

	function _b(ac) {
		var bc, cc = function (Zb) {
			return Vb + Zb;
		};
		if (!W.cb(ac.getCustomerIDs)) {
			return [];
		}
		bc = ac.getCustomerIDs();
		if (!W.fb(bc)) {
			return [];
		}
		return X.dc(bc, [], cc);
	}

	function ec(ac, fc) {
		var gc = ac.trackingServer, hc = ac.trackingServerSecure;
		if (gc) {
			fc.push(Yb(Wb, gc));
		}
		if (hc) {
			fc.push(Yb(Xb, hc));
		}
	}

	function ic(ac, fc) {
		fc.push.apply(fc, _b(ac));
	}

	function jc(Ob) {
		var fc = [];
		W.gb(Ob, function (hb) {
			fc.push(hb[0]);
		});
		return fc;
	}

	function kc(lc) {
		return !W.bb(lc.value);
	}

	function mc(Ib, ac, nc, Zb) {
		var oc;
		if (!W.cb(ac[nc])) {
			return;
		}
		oc = Ib.Rb();
		ac[nc](function (_) {
			oc({key: Zb, value: _});
		}, true);
	}

	function pc(Ib, ac, qc) {
		qc(Ib, ac, 'getMarketingCloudVisitorID', c.e);
		qc(Ib, ac, 'getAudienceManagerBlob', c.g);
		qc(Ib, ac, 'getAnalyticsVisitorID', c.h);
		qc(Ib, ac, 'getAudienceManagerLocationHint', c.f);
	}

	function rc(Ib, ac, sc, tc, uc) {
		if (tc) {
			window.clearTimeout(sc.id);
			uc({optout: tc, params: []});
			vc();
			return;
		}
		pc(Ib, ac, mc);
		Ib.Sb(function () {
			if (sc.done) {
				return;
			}
			var c = jc([].slice.call(arguments)), fc = [];
			window.clearTimeout(sc.id);
			W.gb(c, function (lc) {
				if (kc(lc)) {
					fc.push(Yb(lc.key, lc.value));
				}
			});
			ic(ac, fc);
			ec(ac, fc);
			uc({optout: tc, params: fc});
			vc();
		});
	}

	function wc(xc) {
		var ac;
		if (W.bb(xc) || W.Z(window.Visitor) || !W.cb(window.Visitor.getInstance)) {
			return null;
		}
		ac = window.Visitor.getInstance(xc);
		if (W.Z(ac) || W.ab(ac) || !ac.isAllowed()) {
			return null;
		}
		return ac;
	}

	function yc() {
		return !W.ab(wc(b.imsOrgId));
	}

	function zc() {
		var ac = wc(b.imsOrgId);
		if (W.ab(ac)) {
			return false;
		}
		if (W.Z(ac.cookieName)) {
			return false;
		}
		if (!W.cb(ac.cookieRead)) {
			return false;
		}
		var Ac = ac.cookieRead(ac.cookieName);
		if (W.bb(Ac)) {
			return false;
		}
		return Ub.test(Ac);
	}

	function Bc(ac, Cc) {
		return Cc && W.cb(ac.isOptedOut) && !W.Z(window.Visitor.OptOut);
	}

	function Dc(Cc, uc) {
		var xc = b.imsOrgId, Ec = b.visitorApiTimeout, Ib = Tb(), sc = {id: NaN, done: false}, ac;
		ac = wc(xc);
		if (W.ab(ac)) {
			uc(null);
			return;
		}
		Fc();
		sc.id = window.setTimeout(function () {
			sc.done = true;
			uc(null);
			vc();
		}, Ec);
		if (Bc(ac, Cc)) {
			ac.isOptedOut(function (tc) {
				rc(Ib, ac, sc, tc, uc);
			}, window.Visitor.OptOut.GLOBAL, true);
		} else {
			rc(Ib, ac, sc, false, uc);
		}
	}

	function Gc(ac, nc, Zb, Hc) {
		if (ac[nc]) {
			var _ = ac[nc]();
			if (_) {
				Hc.push(Yb(Zb, _));
			}
		}
	}

	function Ic() {
		var ac = wc(b.imsOrgId), fc = [];
		Gc(ac, 'getMarketingCloudVisitorID', c.e, fc);
		Gc(ac, 'getAudienceManagerBlob', c.g, fc);
		Gc(ac, 'getAnalyticsVisitorID', c.h, fc);
		Gc(ac, 'getAudienceManagerLocationHint', c.f, fc);
		ic(ac, fc);
		ec(ac, fc);
		return fc;
	}

	function Jc(x) {
		var xc = b.imsOrgId, mb = b.clientCode, ac = wc(xc);
		if (W.ab(ac) || !W.cb(ac.getSupplementalDataID)) {
			return '';
		}
		return ac.getSupplementalDataID('mbox:' + mb + ':' + x);
	}

	function Fc() {
		if (!b.bodyHidingEnabled) {
			return;
		}
		if (!b.globalMboxAutoCreate) {
			return
		}
		var Kc = document.getElementsByTagName('head')[0];
		var Lc = document.createElement('style');
		Lc.type = 'text/css';
		Lc.id = 'at-id-body-style';
		if (Lc.styleSheet) {
			Lc.styleSheet.cssText = css;
		} else {
			Lc.appendChild(document.createTextNode(b.bodyHiddenStyle));
		}
		if (Kc) {
			Kc.appendChild(Lc);
		}
	}

	function vc() {
		if (!b.bodyHidingEnabled) {
			return;
		}
		if (!b.globalMboxAutoCreate) {
			return
		}
		window.setTimeout(function () {
			var Kc = document.getElementsByTagName('head')[0];
			var Lc = document.getElementById('at-id-body-style');
			if (Kc && Lc) {
				Kc.removeChild(Lc);
			}
		}, b.visitorApiPageDisplayTimeout);
	}

	X.yc = yc;
	X.zc = zc;
	X.Dc = Dc;
	X.Ic = Ic;
	X.Jc = Jc;
}(TNT.a, TNT.a.W, TNT.a.c, TNT.a.b, TNT.a.Ib));
mboxStandardFetcher = function () {
};
mboxStandardFetcher.prototype = {
	constructor: mboxStandardFetcher, getType: function () {
		return 'standard';
	}, fetch: function (Mc) {
		Mc.setServerType(this.getType());
		document.write('<' + 'scr' + 'ipt src="' + Mc.buildUrl() + '"><' + '\/scr' + 'ipt>');
	}, cancel: function () {
	}
};
mboxAjaxFetcher = function () {
};
mboxAjaxFetcher.prototype = {
	constructor: mboxAjaxFetcher, getType: function () {
		return 'ajax';
	}, fetch: function (Mc) {
		Mc.setServerType(this.getType());
		var Kc = document.getElementsByTagName('head')[0], Nc = document.createElement('script');
		Nc.src = Mc.buildUrl();
		Kc.appendChild(Nc);
	}, cancel: function () {
	}
};
(function (X) {
	function Oc() {
	}

	Oc.prototype = {
		constructor: Oc, getType: function () {
			return 'ajax';
		}, fetch: function (Mc) {
			Mc.setServerType(this.getType());
			document.write('<' + 'scr' + 'ipt src="' + Mc.buildUrl() + '"><' + '\/scr' + 'ipt>');
		}, cancel: function () {
		}
	};
	X.Oc = Oc;
}(TNT.a));
mboxMap = function () {
	this.Pc = {};
	this.Qc = [];
};
mboxMap.prototype = {
	constructor: mboxMap, put: function (Zb, _) {
		if (!this.Pc[Zb]) {
			this.Qc[this.Qc.length] = Zb;
		}
		this.Pc[Zb] = _;
	}, get: function (Zb) {
		return this.Pc[Zb];
	}, remove: function (Zb) {
		var Rc = [];
		this.Pc[Zb] = undefined;
		for (var i = 0; i < this.Qc.length; i++) {
			if (this.Qc[i] !== Zb) {
				Rc.push(this.Qc[i]);
			}
		}
		this.Qc = Rc;
	}, each: function (xb) {
		for (var rb = 0; rb < this.Qc.length; rb++) {
			var Zb = this.Qc[rb];
			var _ = this.Pc[Zb];
			if (_) {
				var fc = xb(Zb, _);
				if (fc === false) {
					break;
				}
			}
		}
	}, isEmpty: function () {
		return this.Qc.length === 0;
	}
};
mboxList = function () {
	this.Sc = [];
};
mboxList.prototype = {
	constructor: mboxList, add: function (Tc) {
		if (!Tc) {
			return;
		}
		this.Sc.push(Tc);
	}, get: function (x) {
		var fc = new mboxList();
		for (var rb = 0; rb < this.Sc.length; rb++) {
			var Tc = this.Sc[rb];
			if (Tc.getName() === x) {
				fc.add(Tc);
			}
		}
		return fc;
	}, getById: function (Nb) {
		return this.Sc[Nb];
	}, length: function () {
		return this.Sc.length;
	}, each: function (xb) {
		var W = TNT.a.W;
		if (!W.cb(xb)) {
			throw 'Action must be a function, was: ' + typeof(xb);
		}
		for (var rb = 0; rb < this.Sc.length; rb++) {
			xb(this.Sc[rb]);
		}
	}
};
mboxSignaler = function (Uc) {
	this.Uc = Uc;
};
mboxSignaler.prototype = {
	constructor: mboxSignaler, signal: function (Vc, x) {
		if (!this.Uc.isEnabled()) {
			return;
		}
		var Wc = mboxSignaler.Xc(), Yc = this.Zc(this.Uc._c(x));
		Wc.appendChild(Yc);
		var Ob = [].slice.call(arguments, 1), Tc = this.Uc.create(x, Ob, Yc), Mc = Tc.getUrlBuilder();
		Mc.addParameter(TNT.a.c.d, mboxGenerateId());
		Tc.setFetcher(new mboxAjaxFetcher());
		Tc.load();
	}, Zc: function (ad) {
		var fc = document.createElement('div');
		fc.id = ad;
		fc.style.visibility = 'hidden';
		fc.style.display = 'none';
		return fc;
	}
};
mboxSignaler.Xc = function () {
	return document.body;
};
mboxLocatorDefault = function (bd) {
	this.bd = bd;
	document.write('<div id="' + this.bd + '" style="visibility:hidden;display:none">&nbsp;<\/div>');
};
mboxLocatorDefault.prototype = {
	constructor: mboxLocatorDefault, locate: function () {
		var cd = 1, dd = document.getElementById(this.bd);
		while (dd) {
			if (dd.nodeType === cd && dd.className && dd.className.indexOf('mboxDefault') !== -1) {
				return dd;
			}
			dd = dd.previousSibling;
		}
		return null;
	}, force: function () {
		var ed = document.getElementById(this.bd), fd = document.createElement('div');
		fd.className = 'mboxDefault';
		if (ed) {
			ed.parentNode.insertBefore(fd, ed);
		}
		return fd;
	}
};
mboxLocatorNode = function (dd) {
	this.dd = dd;
};
mboxLocatorNode.prototype = {
	constructor: mboxLocatorNode, locate: function () {
		return typeof(this.dd) === 'string' ? document.getElementById(this.dd) : this.dd;
	}, force: function () {
		return null;
	}
};
mboxOfferContent = function () {
	this.gd = function () {
	};
};
mboxOfferContent.prototype = {
	constructor: mboxOfferContent, show: function (Tc) {
		var fc = Tc.showContent(document.getElementById(Tc.getImportName()));
		if (fc === 1) {
			this.gd();
		}
		return fc;
	}, setOnLoad: function (gd) {
		this.gd = gd;
	}
};
mboxOfferAjax = function (hd) {
	this.hd = hd;
	this.gd = function () {
	};
};
mboxOfferAjax.prototype = {
	constructor: mboxOfferAjax, setOnLoad: function (gd) {
		this.gd = gd;
	}, show: function (Tc) {
		var id = document.createElement('div'), fc;
		id.id = Tc.getImportName();
		id.innerHTML = this.hd;
		fc = Tc.showContent(id);
		if (fc === 1) {
			this.gd();
		}
		return fc;
	}
};
mboxOfferDefault = function () {
	this.gd = function () {
	};
};
mboxOfferDefault.prototype = {
	constructor: mboxOfferDefault, show: function (Tc) {
		var fc = Tc.hide();
		if (fc === 1) {
			this.gd();
		}
		return fc;
	}, setOnLoad: function (gd) {
		this.gd = gd;
	}
};
mboxCookieManager = function (qb, jd) {
	this.qb = qb;
	this.kd = TNT.a.H.J;
	this.ld = TNT.a.b.crossDomainXOnly;
	this.md = TNT.a.H.D;
	this.nd = TNT.a.b.usePersistentCookies;
	this.od = new mboxMap();
	this.jd = jd === '' || jd.indexOf('.') === -1 ? '' : '; domain=' + jd;
	this.loadCookies();
};
mboxCookieManager.prototype = {
	constructor: mboxCookieManager, isEnabled: function () {
		this.setCookie(this.kd, 'true', 60);
		this.loadCookies();
		return this.getCookie(this.kd) == 'true';
	}, setCookie: function (qb, _, pd) {
		if (typeof qb == 'undefined' || typeof _ == 'undefined' || typeof pd == 'undefined') {
			return;
		}
		var qd = Math.ceil(pd + new Date().getTime() / 1000), rd = mboxCookieManager.sd(qb, encodeURIComponent(_), qd);
		this.od.put(qb, rd);
		this.saveCookies();
	}, getCookie: function (qb) {
		var rd = this.od.get(qb);
		return rd ? decodeURIComponent(rd.value) : null;
	}, deleteCookie: function (qb) {
		this.od.remove(qb);
		this.saveCookies();
	}, getCookieNames: function (td) {
		var ud = [];
		this.od.each(function (qb, rd) {
			if (qb.indexOf(td) === 0) {
				ud[ud.length] = qb;
			}
		});
		return ud;
	}, saveCookies: function () {
		var vd = this, wd = [], xd = 0;
		this.od.each(function (qb, rd) {
			if (!vd.ld || qb === vd.md) {
				wd[wd.length] = mboxCookieManager.yd(rd);
				if (xd < rd.expireOn) {
					xd = rd.expireOn;
				}
			}
		});
		var zd = new Date(xd * 1000);
		var Db = [];
		Db.push(this.qb, '=', wd.join('|'));
		if (vd.nd) {
			Db.push('; expires=', zd.toGMTString());
		}
		Db.push('; path=/', this.jd);
		document.cookie = Db.join("");
	}, loadCookies: function () {
		var Ad = mboxCookieManager.Bd(this.qb), Cd = mboxCookieManager.Dd(Ad), Ed = Math.ceil(new Date().getTime() / 1000);
		this.od = new mboxMap();
		for (var rb = 0; rb < Cd.length; rb++) {
			var rd = mboxCookieManager.Fd(Cd[rb]);
			if (Ed > rd.expireOn) {
				continue;
			}
			this.od.put(rd.name, rd);
		}
	}
};
mboxCookieManager.yd = function (rd) {
	return rd.name + '#' + rd.value + '#' + rd.expireOn;
};
mboxCookieManager.Fd = function (Y) {
	var Db = Y.split('#');
	return mboxCookieManager.sd(Db[0], Db[1], Db[2]);
};
mboxCookieManager.sd = function (qb, _, qd) {
	return {name: qb, value: _, expireOn: qd};
};
mboxCookieManager.Bd = function (qb) {
	var result = new RegExp('(^|; )' + encodeURIComponent(qb) + '=([^;]*)').exec(document.cookie);
	return result ? result[2] : null;
};
mboxCookieManager.Dd = function (Y) {
	if (!Y) {
		return [];
	}
	return Y.split('|');
};
mboxSession = function (Gd, Hd, Id, Jd, Kd) {
	var Ld = window.mboxForceSessionId;
	this.Id = Id;
	this.Jd = Jd;
	this.Kd = Kd;
	this.ad = typeof(Ld) !== 'undefined' ? Ld : mboxGetPageParameter(Hd, true);
	this.ad = this.ad || Kd.getCookie(Id) || Gd;
	this.Kd.setCookie(Id, this.ad, Jd);
};
mboxSession.prototype = {
	constructor: mboxSession, getId: function () {
		return this.ad;
	}, forceId: function (Md) {
		this.ad = Md;
		this.Kd.setCookie(this.Id, this.ad, this.Jd);
	}
};
mboxPC = function (Id, Jd, Kd) {
	var Nd = window.mboxForcePCId;
	this.Id = Id;
	this.Jd = Jd;
	this.Kd = Kd;
	this.ad = typeof(Nd) != 'undefined' ? Nd : Kd.getCookie(Id);
	if (this.ad) {
		Kd.setCookie(Id, this.ad, Jd);
	}
};
mboxPC.prototype = {
	constructor: mboxPC, getId: function () {
		return this.ad;
	}, forceId: function (Md) {
		if (this.ad === Md) {
			return false;
		}
		this.ad = Md;
		this.Kd.setCookie(this.Id, this.ad, this.Jd);
		return true;
	}
};
(function (X, W, H, b, M) {
	var Od = new RegExp(".*\\.(\\d+)_\\d+");

	function Bb(Qd) {
		var Rd = Od.exec(Qd);
		if (Rd && Rd.length === 2) {
			return M.U + Rd[1] + '.' + M.V;
		}
		return '';
	}

	function Sd(Kd, Td) {
		var Ab = Bb(Td);
		if (!W.bb(Ab)) {
			Kd.setCookie(H.L, Ab, b.overrideMboxEdgeServerTimeout);
		}
	}

	function Ud(Vd, Kd) {
		this.Vd = Vd;
		this.Kd = Kd;
		Sd(Kd, Vd.getId());
	}

	Ud.prototype = {
		constructor: Ud, getId: function () {
			return this.Vd.getId();
		}, forceId: function (Md) {
			if (!this.Vd.forceId(Md)) {
				return false;
			}
			Sd(this.Kd, Md);
			return true;
		}
	};
	X.Ud = Ud;
}(TNT.a, TNT.a.W, TNT.a.H, TNT.a.b, TNT.a.M));
mboxGetPageParameter = function (qb, Wd) {
	Wd = Wd || false;
	var Xd;
	if (Wd) {
		Xd = new RegExp("\\?[^#]*" + qb + "=([^\&;#]*)", "i");
	} else {
		Xd = new RegExp("\\?[^#]*" + qb + "=([^\&;#]*)");
	}
	var fc = null;
	var Yd = Xd.exec(document.location);
	if (Yd && Yd.length >= 2) {
		fc = Yd[1];
	}
	return fc;
};
mboxCookiePageDomain = function () {
	var jd = (/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
	var Zd = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
	if (!Zd.exec(jd)) {
		var _d = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(jd);
		if (_d) {
			jd = _d[0];
			if (jd.indexOf("www.") === 0) {
				jd = jd.substr(4);
			}
		}
	}
	return jd ? jd : "";
};
mboxShiftArray = function (ae) {
	var fc = [];
	for (var rb = 1; rb < ae.length; rb++) {
		fc[fc.length] = ae[rb];
	}
	return fc;
};
mboxGenerateId = function () {
	var s = [], hex = '0123456789abcdef';
	for (var i = 0; i < 36; i++) {
		s[i] = hex.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = '4';
	s[19] = hex.substr((s[19] & 0x3) | 0x8, 1);
	s[8] = s[13] = s[18] = s[23] = '-';
	return s.join('').replace(/-/g, '');
};
mboxScreenHeight = function () {
	return screen.height;
};
mboxScreenWidth = function () {
	return screen.width;
};
mboxBrowserWidth = function () {
	return (window.innerWidth) ? window.innerWidth : document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
};
mboxBrowserHeight = function () {
	return (window.innerHeight) ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
};
mboxBrowserTimeOffset = function () {
	return -new Date().getTimezoneOffset();
};
mboxScreenColorDepth = function () {
	return screen.pixelDepth;
};
mbox = function (qb, ad, Mc, be, ce, Uc) {
	this.de = null;
	this.ee = 0;
	this.fe = be;
	this.ce = ce;
	this.ge = null;
	this.he = new mboxOfferContent();
	this.fd = null;
	this.Mc = Mc;
	this.message = '';
	this.ie = {};
	this.je = 0;
	this.ke = 5;
	this.ad = ad;
	this.qb = qb;
	this.le();
	Mc.addParameter(TNT.a.c.x, qb);
	Mc.addParameter(TNT.a.c.y, ad);
	this.me = function () {
	};
	this.gd = function () {
	};
	this.ne = null;
	this.oe = document.documentMode >= 10 && !Uc.isDomLoaded();
	if (this.oe) {
		this.pe = TNT.a.nestedMboxes;
		this.pe.push(this.qb);
	}
};
mbox.prototype.getId = function () {
	return this.ad;
};
mbox.prototype.le = function () {
	var maxLength = TNT.a.M.T;
	if (this.qb.length > maxLength) {
		throw "Mbox Name " + this.qb + " exceeds max length of " + maxLength + " characters.";
	} else if (this.qb.match(/^\s+|\s+$/g)) {
		throw "Mbox Name " + this.qb + " has leading/trailing whitespace(s).";
	}
};
mbox.prototype.getName = function () {
	return this.qb;
};
mbox.prototype.getParameters = function () {
	var nb = this.Mc.getParameters();
	var fc = [];
	for (var rb = 0; rb < nb.length; rb++) {
		if (nb[rb].name.indexOf('mbox') !== 0) {
			fc[fc.length] = nb[rb].name + '=' + nb[rb].value;
		}
	}
	return fc;
};
mbox.prototype.setOnLoad = function (xb) {
	this.gd = xb;
	return this;
};
mbox.prototype.setMessage = function (qe) {
	this.message = qe;
	return this;
};
mbox.prototype.setOnError = function (me) {
	this.me = me;
	return this;
};
mbox.prototype.setFetcher = function (re) {
	if (this.ge) {
		this.ge.cancel();
	}
	this.ge = re;
	return this;
};
mbox.prototype.getFetcher = function () {
	return this.ge;
};
function se(Mc, Tc) {
	var te = TNT.a, b = te.b, ue = b.mboxTimeout;
	if (te.yc() && te.zc()) {
		Mc.addParameters(te.Ic());
	}
	Tc.ge.fetch(Mc);
	Tc.ve = setTimeout(function () {
		Tc.me('browser timeout', Tc.ge.getType());
	}, ue);
}
function we(Tc) {
	var ne = Tc.getDefaultDiv();
	if (ne) {
		Tc.xe(Tc.getDefaultDiv());
	}
}
function ye(Mc, Tc, Cc) {
	var te = TNT.a;
	Tc.setFetcher(new mboxAjaxFetcher());
	te.Dc(Cc, function (ze) {
		if (ze === null) {
			se(Mc, Tc);
			return;
		}
		if (Cc && ze.optout) {
			we(Tc);
			return;
		}
		Mc.addParameters(ze.params);
		se(Mc, Tc);
	});
}
mbox.prototype.load = function (nb) {
	var vd = this, Mc = vd.Mc, te = TNT.a, b = te.b, Cc = b.optoutEnabled;
	if (vd.ge === null) {
		return vd;
	}
	vd.cancelTimeout();
	vd.ee = 0;
	if (nb && nb.length > 0) {
		Mc = vd.Mc.clone().addParameters(nb);
	}
	if (Cc && te.yc()) {
		ye(Mc, vd, Cc);
		return vd;
	}
	var yc = te.yc();
	if (yc && !te.zc()) {
		ye(Mc, vd, false);
		return vd;
	}
	se(Mc, vd);
	return vd;
};
mbox.prototype.loaded = function () {
	this.cancelTimeout();
	if (!this.activate() && this.je < this.ke) {
		var vd = this;
		setTimeout(function () {
			vd.loaded();
		}, TNT.a.b.mboxLoadedTimeout);
	}
};
mbox.prototype.activate = function () {
	if (this.ee) {
		return this.ee;
	}
	if (this.oe && this.pe[this.pe.length - 1] !== this.qb) {
		return this.ee;
	}
	if (this.show()) {
		this.cancelTimeout();
		this.ee = 1;
	}
	if (this.oe) {
		this.pe.pop();
	}
	return this.ee;
};
mbox.prototype.isActivated = function () {
	return this.ee;
};
mbox.prototype.setOffer = function (he) {
	var Ae = he && he.show && he.setOnLoad;
	if (!Ae) {
		throw 'Invalid offer';
	}
	var Be = TNT.a.b.globalMboxName === this.qb;
	Be = Be && he instanceof mboxOfferDefault;
	Be = Be && this.ge !== null;
	Be = Be && this.ge.getType() === 'ajax';
	if (!Be) {
		this.he = he;
		return this;
	}
	var Ce = this.he.gd;
	this.he = he;
	this.he.setOnLoad(Ce);
	return this;
};
mbox.prototype.getOffer = function () {
	return this.he;
};
mbox.prototype.show = function () {
	return this.he.show(this);
};
mbox.prototype.showContent = function (hd) {
	if (!mbox.De(hd)) {
		return 0;
	}
	this.fd = mbox.Ee(this, this.fd);
	if (this.fd === null) {
		return 0;
	}
	if (!mbox.Fe(document.body, this.fd)) {
		return 0;
	}
	if (this.fd === hd) {
		this.xe(this.fd);
		this.gd();
		return 1;
	}
	this.Ge(this.fd);
	this.Ge(hd);
	mbox.He(this, hd);
	this.xe(this.fd);
	this.gd();
	return 1;
};
mbox.De = function (hd) {
	return hd !== undefined && hd !== null;
};
mbox.Fe = function (Ie, Je) {
	var DOCUMENT_POSITION_CONTAINED_BY = 16;
	var Ke = Ie.contains !== undefined;
	if (Ke) {
		return Ie !== Je && Ie.contains(Je);
	} else {
		return Boolean(Ie.compareDocumentPosition(Je) & DOCUMENT_POSITION_CONTAINED_BY);
	}
};
mbox.Ee = function (Tc, fd) {
	if (fd !== undefined && fd !== null && mbox.Fe(document.body, fd)) {
		return fd;
	}
	return Tc.getDefaultDiv();
};
mbox.He = function (Tc, Le) {
	Tc.fd.parentNode.replaceChild(Le, Tc.fd);
	Tc.fd = Le;
};
mbox.prototype.hide = function () {
	return this.showContent(this.getDefaultDiv());
};
mbox.prototype.finalize = function () {
	if (!this.getDefaultDiv()) {
		this.fe.force();
	}
	if (!this.getDiv()) {
		this.fd = mbox.Ee(this, this.fd);
	}
	this.Me();
	this.setFetcher(new mboxAjaxFetcher());
	this.cancelTimeout();
	this.gd();
};
mbox.prototype.cancelTimeout = function () {
	if (this.ve) {
		clearTimeout(this.ve);
	}
	if (this.ge) {
		this.ge.cancel();
	}
};
mbox.prototype.getDiv = function () {
	return this.fd;
};
mbox.prototype.getDefaultDiv = function () {
	if (this.ne === null) {
		this.ne = this.fe.locate();
	}
	return this.ne;
};
mbox.prototype.setEventTime = function (Ne) {
	this.ie[Ne] = (new Date()).getTime();
};
mbox.prototype.getEventTimes = function () {
	return this.ie;
};
mbox.prototype.getImportName = function () {
	return this.ce;
};
mbox.prototype.getURL = function () {
	return this.Mc.buildUrl();
};
mbox.prototype.getUrlBuilder = function () {
	return this.Mc;
};
mbox.prototype.Oe = function (fd) {
	return fd.style.display != 'none';
};
mbox.prototype.xe = function (fd) {
	this.Pe(fd, true);
};
mbox.prototype.Ge = function (fd) {
	this.Pe(fd, false);
};
mbox.prototype.Pe = function (fd, Qe) {
	fd.style.visibility = Qe ? "visible" : "hidden";
	fd.style.display = Qe ? "block" : "none";
};
mbox.prototype.Me = function () {
	this.oe = false;
};
mbox.prototype.relocateDefaultDiv = function () {
	this.ne = this.fe.locate();
};
function Re(Uc) {
	Uc.getMboxes().each(function (Tc) {
		Tc.finalize();
	});
}
mboxFactory = function (Ab, mb, Se) {
	var te = TNT.a;
	var b = te.b;
	var W = te.W;
	var H = te.H;
	var C = te.C;
	var M = te.M;
	var Te = b.mboxVersion;
	this.Ue = false;
	this.Se = Se;
	this.Sc = new mboxList();
	mboxFactories.put(Se, this);
	this.Ve = b.mboxIsSupportedFunction() && typeof (window.attachEvent || document.addEventListener || window.addEventListener) != 'undefined';
	this.We = this.Ve && mboxGetPageParameter(C.D, true) === null;
	var Xe = Se == M.N;
	var Id = M.O + (Xe ? '' : ('-' + Se));
	this.Kd = new mboxCookieManager(Id, b.cookieDomainFunction());
	if (!b.crossDomainXOnly) {
		this.We = this.We && this.Kd.isEnabled();
	}
	this.We = this.We && W.ab(this.Kd.getCookie(H.D)) && W.ab(this.Kd.getCookie(H.K));
	if (this.isAdmin()) {
		this.enable();
	}
	this.Ye();
	this.Ze = mboxGenerateId();
	this._e = mboxScreenHeight();
	this.af = mboxScreenWidth();
	this.bf = mboxBrowserWidth();
	this.cf = mboxBrowserHeight();
	this.df = mboxScreenColorDepth();
	this.ef = mboxBrowserTimeOffset();
	this.ff = new mboxSession(this.Ze, C.E, H.E, b.sessionExpirationTimeout, this.Kd);
	var Vd = new mboxPC(H.m, b.tntIdLifetime, this.Kd);
	this.gf = b.overrideMboxEdgeServer ? new te.Ud(Vd, this.Kd) : Vd;
	this.Mc = new mboxUrlBuilder(Ab, mb);
	this.hf(this.Mc, Xe, Te);
	this.jf = new Date().getTime();
	this.kf = this.jf;
	var vd = this;
	this.addOnLoad(function () {
		vd.kf = new Date().getTime();
	});
	if (this.Ve) {
		this.addOnLoad(function () {
			vd.Ue = true;
			Re(vd);
			TNT.a.nestedMboxes = [];
		});
		if (this.We) {
			this.limitTraffic(b.trafficLevelPercentage, b.trafficDuration);
			this.lf();
			this.mf = new mboxSignaler(this);
		} else {
			if (!b.isProduction) {
				if (this.isAdmin()) {
					if (!this.isEnabled()) {
						alert("mbox disabled, probably due to timeout\n" + "Reset your cookies to re-enable\n(this message will only appear in administrative mode)");
					} else {
						alert("It looks like your browser will not allow " + b.companyName + " to set its administrative cookie. To allow setting the" + " cookie please lower the privacy settings of your browser.\n" + "(this message will only appear in administrative mode)");
					}
				}
			}
		}
	}
};
mboxFactory.prototype.forcePCId = function (Md) {
	if (!TNT.a.b.clientTntIdSupport) {
		return;
	}
	if (this.gf.forceId(Md)) {
		this.ff.forceId(mboxGenerateId());
	}
};
mboxFactory.prototype.forceSessionId = function (Md) {
	if (!TNT.a.b.clientSessionIdSupport) {
		return;
	}
	this.ff.forceId(Md);
};
mboxFactory.prototype.isEnabled = function () {
	return this.We;
};
mboxFactory.prototype.getDisableReason = function () {
	return this.Kd.getCookie(TNT.a.H.D);
};
mboxFactory.prototype.isSupported = function () {
	return this.Ve;
};
mboxFactory.prototype.disable = function (pd, nf) {
	if (typeof pd == 'undefined') {
		pd = 60 * 60;
	}
	if (typeof nf == 'undefined') {
		nf = 'unspecified';
	}
	if (!this.isAdmin()) {
		this.We = false;
		this.Kd.setCookie(TNT.a.H.D, nf, pd);
	}
};
mboxFactory.prototype.enable = function () {
	this.We = true;
	this.Kd.deleteCookie(TNT.a.H.D);
};
mboxFactory.prototype.isAdmin = function () {
	return document.location.href.indexOf(TNT.a.C.F) != -1;
};
mboxFactory.prototype.limitTraffic = function (of, pd) {
	if (TNT.a.b.trafficLevelPercentage != 100) {
		if (of == 100) {
			return;
		}
		var pf = true;
		if (parseInt(this.Kd.getCookie(TNT.a.H.I)) != of) {
			pf = (Math.random() * 100) <= of;
		}
		this.Kd.setCookie(TNT.a.H.I, of, pd);
		if (!pf) {
			this.disable(60 * 60, 'limited by traffic');
		}
	}
};
mboxFactory.prototype.addOnLoad = function (qf) {
	if (this.isDomLoaded()) {
		qf();
	} else {
		var rf = false;
		var sf = function () {
			if (rf) {
				return;
			}
			rf = true;
			qf();
		};
		this.tf.push(sf);
		if (this.isDomLoaded() && !rf) {
			sf();
		}
	}
};
mboxFactory.prototype.getEllapsedTime = function () {
	return this.kf - this.jf;
};
mboxFactory.prototype.getEllapsedTimeUntil = function (A) {
	return A - this.jf;
};
mboxFactory.prototype.getMboxes = function () {
	return this.Sc;
};
mboxFactory.prototype.get = function (x, y) {
	return this.Sc.get(x).getById(y || 0);
};
mboxFactory.prototype.update = function (x, nb) {
	var te = TNT.a, c = te.c;
	if (!this.isEnabled()) {
		return;
	}
	var vd = this;
	if (!this.isDomLoaded()) {
		this.addOnLoad(function () {
			vd.update(x, nb);
		});
		return;
	}
	if (this.Sc.get(x).length() === 0) {
		throw "Mbox " + x + " is not defined";
	}
	this.Sc.get(x).each(function (Tc) {
		var Mc = Tc.getUrlBuilder();
		Mc.addParameter(c.d, mboxGenerateId());
		vd.uf(Mc, x);
		Tc.load(nb);
	});
};
mboxFactory.prototype.setVisitorIdParameters = function (Mc, x) {
	this.uf(Mc, x);
};
mboxFactory.prototype.create = function (x, nb, vf) {
	return this.wf(x, nb, vf);
};
mboxFactory.prototype.xf = function (x, nb, vf) {
	return this.wf(x, nb, vf);
};
mboxFactory.prototype.wf = function (x, nb, vf) {
	if (!this.isSupported()) {
		return null;
	}
	var yf = new Date();
	var A = yf.getTime() - (yf.getTimezoneOffset() * TNT.a.M.Q);
	var Mc = this.Mc.clone();
	Mc.addParameter(TNT.a.c.j, this.Sc.length() + 1);
	Mc.addParameter(TNT.a.c.A, A);
	Mc.addParameters(nb);
	this.uf(Mc, x);
	var y, fe, Tc;
	if (vf) {
		fe = new mboxLocatorNode(vf);
	} else {
		if (this.Ue) {
			throw 'The page has already been loaded, can\'t write marker';
		}
		fe = new mboxLocatorDefault(this._c(x));
	}
	try {
		y = this.Sc.get(x).length();
		Tc = new mbox(x, y, Mc, fe, this.zf(x), this);
		if (this.We) {
			Tc.setFetcher(this.Ue ? new mboxAjaxFetcher() : new mboxStandardFetcher());
		}
		var vd = this;
		Tc.setOnError(function (qe, vb) {
			Tc.setMessage(qe);
			Tc.activate();
			if (!Tc.isActivated()) {
				vd.disable(TNT.a.b.mboxFactoryDisabledTimeout, qe);
				window.location.reload(false);
			}
		});
		this.Sc.add(Tc);
	} catch (Af) {
		this.disable();
		throw 'Failed creating mbox "' + x + '", the error was: ' + Af;
	}
	return Tc;
};
mboxFactory.prototype.Bf = function (Mc) {
	var m = this.gf.getId();
	if (m) {
		Mc.addParameter(TNT.a.c.m, m);
	}
};
mboxFactory.prototype.Cf = function (Mc, x) {
	var Df = !TNT.isAutoCreateGlobalMbox() && TNT.getGlobalMboxName() === x;
	if (Df) {
		Mc.addParameters(TNT.getTargetPageParameters());
	}
};
mboxFactory.prototype.Ef = function (Mc, x) {
	var te = TNT.a, Ff = te.c.i, i = te.Jc(x);
	if (i) {
		Mc.addParameter(Ff, i);
	}
};
mboxFactory.prototype.Gf = function (Mc) {
	var te = TNT.a;
	if (te.yc() && te.zc()) {
		Mc.addParameters(te.Ic());
	}
};
mboxFactory.prototype.uf = function (Mc, x) {
	this.Bf(Mc);
	this.Cf(Mc, x);
	this.Ef(Mc, x);
	this.Gf(Mc, x);
};
mboxFactory.prototype.getCookieManager = function () {
	return this.Kd;
};
mboxFactory.prototype.getPageId = function () {
	return this.Ze;
};
mboxFactory.prototype.getPCId = function () {
	return this.gf;
};
mboxFactory.prototype.getSessionId = function () {
	return this.ff;
};
mboxFactory.prototype.getSignaler = function () {
	return this.mf;
};
mboxFactory.prototype.getUrlBuilder = function () {
	return this.Mc;
};
mboxFactory.prototype.Hf = function (x) {
	return this.Se + '-' + x + '-' + this.Sc.get(x).length();
};
mboxFactory.prototype._c = function (x) {
	return TNT.a.M.S + this.Hf(x);
};
mboxFactory.prototype.zf = function (x) {
	return TNT.a.M.P + this.Hf(x);
};
mboxFactory.prototype.hf = function (Mc, Xe, Te) {
	Mc.addParameter(TNT.a.c.k, document.location.hostname);
	Mc.addParameter(TNT.a.c.d, this.Ze);
	Mc.addParameter(TNT.a.c.n, this._e);
	Mc.addParameter(TNT.a.c.o, this.af);
	Mc.addParameter(TNT.a.c.p, this.bf);
	Mc.addParameter(TNT.a.c.q, this.cf);
	Mc.addParameter(TNT.a.c.r, this.ef);
	Mc.addParameter(TNT.a.c.s, this.df);
	Mc.addParameter(TNT.a.C.E, this.ff.getId());
	if (!Xe) {
		Mc.addParameter(TNT.a.c.l, this.Se);
	}
	if (TNT.a.b.crossDomainEnabled) {
		Mc.addParameter(TNT.a.c.t, TNT.a.b.crossDomain);
	}
	var c = TNT.getClientMboxExtraParameters();
	if (c) {
		Mc.addParameters(c.split('&'));
	}
	Mc.setUrlProcessAction(function (u) {
		if (TNT.a.b.passPageParameters) {
			u += '&';
			u += TNT.a.c.u;
			u += '=' + encodeURIComponent(document.location);
			var v = encodeURIComponent(document.referrer);
			if (u.length + v.length < 2000) {
				u += '&';
				u += TNT.a.c.v;
				u += '=' + v;
			}
		}
		u += '&';
		u += TNT.a.c.w;
		u += '=' + Te;
		return u;
	});
};
mboxFactory.prototype.lf = function () {
	document.write('<style>.' + TNT.a.M.R + ' { visibility:hidden; }</style>');
};
mboxFactory.prototype.isDomLoaded = function () {
	return this.Ue;
};
mboxFactory.prototype.Ye = function () {
	if (this.tf) {
		return;
	}
	this.tf = [];
	var vd = this;
	(function () {
		var If = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange";
		var Jf = false;
		var Kf = function () {
			if (Jf) {
				return;
			}
			Jf = true;
			for (var i = 0; i < vd.tf.length; ++i) {
				vd.tf[i]();
			}
		};
		if (document.addEventListener) {
			document.addEventListener(If, function () {
				document.removeEventListener(If, arguments.callee, false);
				Kf();
			}, false);
			window.addEventListener("load", function () {
				document.removeEventListener("load", arguments.callee, false);
				Kf();
			}, false);
		} else if (document.attachEvent) {
			if (self !== self.top) {
				document.attachEvent(If, function () {
					if (document.readyState === 'complete') {
						document.detachEvent(If, arguments.callee);
						Kf();
					}
				});
			} else {
				var Lf = function () {
					try {
						document.documentElement.doScroll('left');
						Kf();
					} catch (Mf) {
						setTimeout(Lf, 13);
					}
				};
				Lf();
			}
		}
		if (document.readyState === "complete") {
			Kf();
		}
	})();
};
mboxScPluginFetcher = function (mb, Nf) {
	this.mb = mb;
	this.Nf = Nf;
};
mboxScPluginFetcher.prototype = {
	constructor: mboxScPluginFetcher, getType: function () {
		return 'ajax';
	}, fetch: function (Mc) {
		Mc.setServerType(this.getType());
		var Kc = document.getElementsByTagName('head')[0], Nc = document.createElement('script');
		Nc.src = this.Of(Mc);
		Kc.appendChild(Nc);
	}, cancel: function () {
	}, Of: function (Mc) {
		Mc.setBasePath('/m2/' + this.mb + '/sc/standard');
		this.Pf(Mc);
		var Qf = TNT.a.c.B;
		var Rf = TNT.a.M.B;
		Mc.addParameter(Qf, Rf);
		return Mc.buildUrl();
	}, Pf: function (Mc) {
		var Sf = ["dynamicVariablePrefix", "visitorID", "vmk", "ppu", "charSet", "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "pageName", "currencyCode", "variableProvider", "channel", "server", "pageType", "transactionID", "purchaseID", "campaign", "state", "zip", "events", "products", "linkName", "linkType", "resolution", "colorDepth", "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth", "browserHeight", "connectionType", "homepage", "pe", "pev1", "pev2", "pev3", "visitorSampling", "visitorSamplingGroup", "dynamicAccountSelection", "dynamicAccountList", "dynamicAccountMatch", "trackDownloadLinks", "trackExternalLinks", "trackInlineStats", "linkLeaveQueryString", "linkDownloadFileTypes", "linkExternalFilters", "linkInternalFilters", "linkTrackVars", "linkTrackEvents", "linkNames", "lnk", "eo"];
		for (var rb = 0; rb < Sf.length; rb++) {
			this.Tf(Sf[rb], Mc);
		}
		for (rb = 1; rb <= 75; rb++) {
			this.Tf('prop' + rb, Mc);
			this.Tf('eVar' + rb, Mc);
			this.Tf('hier' + rb, Mc);
		}
	}, Tf: function (qb, Mc) {
		var W = TNT.a.W, _ = this.Nf[qb];
		if (W.bb(_) || W.fb(_)) {
			return;
		}
		Mc.addParameter(qb, _);
	}
};
(function (X) {
	function Uf(Uc, Nf) {
		if (!Nf) {
			return null;
		}
		var Vf = TNT.a.b.siteCatalystPluginName, mb = TNT.a.b.clientCode, W = TNT.a.W;
		Nf["m_" + Vf] = function (Nf) {
			var Wf = '_t', Yf = 'm_i', Zf = Nf[Yf](Vf);
			Zf.We = true;
			Zf.mb = mb;
			Zf[Wf] = function () {
				if (!this.isEnabled()) {
					return;
				}
				var Tc = this.wf(), re = new mboxScPluginFetcher(this.mb, this.s);
				if (Tc) {
					Tc.setFetcher(re);
					Tc.load();
				}
			};
			Zf.isEnabled = function () {
				return this.We && Uc.isEnabled();
			};
			Zf.wf = function () {
				var x = this._f(), fd = document.createElement('div');
				if (!W.Z(document.body)) {
					document.body.appendChild(fd);
				}
				return Uc.create(x, [], fd);
			};
			Zf._f = function () {
				var ag = this.s.events && this.s.events.indexOf('purchase') != -1;
				return 'SiteCatalyst: ' + (ag ? 'purchase' : 'event');
			};
		};
		return Nf.loadModule(Vf);
	}

	X.Uf = Uf;
}(TNT.a));
(function (X) {
	function bg(cg, Id, pd, Kd) {
		if (cg.targetJSLoaded) {
			return;
		}
		Kd.setCookie(Id, true, pd);
		//Prevent endless reload loop for users who blocking ...
		if (Kd.getCookie(Id) !== 'true') {
			return;
		}
		window.location.reload();
	}

	function dg(b, H, Kd) {
		var eg = '_AT', gg = 50, Id = H.K, pd = b.experienceManagerDisabledTimeout, de = b.experienceManagerTimeout, u = b.experienceManagerPluginUrl, hg = function (ig) {
		}, jg = function (ig) {
			setTimeout(function () {
				window[eg].applyWhenReady(ig);
			}, gg);
		};
		if (eg in window) {
			return;
		}
		window[eg] = {};
		if (Kd.getCookie(Id) !== 'true') {
			document.write('<scr' + 'ipt src="' + u + '"><\/sc' + 'ript>');
			window[eg].applyWhenReady = jg;
			setTimeout(function () {
				bg(window[eg], Id, pd, Kd);
			}, de);
		} else {
			window[eg].applyWhenReady = hg;
		}
	}

	X.dg = dg;
}(TNT.a));
(function (X, a, W, b, c, M) {
	function kg() {
		return b.globalMboxName;
	}

	function lg() {
		return b.globalMboxLocationDomId;
	}

	function mg() {
		return b.globalMboxAutoCreate;
	}

	function ng() {
		return b.parametersFunction();
	}

	function og() {
		var cd = 1, pg = document.getElementsByTagName('script'), dd = pg[pg.length - 1];
		while (dd) {
			if (dd.nodeType === cd && dd.className === M.R) {
				return dd;
			}
			dd = dd.previousSibling;
		}
		return null;
	}

	function qg(Uc, x, c) {
		var vf, Tc;
		if (a.yc()) {
			vf = og();
			Tc = Uc.create(x, c, vf);
		} else {
			Tc = Uc.create(x, c);
		}
		if (Tc && Uc.isEnabled()) {
			Tc.load();
		}
		return Tc;
	}

	function rg(Uc, vf, x, c) {
		return Uc.xf(x, c, vf);
	}

	function sg(Uc, x, c) {
		Uc.update(x, c);
	}

	function tg(Kd, qb) {
		return Kd.getCookie(qb);
	}

	function ug(Kd, qb, _, pd) {
		Kd.setCookie(qb, _, pd);
	}

	function vg(wg) {
		var fc = [];
		var xg = /([^&=]+)=([^&]*)/g;
		var yg = decodeURIComponent;
		var Rd = xg.exec(wg);
		while (Rd) {
			fc.push([yg(Rd[1]), yg(Rd[2])].join('='));
			Rd = xg.exec(wg);
		}
		return fc;
	}

	function dc(zg, Qc, cc) {
		var fc = [];
		for (var Zb in zg) {
			if (!zg.hasOwnProperty(Zb)) {
				continue;
			}
			var _ = zg[Zb];
			if (W.fb(_)) {
				Qc.push(Zb);
				fc = fc.concat(dc(_, Qc, cc));
				Qc.pop();
			} else {
				if (Qc.length > 0) {
					fc.push([cc(Qc.concat(Zb).join('.')), _].join('='));
				} else {
					fc.push([cc(Zb), _].join('='));
				}
			}
		}
		return fc;
	}

	function Ag() {
		var Bg = window.targetPageParams, cc = function (Zb) {
			return Zb
		};
		if (!W.cb(Bg)) {
			return [];
		}
		var fc = null;
		try {
			fc = Bg();
		} catch (Cg) {
		}
		if (W.ab(fc)) {
			return [];
		}
		if (W.db(fc)) {
			return fc;
		}
		if (W.eb(fc) && !W.bb(fc)) {
			return vg(fc);
		}
		if (W.fb(fc)) {
			return dc(fc, [], cc);
		}
		return [];
	}

	function Dg(Uc) {
		var Eg = kg(), Fg = lg(), Gg = Ag(), Hg, Ig, Jg;
		if (!Fg) {
			Fg = "mbox-" + Eg + "-" + mboxGenerateId();
			Hg = document.createElement("div");
			Hg.className = "mboxDefault";
			Hg.id = Fg;
			Hg.style.visibility = "hidden";
			Hg.style.display = "none";
			Ig = setInterval(function () {
				if (document.body) {
					clearInterval(Ig);
					document.body.insertBefore(Hg, document.body.firstChild);
				}
			}, b.bodyPollingTimeout);
		}
		Jg = Uc.create(Eg, Gg, Fg);
		if (Jg && Uc.isEnabled()) {
			if (!Uc.isDomLoaded()) {
				if (!a.yc()) {
					Jg.setFetcher(new a.Oc());
				} else if (a.zc()) {
					Jg.setFetcher(new a.Oc());
				} else {
					Jg.setFetcher(new mboxAjaxFetcher());
				}
			}
			Jg.load();
		}
	}

	function Kg(Uc, x, nb) {
		if (!Uc.isEnabled()) {
			return;
		}
		var yf = new Date(), Lg = yf.getTimezoneOffset() * M.Q, Mc = Uc.getUrlBuilder().clone();
		Mc.setBasePath('/m2/' + b.clientCode + '/viztarget');
		Mc.addParameter(c.x, x);
		Mc.addParameter(c.y, 0);
		Mc.addParameter(c.j, Uc.getMboxes().length() + 1);
		Mc.addParameter(c.A, yf.getTime() - Lg);
		Mc.addParameter(c.d, mboxGenerateId());
		Mc.addParameter(c.z, Uc.isDomLoaded());
		if (nb && nb.length > 0) {
			Mc.addParameters(nb);
		}
		Uc.Bf(Mc);
		Uc.Mg(Mc, x);
		Uc.Ef(Mc, x);
		return Mc.buildUrl();
	}

	function Ng() {
		return new mboxMap();
	}

	function Og(Pg, mb, Se) {
		return new mboxFactory(Pg, mb, Se);
	}

	a.qg = qg;
	a.rg = rg;
	a.sg = sg;
	a.Kg = Kg;
	a.tg = tg;
	a.ug = ug;
	a.Dg = Dg;
	a.Ng = Ng;
	a.Og = Og;
	a.dc = dc;
	X.getGlobalMboxName = kg;
	X.getGlobalMboxLocation = lg;
	X.isAutoCreateGlobalMbox = mg;
	X.getClientMboxExtraParameters = ng;
	X.getTargetPageParameters = Ag;
}(TNT, TNT.a, TNT.a.W, TNT.a.b, TNT.a.c, TNT.a.M));
(function (X) {
	function Qg(Kd, b, Rg, Sg) {
		var Tg = 60 * 60, Ug = mboxGetPageParameter(Rg, true) || Kd.getCookie(Sg);
		if (!Ug) {
			return;
		}
		setTimeout(function () {
			if (typeof(window.mboxDebugLoaded) === 'undefined') {
				alert('Could not load the remote debug.\nPlease check your connection to ' + b.companyName + ' servers');
			}
		}, Tg);
		var Db = [];
		Db.push(b.adminUrl, '/mbox/mbox_debug.jsp', '?');
		Db.push('mboxServerHost', '=', b.serverHost, '&');
		Db.push('clientCode', '=', b.clientCode);
		document.write('<' + 'scr' + 'ipt src="' + Db.join('') + '"><' + '\/scr' + 'ipt>');
	}

	function Vg(b, Wg) {
		var W = X.W, Xg, Yg, _;
		if (W.Z(b) || W.ab(b) || !W.fb(b)) {
			return Wg;
		}
		for (var Zb in b) {
			Xg = b.hasOwnProperty(Zb) && Wg.hasOwnProperty(Zb);
			_ = b[Zb];
			Yg = !W.Z(_) && !W.ab(_);
			if (Xg && Yg) {
				Wg[Zb] = _;
			}
		}
		return Wg;
	}

	function Zg(Uc, Kd) {
		TNT.createGlobalMbox = function () {
			X.Dg(Uc);
		};
		window.mboxCreate = function (x) {
			var c = [].slice.call(arguments, 1);
			return X.qg(Uc, x, c);
		};
		window.mboxDefine = function (vf, x) {
			var c = [].slice.call(arguments, 2);
			return X.rg(Uc, vf, x, c);
		};
		window.mboxUpdate = function (x) {
			var c = [].slice.call(arguments, 1);
			X.sg(Uc, x, c);
		};
		window.mboxVizTargetUrl = function (x) {
			var c = [].slice.call(arguments, 1);
			return X.Kg(Uc, x, c);
		};
		window.mboxSetCookie = function (qb, _, pd) {
			return X.ug(Kd, qb, _, pd);
		};
		window.mboxGetCookie = function (qb) {
			return X.tg(Kd, qb);
		};
		if (typeof(X.Uf) !== 'undefined') {
			window.mboxLoadSCPlugin = function (Nf) {
				return X.Uf(Uc, Nf);
			}
		}
	}

	function _g() {
		if (typeof(window.mboxVersion) !== 'undefined') {
			return;
		}
		X.b = Vg(window.targetGlobalSettings, X.b);
		var b = X.b, Te = b.mboxVersion, Pg = b.serverHost, mb = b.clientCode, N = X.M.N, Rg = X.C.G, Sg = X.H.G, ah = X.H.L, Uc, Kd;
		window.mboxFactories = X.Ng();
		window.mboxFactoryDefault = Uc = X.Og(Pg, mb, N);
		window.mboxVersion = Te;
		Kd = Uc.getCookieManager();
		Zg(Uc, Kd);
		Qg(Kd, b, Rg, Sg);
		X.Bb = function (bh) {
			var lb;
			if (!b.overrideMboxEdgeServer) {
				return bh;
			}
			lb = Kd.getCookie(ah);
			return lb === null ? bh : lb;
		}
	}

	X._g = _g;
}(TNT.a));
TNT.a._g();
TNT.a.dg(TNT.a.b, TNT.a.H, window.mboxFactoryDefault.getCookieManager());
if (TNT.isAutoCreateGlobalMbox()) {
	TNT.createGlobalMbox();
}

function aam_tnt_cb() {
	if (typeof(arguments[0].stuff) != "undefined" && arguments[0].stuff != "") {
		for (var i = 0; i < arguments[0].stuff.length; i++) {
			if (arguments[0].stuff[i].cn == "aam_tnt") {
				if (arguments[0].stuff[0].cv.split(",")) {
					var demdex_raw = arguments[0].stuff[i].cv.split(",");
					var tapMboxBuilder = mboxFactoryDefault.getUrlBuilder();
					tapMboxBuilder.addParameters(demdex_raw);
				}
			}
		}
	}
}
document.write('<script src="' + document.location.protocol + '//swisscom.demdex.net/event?d_stuff=1&d_dst=1&d_rtbd=json&d_cb=aam_tnt_cb"></script>');
