const entityMap = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#39;',
	'/': '&#x2F;'
}

module.exports = function (html) {
	return String(html).replace(/[&<>"'/]/g, key => entityMap[key])
}
