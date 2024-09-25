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
                const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xebebeb });
                obj.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.material = lambertMaterial;
                    }
                });
                scene.add(obj);
                obj.position.x = 0;
                obj.position.y = 0;
            },
        );

        //--------------font.jsonファイルの読み込み--------------------------
        const fontLoader = new FontLoader();
        fontLoader.load('/fonts/NotoSansJPRegular.json', (font) => {
            const createText = (text: string, position: THREE.Vector3) => {
                const textGeometry = new TextGeometry(text, {
                    font: font,
                    size: 3,
                    height: 1,
                });
                const textMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);

                // テキストの中心を計算
                textGeometry.computeBoundingBox();
                const centerOffset = new THREE.Vector3();
                if (textGeometry.boundingBox) {
                    textGeometry.boundingBox.getCenter(centerOffset);
                }

                // テキストメッシュをグループに追加し、ピボットポイントを調整
                const textGroup = new THREE.Group();
                textMesh.position.sub(centerOffset);
                textGroup.add(textMesh);
                textGroup.position.copy(position);

                textGroup.userData.text = text;
                scene.add(textGroup);
            };
            
            createText('1号館', new THREE.Vector3(-20, 15, 15));
            createText('2号館', new THREE.Vector3(-20, 15, 0));
            createText('3号館', new THREE.Vector3(-20, 15, -20));
            createText('4号館', new THREE.Vector3(20, 20, 35));
            createText('5号館', new THREE.Vector3(40, 20, 35));
            createText('6号館', new THREE.Vector3(20, 20, 18));
            createText('7号館', new THREE.Vector3(20, 20, 2));
            createText('8号館', new THREE.Vector3(20, 20, -18));
        });

//         // -------------アニメーションの設定-----------------------------------
        function tick() {
            requestAnimationFrame(tick);
            controls.update();

            // テキストをカメラの方向に向ける
            scene.traverse((object) => {
                if (object instanceof THREE.Group && object.userData.text) {
                    object.lookAt(camera.position);
                }
            });

            renderer.render(scene, camera);
        }
        tick();

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
