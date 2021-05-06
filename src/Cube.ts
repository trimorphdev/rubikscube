import { CubeColor } from "./CubeColor";
import { CubeCorner } from "./CubeCorner";
import { CubeEdge } from "./CubeEdge";
import { CubePiece } from "./CubePiece";
import 'colors';
import { green } from "colors";

export function createCube(): CubePiece[] {
	const cube: CubePiece[] = [];

	// Upper Left corner of F (green) face 0
	cube.push({
		T: 'Corner',
		UFace: CubeColor.White,
		FFace: CubeColor.Green,
		SFace: CubeColor.Orange
	});

	// Upper Center edge of F (green) face 1
	cube.push({
		T: 'Edge',
		UFace: CubeColor.White,
		FFace: CubeColor.Green
	});

	// Upper Right corner of F (green) face 2
	cube.push({
		T: 'Corner',
		UFace: CubeColor.White,
		FFace: CubeColor.Green,
		SFace: CubeColor.Red
	});

	// Middle Left edge of F (green) face 3
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Orange,
		FFace: CubeColor.Green
	});

	// Middle Right edge of F (green) face 4
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Red,
		FFace: CubeColor.Green
	});

	// Bottom Left corner of F (green) face 5
	cube.push({
		T: 'Corner',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Green,
		SFace: CubeColor.Orange
	});

	// Bottom Center edge of F (green) face 6
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Green
	});

	// Bottom Right corner of F (green) face 7
	cube.push({
		T: 'Corner',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Green,
		SFace: CubeColor.Red
	});

	// Top Center edge of R (red) face 8
	cube.push({
		T: 'Edge',
		UFace: CubeColor.White,
		FFace: CubeColor.Red
	});

	// Bottom Center edge of R (red) face 9
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Red
	});

	// Upper Left corner of B (blue) face 10
	cube.push({
		T: 'Corner',
		UFace: CubeColor.White,
		FFace: CubeColor.Blue,
		SFace: CubeColor.Red
	});

	// Upper Center edge of B (blue) face 11
	cube.push({
		T: 'Edge',
		UFace: CubeColor.White,
		FFace: CubeColor.Blue
	});

	// Upper Right corner of B (blue) face 12
	cube.push({
		T: 'Corner',
		UFace: CubeColor.White,
		FFace: CubeColor.Blue,
		SFace: CubeColor.Orange
	});

	// Middle Left edge of B (blue) face 13
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Red,
		FFace: CubeColor.Blue
	});

	// Middle Right edge of B (blue) face 14
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Orange,
		FFace: CubeColor.Blue
	});

	// Bottom Left corner of B (blue) face 15
	cube.push({
		T: 'Corner',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Blue,
		SFace: CubeColor.Red
	});

	// Bottom Center edge of B (blue) face 16
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Blue
	});

	// Bottom Right corner of B (blue) face 17 
	cube.push({
		T: 'Corner',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Blue,
		SFace: CubeColor.Orange
	});

	// Top Center edge of L (orange) face 18 
	cube.push({
		T: 'Edge',
		UFace: CubeColor.White,
		FFace: CubeColor.Orange
	});

	// Bottom Center edge of L (orange) face 19
	cube.push({
		T: 'Edge',
		UFace: CubeColor.Yellow,
		FFace: CubeColor.Orange
	});

	return cube;
}

