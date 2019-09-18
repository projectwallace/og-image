const {parse} = require('url')
const sanitizeHtml = require('./_sanitize-html')

module.exports = req => {
	const {query = {}} = parse(req.url || '', true)
	const {text, cli, icon} = query

	return {
		text: sanitizeHtml(decodeURIComponent(text)),
		cli: cli && decodeURIComponent(cli),
		icon
	}
}
