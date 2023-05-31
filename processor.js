const fs = require('fs')
const FormData = require('form-data')

module.exports = {
	upload: (requestParams, context, _, next) => {
		if (fs.existsSync('./filename.txt')) {
			fs.appendFileSync('./filename.txt', 'hello world')
		}

		const form = new FormData()
		form.append('userId', '111268669491701062956')
		form.append('file', fs.createReadStream('./filename.txt'))
		form.append('type', 'file')
		requestParams.body = form

		return next()
	}
}