export function doR(cube: CubePiece[]) {
	// Make the right layer move clockwise
	let r1 = cube[2]; // Upper right corner
	let r2 = cube[4]; // Middle right edge
	let r3 = cube[7]; // Lower right corner
	let r4 = cube[9]; // Bottom edge of R face
	let r5 = cube[15]; // Lower left corner of B face
	let r6 = cube[13]; // Middle left edge of B face
	let r7 = cube[10]; // Upper left corner of B face
	let r8 = cube[8]; // Upper edge of R face

	let _r1: CubeCorner;
	let _r3: CubeCorner;
	let _r5: CubeCorner;
	let _r7: CubeCorner;

	if (r3.T == 'Corner')
		_r1 = {
			T: 'Corner',
			UFace: r3.FFace,
			FFace: r3.UFace,
			SFace: r3.SFace
		}
	
	let _r2: CubeEdge = {
		T: 'Edge',
		UFace: r4.FFace,
		FFace: r4.UFace
	}

	if (r5.T == 'Corner') {
		_r3 = {
			T: 'Corner',
			UFace: r5.FFace,
			FFace: r5.UFace,
			SFace: r5.SFace
		}
	}

	let _r4: CubeEdge = {
		T: 'Edge',
		UFace: r6.FFace,
		FFace: r6.UFace
	}

	if (r7.T == 'Corner') {
		_r5 = {
			T: 'Corner',
			UFace: r7.FFace,
			FFace: r7.UFace,
			SFace: r7.SFace
		}
	}

	let _r6: CubeEdge = {
		T: 'Edge',
		UFace: r8.FFace,
		FFace: r8.UFace
	}

	if (r1.T == 'Corner') {
		_r7 = {
			T: 'Corner',
			UFace: r1.FFace,
			FFace: r1.UFace,
			SFace: r1.SFace
		}
	}

	let _r8: CubeEdge = {
		T: 'Edge',
		UFace: r2.FFace,
		FFace: r2.UFace
	}
	
	cube[2] = _r1;
	cube[4] = _r2;
	cube[7] = _r3;
	cube[9] = _r4;
	cube[15] = _r5;
	cube[13] = _r6;
	cube[10] = _r7;
	cube[8] = _r8;
}

export function doRPrime(cube: CubePiece[]) {
	// Make the right layer move clockwise
	let r1 = cube[2]; // Upper right corner
	let r2 = cube[4]; // Middle right edge
	let r3 = cube[7]; // Lower right corner
	let r4 = cube[9]; // Bottom edge of R face
	let r5 = cube[15]; // Lower left corner of B face
	let r6 = cube[13]; // Middle left edge of B face
	let r7 = cube[10]; // Upper left corner of B face
	let r8 = cube[8]; // Upper edge of R face

	let _r1: CubeCorner;
	let _r3: CubeCorner;
	let _r5: CubeCorner;
	let _r7: CubeCorner;

	if (r7.T == 'Corner')
		_r1 = {
			T: 'Corner',
			UFace: r7.FFace,
			FFace: r7.UFace,
			SFace: r7.SFace
		}
	
	let _r2: CubeEdge = {
		T: 'Edge',
		UFace: r8.FFace,
		FFace: r8.UFace
	}

	if (r1.T == 'Corner') {
		_r3 = {
			T: 'Corner',
			UFace: r1.FFace,
			FFace: r1.UFace,
			SFace: r1.SFace
		}
	}

	let _r4: CubeEdge = {
		T: 'Edge',
		UFace: r2.FFace,
		FFace: r2.UFace
	}

	if (r3.T == 'Corner') {
		_r5 = {
			T: 'Corner',
			UFace: r3.FFace,
			FFace: r3.UFace,
			SFace: r3.SFace
		}
	}

	let _r6: CubeEdge = {
		T: 'Edge',
		UFace: r4.FFace,
		FFace: r4.UFace
	}

	if (r5.T == 'Corner') {
		_r7 = {
			T: 'Corner',
			UFace: r5.FFace,
			FFace: r5.UFace,
			SFace: r5.SFace
		}
	}

	let _r8: CubeEdge = {
		T: 'Edge',
		UFace: r6.FFace,
		FFace: r6.UFace
	}
	
	cube[2] = _r1;
	cube[4] = _r2;
	cube[7] = _r3;
	cube[9] = _r4;
	cube[15] = _r5;
	cube[13] = _r6;
	cube[10] = _r7;
	cube[8] = _r8;
}

