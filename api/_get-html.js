function markdownify(markdown) {
	return markdown
		.replace(/\*\*/, '<span style="color: #29c87d">')
		.replace(/\*\*/, '</span>')
}

module.exports = ({text, icon, cli}) => {
	return `
		<!doctype html>
		<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono|Teko:500" rel="stylesheet">
		<style>
			body {
				padding: 0;
			}

			.font-mono {
				font-family: "Ubuntu Mono", monospace;
			}

			.font-display {
				font-family: "Teko";
				font-weight: 500;
				letter-spacing: .04em;
				line-height: 1.1;
				text-transform: uppercase;
			}
		</style>

		<article class="overflow-hidden p-16 relative" style="width: 700px; height: 400px; background-color: hsl(203.3, 27.3%, 12.9%); color: hsl(198, 10%, 82%);">
			<div class="flex">
				${(icon && icon !== 'none' && `
					<div class="mr-12 shadow-md self-start" style="background: hsl(203, 23%, 16%)">
						<svg viewBox="0 0 15 15" width="150" height="auto" xmlns="http://www.w3.org/2000/svg">
						${icon === 'constyble' && `
							<path fill="#29c87d" d="M4 3h2v2H4zM9 3h2v2H9zM5 7h6v4H5z" />
						`}
						${icon === 'wallace-cli' && `
							<g fill="#29c87d">
								<rect fill="#da2b2b" width="4.5" height="1" y="10.5" x="7.5"></rect>
								<rect width="5" height="1" transform="rotate(45) translate(6, 0)"></rect>
								<rect width="5" height="1" transform="rotate(-45) translate(-5, 10)"></rect>
							</g>
						`}
						${icon === 'color-sorter' && `
							<path fill="#da2b2b" d="M3 3h2v9H3z"/>
							<path fill="#ffba1a" d="M5 3h2v9H5z"/>
							<path fill="#29c87d" d="M7 3h3v9H7z"/>
							<path fill="#24ad6d" d="M10 3h2v9h-2z"/>
						`}
						</svg>
					</div>
				`) || ''}

				<h1 class="text-5xl text-white font-display">
					${markdownify(text)}
				</h1>
			</div>

			${(cli && `
				<div class="mt-12">
					<code class="font-mono mt-6 bg-black self-start px-3 py-2 text-lg" style="background: hsl(195, 33.3%, 4.7%)">
						<span class="text-teal-400" style="color: hsl(152, 65.6%, 41%)">$</span>
						${cli}
					</code>
				</div>
			`) || ''}
			<p class="text-gray-500 absolute bottom-0 right-0 mb-8 mr-8 text-lg">projectwallace.com</p>
		</article>
	`
}
