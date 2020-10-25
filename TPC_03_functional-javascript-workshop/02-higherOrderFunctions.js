'use strict'

function repeat(operation, num) {
	for (let i = 0; i< num; ++i)
		operation()
}

// Do not remove the line below
module.exports = repeat