export function doL(cube: CubePiece[]) {
	let l1 = cube[0]; // Upper left corner
	let l2 = cube[3]; // Middle left edge
	let l3 = cube[5]; // Bottom left corner
	let l4 = cube[19]; // Bottom edge of L face
	let l5 = cube[17]; // Bottom right corner of B face
	let l6 = cube[14]; // Middle right edge of B face
	let l7 = cube[12]; // Upper right corner of B face
	let l8 = cube[18]; // Center right corner of U face

	let _l1: CubeCorner;
	let _l3: CubeCorner;
	let _l5: CubeCorner;
	let _l7: CubeCorner;

	if (l7.T == 'Corner') {
		_l1 = {
			T: 'Corner',
			UFace: l7.FFace,
			FFace: l7.UFace,
			SFace: l7.SFace
		}
	}

	let _l2: CubeEdge = {
		T: 'Edge',
		UFace: l8.FFace,
		FFace: l8.UFace
	}

	if (l1.T == 'Corner') {
		_l3 = {
			T: 'Corner',
			UFace: l1.FFace,
			FFace: l1.UFace,
			SFace: l1.SFace
		}
	}

	let _l4: CubeEdge = {
		T: 'Edge',
		UFace: l2.FFace,
		FFace: l2.UFace
	}

	if (l3.T == 'Corner') {
		_l5 = {
			T: 'Corner',
			UFace: l3.FFace,
			FFace: l3.UFace,
			SFace: l3.SFace
		}
	}

	let _l6: CubeEdge = {
		T: 'Edge',
		UFace: l4.FFace,
		FFace: l4.UFace
	}

	if (l5.T == 'Corner') {
		_l7 = {
			T: 'Corner',
			UFace: l5.FFace,
			FFace: l5.UFace,
			SFace: l5.SFace
		}
	}

	let _l8: CubeEdge = {
		T: 'Edge',
		UFace: l6.FFace,
		FFace: l6.UFace
	}

	cube[0] = _l1;
	cube[3] = _l2;
	cube[5] = _l3;
	cube[19] = _l4;
	cube[17] = _l5;
	cube[14] = _l6;
	cube[12] = _l7;
	cube[18] = _l8;
}

export function doLPrime(cube: CubePiece[]) {
	let l1 = cube[0]; // Upper left corner
	let l2 = cube[3]; // Middle left edge
	let l3 = cube[5]; // Bottom left corner
	let l4 = cube[19]; // Bottom edge of L face
	let l5 = cube[17]; // Bottom right corner of B face
	let l6 = cube[14]; // Middle right edge of B face
	let l7 = cube[12]; // Upper right corner of B face
	let l8 = cube[18]; // Center right corner of U face

	let _l1: CubeCorner;
	let _l3: CubeCorner;
	let _l5: CubeCorner;
	let _l7: CubeCorner;

	if (l3.T == 'Corner') {
		_l1 = {
			T: 'Corner',
			UFace: l3.FFace,
			FFace: l3.UFace,
			SFace: l3.SFace
		}
	}

	let _l2: CubeEdge = {
		T: 'Edge',
		UFace: l4.FFace,
		FFace: l4.UFace
	}

	if (l5.T == 'Corner') {
		_l3 = {
			T: 'Corner',
			UFace: l5.FFace,
			FFace: l5.UFace,
			SFace: l5.SFace
		}
	}

	let _l4: CubeEdge = {
		T: 'Edge',
		UFace: l6.FFace,
		FFace: l6.UFace
	}

	if (l7.T == 'Corner') {
		_l5 = {
			T: 'Corner',
			UFace: l7.FFace,
			FFace: l7.UFace,
			SFace: l7.SFace
		}
	}

	let _l6: CubeEdge = {
		T: 'Edge',
		UFace: l8.FFace,
		FFace: l8.UFace
	}

	if (l1.T == 'Corner') {
		_l7 = {
			T: 'Corner',
			UFace: l1.FFace,
			FFace: l1.UFace,
			SFace: l1.SFace
		}
	}

	let _l8: CubeEdge = {
		T: 'Edge',
		UFace: l2.FFace,
		FFace: l2.UFace
	}

	cube[0] = _l1;
	cube[3] = _l2;
	cube[5] = _l3;
	cube[19] = _l4;
	cube[17] = _l5;
	cube[14] = _l6;
	cube[12] = _l7;
	cube[18] = _l8;
}

