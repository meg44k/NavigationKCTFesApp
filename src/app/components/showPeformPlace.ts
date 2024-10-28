// 吹き出しの形状を定義
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';


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
    
    shape.lineTo(width / 2 - radius, -height / 2); // 下辺右
    shape.lineTo(0.2, -height / 2);  // 吹き出し下辺中央左端まで移動
    
    // 吹き出しの尾を描画（下辺の真ん中）
    shape.lineTo(0, -height / 1.5 - 0.5);  // 尾の先端
    shape.lineTo(-0.2, -height / 2);     // 吹き出し下辺中央右端
    
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

export function showPerformPlace(x: number,y: number,z: number, scene: THREE.Scene, camera:THREE.PerspectiveCamera){
    scene.add(bubbleMesh);
    bubbleMesh.position.set(x,y,z);
    camera.position.set(x - 30,y + 30,z - 30)
}