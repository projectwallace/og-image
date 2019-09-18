const puppeteer = require('puppeteer-core')
const chrome = require('chrome-aws-lambda')
let _page

const isDev = process.env.NOW_REGION === 'dev1'

async function getOptions() {
	if (isDev) {
		return {
			args: [],
			executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
			headless: true
		}
	}

	return {
		args: chrome.args,
		executablePath: await chrome.executablePath,
		headless: chrome.headless
	}
}

async function getPage() {
	if (_page) {
		return _page
	}

	const options = await getOptions()
	const browser = await puppeteer.launch(options)
	_page = await browser.newPage()
	return _page
}

exports.getScreenshot = async url => {
	const page = await getPage()
	await page.setViewport({width: 700, height: 400})
	await page.goto(url)
	const file = await page.screenshot()
	return file
}
