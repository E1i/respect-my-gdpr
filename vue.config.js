module.exports = {
	pages: {
		bg: {
			entry: 'src/bg/main.js',
			template: 'public/bg.html',
			filename: 'bg.html',
			title: 'Background Page',
			chunks: ['chunk-vendors', 'chunk-common', 'bg'],
		},
		options: {
			entry: 'src/options/main.js',
			template: 'public/index.html',
			filename: 'options.html',
			title: 'Options Page',
			chunks: ['chunk-vendors', 'chunk-common', 'options'],
		},
	},
};