export function doU(cube: CubePiece[]) {
	let u1 = cube[2]; // Upper right corner
	let u2 = cube[1]; // Upper center edge
	let u3 = cube[0]; // Upper left corner
	let u4 = cube[18]; // Upper edge of L face
	let u5 = cube[12]; // Upper right corner of B face
	let u6 = cube[11]; // Upper edge of B face
	let u7 = cube[10]; // Upper left corner of B face
	let u8 = cube[8]; // Upper edge of R face

	let _u1: CubeCorner;
	let _u3: CubeCorner;
	let _u5: CubeCorner;
	let _u7: CubeCorner;

	if (u7.T == 'Corner') {
		_u1 = {
			T: 'Corner',
			UFace: u7.UFace,
			FFace: u7.SFace,
			SFace: u7.FFace
		};
	}

	let _u2: CubeEdge = {
		T: 'Edge',
		UFace: u8.UFace,
		FFace: u8.FFace
	}

	if (u1.T == 'Corner') {
		_u3 = {
			T: 'Corner',
			UFace: u1.UFace,
			FFace: u1.SFace,
			SFace: u1.FFace
		};
	}

	let _u4: CubeEdge = {
		T: 'Edge',
		UFace: u2.UFace,
		FFace: u2.FFace
	}

	if (u3.T == 'Corner') {
		_u5 = {
			T: 'Corner',
			UFace: u3.UFace,
			FFace: u3.SFace,
			SFace: u3.FFace
		};
	}

	let _u6: CubeEdge = {
		T: 'Edge',
		UFace: u4.UFace,
		FFace: u4.FFace
	}

	if (u5.T == 'Corner') {
		_u7 = {
			T: 'Corner',
			UFace: u5.UFace,
			FFace: u5.SFace,
			SFace: u5.FFace
		};
	}

	let _u8: CubeEdge = {
		T: 'Edge',
		UFace: u6.UFace,
		FFace: u6.FFace
	}

	cube[2] = _u1;
	cube[1] = _u2;
	cube[0] = _u3;
	cube[18] = _u4;
	cube[12] = _u5;
	cube[11] = _u6;
	cube[10] = _u7;
	cube[8] = _u8;
}

export function doUPrime(cube: CubePiece[]) {
	let u1 = cube[2]; // Upper right corner
	let u2 = cube[1]; // Upper center edge
	let u3 = cube[0]; // Upper left corner
	let u4 = cube[18]; // Upper edge of L face
	let u5 = cube[12]; // Upper right corner of B face
	let u6 = cube[11]; // Upper edge of B face
	let u7 = cube[10]; // Upper left corner of B face
	let u8 = cube[8]; // Upper edge of R face

	let _u1: CubeCorner;
	let _u3: CubeCorner;
	let _u5: CubeCorner;
	let _u7: CubeCorner;

	if (u3.T == 'Corner') {
		_u1 = {
			T: 'Corner',
			UFace: u3.UFace,
			FFace: u3.SFace,
			SFace: u3.FFace
		};
	}

	let _u2: CubeEdge = {
		T: 'Edge',
		UFace: u4.UFace,
		FFace: u4.FFace
	}

	if (u5.T == 'Corner') {
		_u3 = {
			T: 'Corner',
			UFace: u5.UFace,
			FFace: u5.SFace,
			SFace: u5.FFace
		};
	}

	let _u4: CubeEdge = {
		T: 'Edge',
		UFace: u6.UFace,
		FFace: u6.FFace
	}

	if (u7.T == 'Corner') {
		_u5 = {
			T: 'Corner',
			UFace: u7.UFace,
			FFace: u7.SFace,
			SFace: u7.FFace
		};
	}

	let _u6: CubeEdge = {
		T: 'Edge',
		UFace: u8.UFace,
		FFace: u8.FFace
	}

	if (u1.T == 'Corner') {
		_u7 = {
			T: 'Corner',
			UFace: u1.UFace,
			FFace: u1.SFace,
			SFace: u1.FFace
		};
	}

	let _u8: CubeEdge = {
		T: 'Edge',
		UFace: u2.UFace,
		FFace: u2.FFace
	}

	cube[2] = _u1;
	cube[1] = _u2;
	cube[0] = _u3;
	cube[18] = _u4;
	cube[12] = _u5;
	cube[11] = _u6;
	cube[10] = _u7;
	cube[8] = _u8;
}

