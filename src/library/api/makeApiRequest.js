
export default makeApiRequest = (request, onSuccess, onFailed) => {
	return fetch(
		request.url, {
			method: request.method,
			headers: request.headers,
			body: request.body
		}).then(response => {
		if(response.ok) {
			response.json().then(function(json) {
				return onSuccess(response.status,json)
			}).catch((error) => onFailed(response.status, error))
		} else {
			response.json().then(function(json) {
				return onFailed(response.status, json)
			}).catch((error) => onFailed(response.status, error))
		}
	}).catch((error) => console.log(error))
}