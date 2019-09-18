const {writeFile} = require('fs')
const {promisify} = require('util')
const {join} = require('path')
const {createHash} = require('crypto')
const {tmpdir} = require('os')
const writeFileAsync = promisify(writeFile)

exports.writeTempFile = async (name, contents) => {
	const fileName = createHash('md5').update(name).digest('hex') + '.html'
	const filePath = join(tmpdir(), fileName)
	await writeFileAsync(filePath, contents)
	return filePath
}

exports.pathToFileURL = path => {
	return 'file://' + path
}
