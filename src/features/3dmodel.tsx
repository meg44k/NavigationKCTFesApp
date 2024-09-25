"use client";

import React, { useEffect } from "react"
import './3dmodel.css';
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

function Modelcanvas() {  
    useEffect(() => {
        //--------------3D空間を扱うための設定--------------------------
        const width = window.innerWidth;
        const height = window.innerHeight;

        const canvas = document.querySelector('#myCanvas') as HTMLCanvasElement | null;

        if (!canvas) {
            console.error('Canvas element not found');
            return;
          }
      
        // WebGLRendererの作成
        const renderer = new THREE.WebGLRenderer({ canvas });
        //  canvasのサイズを指定
        renderer.setSize( width, height );
        document.body.appendChild( renderer.domElement );

        //  シーンを作成、シーンは3D空間のこと
        const scene = new THREE.Scene();

        // カメラの作成 new THREE.PerspectiveCamera(画角, アスペクト比)
        const camera = new THREE.PerspectiveCamera(45, width / height);
        camera.position.set(-100, 100, 100);

        const controls = new OrbitControls(camera, document.body);
        controls.minPolarAngle = Math.PI / 4; // 最小の垂直角度 (45度)
        controls.maxPolarAngle = Math.PI / 2; // 最大の垂直角度 (90度)
        // カメラの位置を制限するための関数
        controls.addEventListener('change', () => {
            if (camera.position.y < -2) {
                camera.position.y = 0;
            }
        });

         // 環境光源を作成
        const ambientLight = new THREE.AmbientLight(0xffffff);
        ambientLight.intensity = 0.5;
        scene.add(ambientLight);

        // 平行光源を作成
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.intensity = 1;
        directionalLight.position.set(1, 3, 1);
        scene.add(directionalLight);

        //--------------設置するオブジェクトの作成--------------------------

            // 3Dモデルの読み込み
        const loader = new OBJLoader();
        loader.load(
            './models/KCTSchoolModel.obj',
            function (obj) {
                scene.add(obj);
                obj.position.x = 0;
                obj.position.y = 0;
            },
        );

        //--------------font.jsonファイルの読み込み--------------------------
        const fontLoader = new FontLoader();
        fontLoader.load('./fonts/helvetiker_regular.typeface.json', (font) => {
            const createText = (text: string, position: THREE.Vector3, rotation: THREE.Euler = new THREE.Euler(0, 0, 0)) => {
                const textGeometry = new TextGeometry(text, {
                    font: font,
                    size: 5,
                    height: 1,
                });
                const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.copy(position);
                textMesh.rotation.copy(rotation);
                textMesh.userData.text = text;
                scene.add(textMesh);
            };

            createText('Building A', new THREE.Vector3(0, 20, 0));
            createText('Building B', new THREE.Vector3(0, 10, 0));
        });

//         // -------------アニメーションの設定-----------------------------------

        tick();
        function tick(){
            //  引数に渡された関数を毎フレーム呼び出す
            requestAnimationFrame(tick);
            //シーンとカメラをレンダリングする
            renderer.render(scene, camera);
        }

//         // -------------画面サイズの変更に合わせてリサイズ-------------------------

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
    }, []);
    return (
      <>
        <canvas id="myCanvas"></canvas>
      </>
    );
}

export default Modelcanvas;
