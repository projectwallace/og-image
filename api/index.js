const parseRequest = require('./_parse-request')
const getHtml = require('./_get-html')
const {writeTempFile, pathToFileURL} = require('./_file')
const {getScreenshot} = require('./_chromium')

// TODO: make text highlighting work
module.exports = async (req, res) => {
	const parsedRequest = parseRequest(req)
	const {text, cli, icon} = parsedRequest
	const html = getHtml(parsedRequest)

	const filePath = await writeTempFile([text, icon, cli].join(''), html)
	const fileUrl = pathToFileURL(filePath)
	const file = await getScreenshot(fileUrl)

	res.statusCode = 200
	res.setHeader('Content-Type', 'image/png')
	res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')
	res.end(file)
}
