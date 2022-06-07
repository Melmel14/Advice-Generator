var IS_ENV_IFRAME = !1;
! function() {
    function execScript() {
        var req = { type: "link-request", content: { method: "executeContentScript", params: {} } };
        chrome.runtime.sendMessage(req, function(data) {})
    }

    function injectCS() { IS_ENV_IFRAME = !0, ~ua.indexOf("firefox") ? execScript() : "function" == typeof window._switch_engine ? window._switch_engine("full") : chrome && chrome.runtime && execScript() }

    function waitForInputs(wait) {
        if (!(wait >= 65e3))
            if (document.querySelectorAll("input").length > 1) injectCS();
            else {
                var time = wait ? 2 * wait : 500;
                setTimeout(function() { waitForInputs(2 * wait) }, time)
            }
    }
    var ua = navigator.userAgent.toLowerCase();
    return window.top === window.self ? void("function" == typeof window._switch_engine && window._switch_engine("full")) : "function" != typeof window._switch_engine || "/pages/tk-inpages-frame.html" !== location.pathname && "/framefactory/tk-inpages-frame.html" !== location.pathname ? void waitForInputs(500) : void window._switch_engine("full")
}();
//# sourceMappingURL=cs-loader.js.map