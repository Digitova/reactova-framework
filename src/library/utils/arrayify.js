
export default arrayify = (object) => {
	if(typeof object === 'undefined' || object == null){
		return []
	}
	if(object.constructor !== Array){
		return [object]
	} else {
		return object;
	}
}