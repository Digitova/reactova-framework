
export default getActionPropertyAsArray = (action, propertyName) => {
	if(action.hasOwnProperty(propertyName) && action[propertyName].constructor !== Array) {
		return [action[propertyName]]
	} else {
		return action[propertyName]
	}
}