export function doD(cube: CubePiece[]) {
	let d1 = cube[7]; // Lower right corner
	let d2 = cube[6]; // Lower center edge
	let d3 = cube[5]; // Lower left corner
	let d4 = cube[19]; // Lower edge of L face
	let d5 = cube[17]; // Lower right corner of B face
	let d6 = cube[16]; // Lower edge of B face
	let d7 = cube[15]; // Lower left corner of B face
	let d8 = cube[9]; // Lower edge of R face

	let _d1: CubeCorner;
	let _d3: CubeCorner;
	let _d5: CubeCorner;
	let _d7: CubeCorner;

	if (d3.T == 'Corner') {
		_d1 = {
			T: 'Corner',
			UFace: d3.UFace,
			FFace: d3.SFace,
			SFace: d3.FFace
		};
	}

	let _d2: CubeEdge = {
		T: 'Edge',
		UFace: d4.UFace,
		FFace: d4.FFace
	}

	if (d5.T == 'Corner') {
		_d3 = {
			T: 'Corner',
			UFace: d5.UFace,
			FFace: d5.SFace,
			SFace: d5.FFace
		};
	}

	let _d4: CubeEdge = {
		T: 'Edge',
		UFace: d6.UFace,
		FFace: d6.FFace
	}

	if (d7.T == 'Corner') {
		_d5 = {
			T: 'Corner',
			UFace: d7.UFace,
			FFace: d7.SFace,
			SFace: d7.FFace
		};
	}

	let _d6: CubeEdge = {
		T: 'Edge',
		UFace: d8.UFace,
		FFace: d8.FFace
	}

	if (d1.T == 'Corner') {
		_d7 = {
			T: 'Corner',
			UFace: d1.UFace,
			FFace: d1.SFace,
			SFace: d1.FFace
		};
	}

	let _d8: CubeEdge = {
		T: 'Edge',
		UFace: d2.UFace,
		FFace: d2.FFace
	}

	cube[7] = _d1;
	cube[6] = _d2;
	cube[5] = _d3;
	cube[19] = _d4;
	cube[17] = _d5;
	cube[16] = _d6;
	cube[15] = _d7;
	cube[9] = _d8;
}

export function doDPrime(cube: CubePiece[]) {
	let d1 = cube[7]; // Lower right corner
	let d2 = cube[6]; // Lower center edge
	let d3 = cube[5]; // Lower left corner
	let d4 = cube[19]; // Lower edge of L face
	let d5 = cube[17]; // Lower right corner of B face
	let d6 = cube[16]; // Lower edge of B face
	let d7 = cube[15]; // Lower left corner of B face
	let d8 = cube[9]; // Lower edge of R face

	let _d1: CubeCorner;
	let _d3: CubeCorner;
	let _d5: CubeCorner;
	let _d7: CubeCorner;

	if (d7.T == 'Corner') {
		_d1 = {
			T: 'Corner',
			UFace: d7.UFace,
			FFace: d7.SFace,
			SFace: d7.FFace
		};
	}

	let _d2: CubeEdge = {
		T: 'Edge',
		UFace: d8.UFace,
		FFace: d8.FFace
	}

	if (d1.T == 'Corner') {
		_d3 = {
			T: 'Corner',
			UFace: d1.UFace,
			FFace: d1.SFace,
			SFace: d1.FFace
		};
	}

	let _d4: CubeEdge = {
		T: 'Edge',
		UFace: d2.UFace,
		FFace: d2.FFace
	}

	if (d3.T == 'Corner') {
		_d5 = {
			T: 'Corner',
			UFace: d3.UFace,
			FFace: d3.SFace,
			SFace: d3.FFace
		};
	}

	let _d6: CubeEdge = {
		T: 'Edge',
		UFace: d4.UFace,
		FFace: d4.FFace
	}

	if (d5.T == 'Corner') {
		_d7 = {
			T: 'Corner',
			UFace: d5.UFace,
			FFace: d5.SFace,
			SFace: d5.FFace
		};
	}

	let _d8: CubeEdge = {
		T: 'Edge',
		UFace: d6.UFace,
		FFace: d6.FFace
	}

	cube[7] = _d1;
	cube[6] = _d2;
	cube[5] = _d3;
	cube[19] = _d4;
	cube[17] = _d5;
	cube[16] = _d6;
	cube[15] = _d7;
	cube[9] = _d8;
}

