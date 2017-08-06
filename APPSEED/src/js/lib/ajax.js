const AjaxCall = function(url) {
	return new Promise(function(resolve, reject) {
		const request = new XMLHttpRequest();
		request.open('GET',url, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				// Success!
				const data = JSON.parse(request.responseText);
				resolve(data)
			}
		}
		request.onerror = function() {
			// Handle Error
			console.log('ERROR');
		};
		request.send();
	})
}
module.exports = AjaxCall;

/**** USE ****

import AjaxCall from 'lib/ajax';
const url = 'path/too/json';

const ajaxCall = new AjaxCall();

ajaxCall.then(function(resolve){
	const data = resolve;
	console.log(data.title);
}, function(reject){
	console.log('ERROR');
});

**************/