var index = {
	doSomething: function () {
		console.log('ok')
	},
	jsonp: function(url, callbackName, callback) {
		var script = document.createElement('script');
		script.src = url + '?type=jsonp&callbackName=' + callbackName;
		script.id = 'jsonp';
		script.onload = callback;
		window[callbackName] = index.doSomething;
		document.body.appendChild(script);
	}
};
index.jsonp('http://www.sunken.me/content', 'doSomething', function(name, script) {
	window[name] =script.parentNode.removeChild(script) });
