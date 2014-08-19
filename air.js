(function(window, document, undefined) {
	return {
		/**
		 * Starts a request
		 * args = {};
		 * @param string args.method        GET or POST
		 * @param string args.url           Request URL
		 * @param mixed args.params         Params that will be sent to URL
		 * @param function args.callback    Function that will receive the request object
		 */
		request: function(args) {
			var http = this.create(), self = this, tmp, i, j;
			var callback, url, method, params;
			
			callback = args.callback;
			url = args.url;
			method = args.method;
			params = args.params;
			
			method = method.toLowerCase();

			http.open(method, url, true);
			
			if (method == 'post') {
				http.setRequestHeader('Method', 'POST ' + url + ' HTTP/1.1');
				http.setRequestHeader('Content-type', 'application/json');
			} else {
				params = null;
			}
			
			http.onreadystatechange = function()
			{
				if (http.readyState != 4) {
					return;
				}

				if (http.status == 200) {
					if (typeof callback == 'function') {
						callback.call(null, true, http);
					}
				} else {
					if (typeof callback == 'function') {
						callback.call(null, false, http);
					}
				}
			};
			
			http.send(JSON.stringify(params));
			
			return http;
		},
		/**
		 * Creates XMLHttpRequest
		 *
		 * @return {XMLHttpRequest}
		 */
		create: function() {
			var http;
			
			try {
				http = new XMLHttpRequest();
			} catch (e) {
				try {
					http = new ActiveXObject('Msxml2.XMLHTTP');
				} catch (f) {
					try {
						http = new ActiveXObject('Microsoft.XMLHTTP');
					} catch (g) { null; }
				}
			}
			
			return http;
		},
		/**
		 * Helper wrapper for POST request
		 *
		 * @param  {Object} args
		 * @return {XMLHttpRequest}
		 */
		post: function(args) {
			args.method = 'POST';
			this.request(args);
		}
	}
})(window, document);