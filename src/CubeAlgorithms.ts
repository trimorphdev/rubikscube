import * as cubelib from './Cube';
import { CubePiece } from './CubePiece';

let moveFunctions: {
	[key: string]: Function
} = {
	'r': cubelib.doR,
	'r\'': cubelib.doRPrime,
	'l': cubelib.doL,
	'l\'': cubelib.doLPrime,
	'f': cubelib.doF,
	'f\'': cubelib.doFPrime,
	'b': cubelib.doB,
	'b\'': cubelib.doBPrime,
	'd': cubelib.doD,
	'd\'': cubelib.doDPrime,
	'u': cubelib.doU,
	'u\'': cubelib.doUPrime,
}

export function exec(cube: CubePiece[], alg: string) {
	let moves = alg.split(' ').filter(str => {
		if (str.trim() == '')
			return false;
		
		return true;
	});

	for (let move of moves) {
		let moveSegments = /([FBRLDU]'?)([0-9]+)?/i.exec(move);

		if (moveSegments != null && moveSegments[0] == move) {
			let _move = moveSegments[1].toLowerCase();
			let count = parseInt(moveSegments[2]);

			if (moveSegments[2] != undefined) {
				for (let i = 0; i < count; i++) {
					if (moveFunctions[_move] != undefined) {
						moveFunctions[_move].call(null, cube);
					}
				}
			} else {
				if (moveFunctions[_move] != undefined) {
					moveFunctions[_move].call(null, cube);
				}
			}
		}
	}
}