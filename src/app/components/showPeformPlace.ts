import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { camera,scene } from './3dmodel';

const createRoundedRectangleSpeechBubble = () => {
    const shape = new THREE.Shape();
    const width = 7.5;   // 吹き出しの幅
    const height = 4.5;  // 吹き出しの高さ
    const radius = 0.9;  // 角の丸みの半径
    
    // 長方形の輪郭を作成
    shape.moveTo(-width / 2 + radius, height / 2); // 上辺左
    shape.lineTo(width / 2 - radius, height / 2);  // 上辺右
    shape.quadraticCurveTo(width / 2, height / 2, width / 2, height / 2 - radius); // 右上カーブ
    
    shape.lineTo(width / 2, -height / 2 + radius); // 右辺下
    shape.quadraticCurveTo(width / 2, -height / 2, width / 2 - radius, -height / 2); // 右下カーブ
    
    shape.lineTo(0.5, -height / 2);  // 吹き出し下辺中央左端まで移動
    
    // 吹き出しの尾を描画（オブジェクトの中心へ向かう）
    shape.lineTo(0, 0);  // 尾の先端（オブジェクトの中心）
    shape.lineTo(-0.5, -height / 2); // 吹き出し下辺中央右端
    
    shape.lineTo(-width / 2 + radius, -height / 2); // 下辺左
    shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2, -height / 2 + radius); // 左下カーブ
    
    shape.lineTo(-width / 2, height / 2 - radius); // 左辺上
    shape.quadraticCurveTo(-width / 2, height / 2, -width / 2 + radius, height / 2); // 左上カーブ
    
    return shape;
};

const bubbleShape = createRoundedRectangleSpeechBubble();
const extrudeSettings = {
    depth: 0.2,   // 厚み
    bevelEnabled: false
};
const bubbleGeometry = new THREE.ExtrudeGeometry(bubbleShape, extrudeSettings);
const bubbleMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff, side: THREE.DoubleSide });
const bubbleMesh = new THREE.Mesh(bubbleGeometry, bubbleMaterial);


export function showPerformPlace(gradeNum: number, classNum: number){ 
    const GradeClassID = `G${gradeNum}C${classNum}`;//学年クラスをID化
    const position = classesPos[GradeClassID];//classesオブジェクトからIDのオブジェクトを持ってきてpositionに保存
    scene.add(bubbleMesh);
    bubbleMesh.position.set(position.x,position.y,position.z);
    camera.position.set(position.x,position.y,position.z);
    camera.lookAt(new THREE.Vector3(position.x,position.y,position.z));
}

const classesPos:{[key: string]: { x: number; y: number; z: number }} = {
    G1C1:{ x:-9,  y: 9, z: 22, },
    G1C2:{ x:-15, y: 9, z: 22, },
    G1C4:{ x:-35, y: 9, z: 22, },
    G1C3:{ x:-25, y: 9, z: 22, },
    G1C5:{ x:-42, y: 9, z: 22, },
    G2C3:{ x: 34, y: 4, z: 24, },
    G2C2:{ x: 27, y: 4, z: 26, },
    G2C1:{ x: 22, y: 4, z: 26, },
    G2C4:{ x: 27, y: 6, z: 26, },
    G2C5:{ x: 22, y: 6, z: 26, },
    G3C1:{ x: 34, y: 6, z: 24, },
    G3C2:{ x: 34, y: 8, z: 24, },
    G3C3:{ x: 31, y: 8, z: 24, },
    G3C4:{ x: 27, y: 8, z: 26, },
    G3C5:{ x: 22, y: 6, z: 26, },
    G4C1:{ x:-27, y: 7, z:-16, },
    G4C2:{ x: 15, y: 5, z: 43  },
    G4C3:{ x:-42, y: 7, z:-14, },
    G4C4:{ x: 15, y: 7, z: 39, },
    G4C5:{ x: 14, y: 8, z: 6,  },
    G5C1:{ x:-23, y: 7, z:-16, },
    G5C2:{ x:-42, y: 7, z: 22, },
    G5C3:{ x:-36, y: 7, z:-14, },
    G5C4:{ x: 20, y: 7, z: 39, },
    G5C5:{ x: 20, y: 8, z: 6,  },
};