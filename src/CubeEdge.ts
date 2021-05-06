import { CubeColor } from "./CubeColor";
import { CubeEdgeOrientation } from "./CubeEdgeOrientation";

export interface CubeEdge {
	T: 'Edge';
	UFace: CubeColor;
	FFace: CubeColor;
	Orientation?: CubeEdgeOrientation;
}