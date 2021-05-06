import { CubeColor } from "./CubeColor";
import { CubeCornerOrientation } from "./CubeCornerOrientation";

export interface CubeCorner {
	T: 'Corner';
	UFace: CubeColor;
	FFace: CubeColor;
	SFace: CubeColor;
	Orientation?: CubeCornerOrientation;
}