export function doF(cube: CubePiece[]) {
	let f1 = cube[0]; // Upper left corner
	let f2 = cube[1]; // Upper edge
	let f3 = cube[2]; // Upper right corner
	let f4 = cube[3]; // Middle left edge
	let f5 = cube[4]; // Middle right edge
	let f6 = cube[5]; // Bottom left corner
	let f7 = cube[6]; // Bottom edge
	let f8 = cube[7]; // Bottom right corner

	let _f1: CubeCorner;
	let _f3: CubeCorner;
	let _f6: CubeCorner;
	let _f8: CubeCorner;

	if (f6.T == 'Corner') {
		_f1 = {
			T: 'Corner',
			UFace: f6.SFace,
			FFace: f6.FFace,
			SFace: f6.UFace
		};
	}

	let _f2: CubeEdge = {
		T: 'Edge',
		UFace: f4.UFace,
		FFace: f4.FFace
	}

	if (f1.T == 'Corner') {
		_f3 = {
			T: 'Corner',
			UFace: f1.SFace,
			FFace: f1.FFace,
			SFace: f1.UFace
		};
	}

	let _f4: CubeEdge = {
		T: 'Edge',
		UFace: f7.UFace,
		FFace: f7.FFace
	}

	let _f5: CubeEdge = {
		T: 'Edge',
		UFace: f2.UFace,
		FFace: f2.FFace
	}

	if (f8.T == 'Corner') {
		_f6 = {
			T: 'Corner',
			UFace: f8.SFace,
			FFace: f8.FFace,
			SFace: f8.UFace
		};
	}

	let _f7: CubeEdge = {
		T: 'Edge',
		UFace: f5.UFace,
		FFace: f5.FFace
	}

	if (f3.T == 'Corner') {
		_f8 = {
			T: 'Corner',
			UFace: f3.SFace,
			FFace: f3.FFace,
			SFace: f3.UFace
		};
	}

	cube[0] = _f1;
	cube[1] = _f2;
	cube[2] = _f3;
	cube[3] = _f4;
	cube[4] = _f5;
	cube[5] = _f6;
	cube[6] = _f7;
	cube[7] = _f8;
}

export function doFPrime(cube: CubePiece[]) {
	let f1 = cube[0]; // Upper left corner
	let f2 = cube[1]; // Upper edge
	let f3 = cube[2]; // Upper right corner
	let f4 = cube[3]; // Middle left edge
	let f5 = cube[4]; // Middle right edge
	let f6 = cube[5]; // Bottom left corner
	let f7 = cube[6]; // Bottom edge
	let f8 = cube[7]; // Bottom right corner

	let _f1: CubeCorner;
	let _f3: CubeCorner;
	let _f6: CubeCorner;
	let _f8: CubeCorner;

	if (f3.T == 'Corner') {
		_f1 = {
			T: 'Corner',
			UFace: f3.SFace,
			FFace: f3.FFace,
			SFace: f3.UFace
		};
	}

	let _f2: CubeEdge = {
		T: 'Edge',
		UFace: f5.UFace,
		FFace: f5.FFace
	}

	if (f8.T == 'Corner') {
		_f3 = {
			T: 'Corner',
			UFace: f8.SFace,
			FFace: f8.FFace,
			SFace: f8.UFace
		};
	}

	let _f4: CubeEdge = {
		T: 'Edge',
		UFace: f2.UFace,
		FFace: f2.FFace
	}

	let _f5: CubeEdge = {
		T: 'Edge',
		UFace: f7.UFace,
		FFace: f7.FFace
	}

	if (f1.T == 'Corner') {
		_f6 = {
			T: 'Corner',
			UFace: f1.SFace,
			FFace: f1.FFace,
			SFace: f1.UFace
		};
	}

	let _f7: CubeEdge = {
		T: 'Edge',
		UFace: f4.UFace,
		FFace: f4.FFace
	}

	if (f6.T == 'Corner') {
		_f8 = {
			T: 'Corner',
			UFace: f6.SFace,
			FFace: f6.FFace,
			SFace: f6.UFace
		};
	}

	cube[0] = _f1;
	cube[1] = _f2;
	cube[2] = _f3;
	cube[3] = _f4;
	cube[4] = _f5;
	cube[5] = _f6;
	cube[6] = _f7;
	cube[7] = _f8;
}

