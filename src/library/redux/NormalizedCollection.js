

export default function NormalizedCollection(entities, result) {
	this.entities = entities
	this.result = result

	this.getItems = function() {
		return this.result.map((index,key) => {
			let item = this.entities[index]
			item.key = key
			return item
		})
	}

	this.find = function(id) {
		return this.entities[id]
	}

	this.keyExtractor = (item, key) => key
}