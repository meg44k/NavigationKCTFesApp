"use client";

import React, { useEffect, useState } from "react"
import './3dmodel.css';
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

interface Position {
    latitude: number;//緯度
    longitude: number;//経度
}

function Modelcanvas() {
    const [position, setPosition] = useState<Position | null>(null);
    const [error, setError] = useState<string | null>(null);

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
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        //  canvasのサイズを指定
        renderer.setSize(width, height);
        document.body.appendChild(renderer.domElement);

        //  シーンを作成、シーンは3D空間のこと
        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x3B3D3D );

        // カメラの作成 new THREE.PerspectiveCamera(画角, アスペクト比)
        const camera = new THREE.PerspectiveCamera(45, width / height);
        camera.position.set(-100, 100, 100);

        const controls = new OrbitControls(camera, document.body);
        controls.minPolarAngle = Math.PI / 4; // 最小の垂直角度 (45度)
        controls.maxPolarAngle = Math.PI / 2; // 最大の垂直角度 (90度)
        // カメラの位置を制限するための関数
        controls.addEventListener('change', () => {
            if (camera.position.y < 0) {
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
        const manager = new THREE.LoadingManager();
        manager.addHandler(/\.dds$/i, new DDSLoader()); // DDSローダーの準備
        
        // MTLファイルの読み込み
        new MTLLoader(manager).load(
            'models/v2/KCTSchoolModel.mtl',
            // ロード完了時の処理
            function (materials) {
                materials.preload();

                // OBJファイルの読み込み
                new OBJLoader(manager)
                    .setMaterials(materials) // マテリアルの指定
                    .load(
                        'models/v2/KCTSchoolModel.obj',
                        // ロード完了時の処理
                        function (object) {
                            // シーンへのモデルの追加
                            scene.add(object);
                            object.position.x = 0;
                            object.position.y = 0;
                        });
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
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.2,
                    bevelSize: 0.2,
                    bevelOffset: 0,
                    bevelSegments: 5
                });
                const textMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
                const borderMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

                const textMesh = new THREE.Mesh(textGeometry, [textMaterial, borderMaterial]);

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

            createText('1号館', new THREE.Vector3(-20, 15, 23));
            createText('2号館', new THREE.Vector3(-24, 15, 7));
            createText('3号館', new THREE.Vector3(-20, 15, -15));
            createText('4号館', new THREE.Vector3(20, 20, 40));
            createText('5号館', new THREE.Vector3(35, 20, 40));
            createText('6号館', new THREE.Vector3(20, 15, 23));
            createText('7号館', new THREE.Vector3(20, 15, 7));
            createText('8号館', new THREE.Vector3(20, 15, -13));
            createText('ライブ会場', new THREE.Vector3(-40, 15, -40));
        });

        //--------------現在地のマーカーを表示--------------------------------
        const markerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const LARGE_NUM : number = 10000;
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        scene.add(marker);
        const updatePosition = (latitude: number, longitude: number) => {

            //3Dモデルの原点
            const zeroPoint : Position = {latitude: 33.816035, longitude: 130.87196};

            // 33.816432,130.871320 最終桁は停止時でも+-3程度変動
            // 小数点以下5桁目で計算する
            //33.81603 - 33.81643 = -0.0004 * 10000 = -4
            //130.87196 - 130.87132 = 0.00064 * 10000 = 6.4　８0m

            const markX = (latitude  * LARGE_NUM) - (zeroPoint.latitude * LARGE_NUM);//ここをマイナスすると、上にマーカーが移動
            console.log(markX);
            const markZ = (longitude  * LARGE_NUM) - (zeroPoint.longitude * LARGE_NUM);//ここをマイナスすると、右にマーカーが移動
            console.log(markZ);
            marker.position.set(markX, 5, markZ);
        };

        //---------------自分の位置を取得--------------------------------------
        const watchPosition = () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.watchPosition(
                    (pos) => {
                        const newPosition = {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                        };
                        setPosition(newPosition);
                        updatePosition(newPosition.latitude, newPosition.longitude);
                    },
                    (err) => {
                        setError(`エラー: ${err.message}`);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                    }
                );
            } else {
                setError('Geolocation APIがサポートされていません。');
            }
        };

        watchPosition();

        // -------------アニメーションの設定-----------------------------------
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

        // -------------画面サイズの変更に合わせてリサイズ-------------------------

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
            {/* {position && (
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    padding: '10px',
                    borderRadius: '5px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    zIndex: 1000
                }}>
                    <p>緯度: {position.latitude.toFixed(6)}</p>
                    <p>経度: {position.longitude.toFixed(6)}</p>
                </div>
            )}
            {error && (
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(255, 0, 0, 0.7)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    zIndex: 1000
                }}>
                    {error}
                </div>
            )} */}
        </>
    );
}

export default Modelcanvas;

