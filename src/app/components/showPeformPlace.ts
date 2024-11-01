import * as THREE from 'three';
import { camera,scene } from './3dmodel';

const createPin = () => {
    // 円錐ジオメトリを作成（高さと底面の半径を設定）
    const coneGeometry = new THREE.ConeGeometry(0.5, 2, 32);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x4CC9FE });
    const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);

    // 円錐を逆さまにするためにX軸に180度回転
    coneMesh.rotation.x = Math.PI;

    return coneMesh;
};


const pinMesh = createPin();

export function showPerformPlace(gradeNum: number | undefined, classNum: number | undefined){
    if(gradeNum != undefined){
        scene.remove(pinMesh);
        camera.position.set(0,0,0);
        const GradeClassID = `G${gradeNum}C${classNum}`;//学年クラスをID化
        const position = classesPos[GradeClassID];//classesオブジェクトからIDのオブジェクトを持ってきてpositionに保存
        scene.add(pinMesh);
        pinMesh.position.set(position.x,position.y + 1,position.z);
        camera.position.set(-100, 100, 100);
    }
}

const classesPos:{[key: string]: { x: number; y: number; z: number }} = {
    G1C1:{ x:-9,  y: 12, z: 22, },
    G1C2:{ x:-15, y: 12, z: 22, },
    G1C3:{ x:-25, y: 12, z: 22, },
    G1C4:{ x:-35, y: 12, z: 22, },
    G1C5:{ x:-42, y: 12, z: 22, },

    G2C1:{ x: 18, y: 11, z: 26, },
    G2C2:{ x: 27, y: 11, z: 26, },
    G2C3:{ x: 34, y: 11, z: 24, },
    G2C4:{ x: 27, y: 11, z: 26, },
    G2C5:{ x: 34, y: 11, z: 24, },

    G3C1:{ x: 18, y: 11, z: 26, },
    G3C2:{ x: 32, y: 11, z: 24, },
    G3C3:{ x: 27, y: 11, z: 26, },
    G3C4:{ x: 37, y: 11, z: 26, },
    G3C5:{ x: 18, y: 11, z: 26, },

    G4C1:{ x:-27, y: 10, z:-16, },
    G4C2:{ x: 15, y: 15, z: 43, },
    G4C3:{ x:-42, y: 10, z:-14, },
    G4C4:{ x: 15, y: 15, z: 39, },
    G4C5:{ x: 14, y: 11, z: 6 , },

    G5C1:{ x:-23, y: 10, z:-16, },
    G5C2:{ x:-42, y: 12, z: 22, },
    G5C3:{ x:-36, y: 10, z:-14, },
    G5C4:{ x: 20, y: 15, z: 39, },
    G5C5:{ x: 20, y: 11, z: 6,  },
};