export function doB(cube: CubePiece[]) {
	let b1 = cube[10]; // Upper left corner
	let b2 = cube[11]; // Upper edge
	let b3 = cube[12]; // Upper right corner
	let b4 = cube[13]; // Middle left edge
	let b5 = cube[14]; // Middle right edge
	let b6 = cube[15]; // Bottom left corner
	let b7 = cube[16]; // Bottom edge
	let b8 = cube[17]; // Bottom right corner

	let _b1: CubeCorner;
	let _b3: CubeCorner;
	let _b6: CubeCorner;
	let _b8: CubeCorner;

	if (b6.T == 'Corner') {
		_b1 = {
			T: 'Corner',
			UFace: b6.SFace,
			FFace: b6.FFace,
			SFace: b6.UFace
		};
	}

	let _b2: CubeEdge = {
		T: 'Edge',
		UFace: b4.UFace,
		FFace: b4.FFace
	}

	if (b1.T == 'Corner') {
		_b3 = {
			T: 'Corner',
			UFace: b1.SFace,
			FFace: b1.FFace,
			SFace: b1.UFace
		};
	}

	let _b4: CubeEdge = {
		T: 'Edge',
		UFace: b7.UFace,
		FFace: b7.FFace
	}

	let _b5: CubeEdge = {
		T: 'Edge',
		UFace: b2.UFace,
		FFace: b2.FFace
	}

	if (b8.T == 'Corner') {
		_b6 = {
			T: 'Corner',
			UFace: b8.SFace,
			FFace: b8.FFace,
			SFace: b8.UFace
		};
	}

	let _b7: CubeEdge = {
		T: 'Edge',
		UFace: b5.UFace,
		FFace: b5.FFace
	}

	if (b3.T == 'Corner') {
		_b8 = {
			T: 'Corner',
			UFace: b3.SFace,
			FFace: b3.FFace,
			SFace: b3.UFace
		};
	}

	cube[10] = _b1;
	cube[11] = _b2;
	cube[12] = _b3;
	cube[13] = _b4;
	cube[14] = _b5;
	cube[15] = _b6;
	cube[16] = _b7;
	cube[17] = _b8;
}

export function doBPrime(cube: CubePiece[]) {
	let b1 = cube[10]; // Upper left corner
	let b2 = cube[11]; // Upper edge
	let b3 = cube[12]; // Upper right corner
	let b4 = cube[13]; // Middle left edge
	let b5 = cube[14]; // Middle right edge
	let b6 = cube[15]; // Bottom left corner
	let b7 = cube[16]; // Bottom edge
	let b8 = cube[17]; // Bottom right corner

	let _b1: CubeCorner;
	let _b3: CubeCorner;
	let _b6: CubeCorner;
	let _b8: CubeCorner;

	if (b3.T == 'Corner') {
		_b1 = {
			T: 'Corner',
			UFace: b3.SFace,
			FFace: b3.FFace,
			SFace: b3.UFace
		};
	}

	let _b2: CubeEdge = {
		T: 'Edge',
		UFace: b5.UFace,
		FFace: b5.FFace
	}

	if (b8.T == 'Corner') {
		_b3 = {
			T: 'Corner',
			UFace: b8.SFace,
			FFace: b8.FFace,
			SFace: b8.UFace
		};
	}

	let _b4: CubeEdge = {
		T: 'Edge',
		UFace: b2.UFace,
		FFace: b2.FFace
	}

	let _b5: CubeEdge = {
		T: 'Edge',
		UFace: b7.UFace,
		FFace: b7.FFace
	}

	if (b1.T == 'Corner') {
		_b6 = {
			T: 'Corner',
			UFace: b1.SFace,
			FFace: b1.FFace,
			SFace: b1.UFace
		};
	}

	let _b7: CubeEdge = {
		T: 'Edge',
		UFace: b4.UFace,
		FFace: b4.FFace
	}

	if (b6.T == 'Corner') {
		_b8 = {
			T: 'Corner',
			UFace: b6.SFace,
			FFace: b6.FFace,
			SFace: b6.UFace
		};
	}

	cube[10] = _b1;
	cube[11] = _b2;
	cube[12] = _b3;
	cube[13] = _b4;
	cube[14] = _b5;
	cube[15] = _b6;
	cube[16] = _b7;
	cube[17] = _b8;
}

