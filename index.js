const cube = require('./dist/Cube');
const algorithms = require('./dist/CubeAlgorithms');

module.exports = {
	createCube: cube.createCube,
	exec: algorithms.exec,
	render: cube.logCube
}