export function logCube(cube: CubePiece[]) {
	function convertColorToLetter(color: CubeColor): string {
		if (color == CubeColor.White) return 'WW'.white.bgWhite;
		else if (color == CubeColor.Green) return 'GG'.green.bgGreen;
		else if (color == CubeColor.Red) return 'RR'.red.bgRed;
		else if (color == CubeColor.Blue) return 'BB'.blue.bgBlue;
		else if (color == CubeColor.Orange) return 'OO'.magenta.bgMagenta;
		else if (color == CubeColor.Yellow) return 'YY'.yellow.bgYellow;

		return 'X'
	}

	const padding = ''.padEnd(6);

	// U Face
	console.log(padding + convertColorToLetter(cube[12].UFace) + convertColorToLetter(cube[11].UFace) + convertColorToLetter(cube[10].UFace));
	console.log(padding + convertColorToLetter(cube[18].UFace) + 'WW'.white.bgWhite + convertColorToLetter(cube[8].UFace));
	console.log(padding + convertColorToLetter(cube[0].UFace) + convertColorToLetter(cube[1].UFace) + convertColorToLetter(cube[2].UFace));

	// L, F, R and B Faces
	if (cube[12].T == 'Corner' && cube[0].T == 'Corner' && cube[2].T == 'Corner' && cube[10].T == 'Corner')
		console.log(convertColorToLetter(cube[12].SFace) + convertColorToLetter(cube[18].FFace) + convertColorToLetter(cube[0].SFace)+ convertColorToLetter(cube[0].FFace) + convertColorToLetter(cube[1].FFace) + convertColorToLetter(cube[2].FFace)+ convertColorToLetter(cube[2].SFace) + convertColorToLetter(cube[8].FFace) + convertColorToLetter(cube[10].SFace) + convertColorToLetter(cube[10].FFace) + convertColorToLetter(cube[11].FFace) + convertColorToLetter(cube[12].FFace));
	
	console.log(convertColorToLetter(cube[14].UFace) + 'OO'.magenta.bgMagenta + convertColorToLetter(cube[3].UFace)+ convertColorToLetter(cube[3].FFace) + 'GG'.green.bgGreen + convertColorToLetter(cube[4].FFace) + convertColorToLetter(cube[4].UFace) + 'RR'.red.bgRed + convertColorToLetter(cube[13].UFace)+ convertColorToLetter(cube[13].FFace) + 'BB'.blue.bgBlue + convertColorToLetter(cube[14].FFace));

	if (cube[17].T == 'Corner' && cube[5].T == 'Corner' && cube[7].T == 'Corner' && cube[15].T == 'Corner')
		console.log(convertColorToLetter(cube[17].SFace) + convertColorToLetter(cube[19].FFace) + convertColorToLetter(cube[5].SFace) + convertColorToLetter(cube[5].FFace) + convertColorToLetter(cube[6].FFace) + convertColorToLetter(cube[7].FFace)+ convertColorToLetter(cube[7].SFace) + convertColorToLetter(cube[9].FFace) + convertColorToLetter(cube[15].SFace)+ convertColorToLetter(cube[15].FFace) + convertColorToLetter(cube[16].FFace) + convertColorToLetter(cube[17].FFace));

	// B Face
	console.log(padding + convertColorToLetter(cube[5].UFace) + convertColorToLetter(cube[6].UFace) + convertColorToLetter(cube[7].UFace));
	console.log(padding + convertColorToLetter(cube[19].UFace) + 'YY'.yellow.bgYellow + convertColorToLetter(cube[9].UFace));
	console.log(padding + convertColorToLetter(cube[17].UFace) + convertColorToLetter(cube[16].UFace) + convertColorToLetter(cube[15].UFace));
}