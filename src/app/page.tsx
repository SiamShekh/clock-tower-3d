"use client";

import gsap from "gsap";
import { useEffect } from "react";
import * as Three from "three";
import { GLTF, GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

const page = () => {

  const cameraPos = [
    {
      "x": -101.72129154324882,
      "y": 7.768143595035065,
      "z": 764.0825821149286
    },
    {
      "x": -89.41545987968975,
      "y": -2.544517312971137,
      "z": 654.905713285696
    },
    {
      "x": -106.97607315667055,
      "y": 30.082251902483517,
      "z": 587.5903401862503
    },
    {
      "x": -89.58470753527214,
      "y": 30.66038513487406,
      "z": 429.5022301155545
    },
    {
      "x": -71.08868230821551,
      "y": 38.75872255920883,
      "z": 294.65671578095294
    },
    // {
    //   "x": -77.84512166238031,
    //   "y": 36.23744732017233,
    //   "z": 348.01072864545307
    // },

    {
      "x": 80,
      "y": 7,
      "z": 160
    }
  ]


  const animation = [
    {
      "position": {
        "x": -89.59106884341111,
        "y": 6.140784471207979,
        "z": 766.2585530823567
      },
      "rotation": {
        "isEuler": true,
        "_x": -0.008013813339834804,
        "_y": -0.11638800031855621,
        "_z": -0.0009306270107383159,
        "_order": "XYZ"
      },
      "target": {
        "x": 0,
        "y": 0,
        "z": 0
      }
    },
    {
      "position": {
        "x": -95.36685381378005,
        "y": 36.15408363944077,
        "z": 589.2255875785619
      },
      "rotation": {
        "isEuler": true,
        "_x": -0.06228290724289158,
        "_y": -0.16209151807752703,
        "_z": -0.010064058643859269,
        "_order": "XYZ"
      },
      "target": {
        "x": 1.1376925170194707,
        "y": -0.5782523229507114,
        "z": 0.22246581380412722
      }
    },
    {
      "position": {
        "x": -74.20458506945111,
        "y": 37.20394216747848,
        "z": 431.81908876673094
      },
      "rotation": {
        "isEuler": true,
        "_x": -0.06128181574119921,
        "_y": -0.1601636307660957,
        "_z": -0.009785148750523241,
        "_order": "XYZ"
      },
      "target": {
        "x": -4.101184196521555,
        "y": 10.627368471147594,
        "z": -1.3158624110204742
      }
    },
    {
      "position": {
        "x": -68.34316082120803,
        "y": 39.47799135670623,
        "z": 302.6482042280835
      },
      "rotation": {
        "isEuler": true,
        "_x": -0.10251757179016885,
        "_y": -0.1010278481838174,
        "_z": -0.010375522984300112,
        "_order": "XYZ"
      },
      "target": {
        "x": -36.997351103480526,
        "y": 7.833755243089635,
        "z": -4.9410125236844795
      }
    },
    {
      "position": {
        "x": -65.95108943468873,
        "y": 41.14899559269994,
        "z": 256.8696067897603
      },
      "rotation": {
        "isEuler": true,
        "_x": -0.1297094853320742,
        "_y": -0.22028643118138258,
        "_z": -0.02849502161443923,
        "_order": "XYZ"
      },
      "target": {
        "x": -7.35537192560556,
        "y": 7.301552753243946,
        "z": -2.613397310292596
      }
    },
    {
      "position": {
        "x": -51.90026135123959,
        "y": 35.43739160741739,
        "z": 197.96157005983397
      },
      "rotation": {
        "isEuler": true,
        "_x": -0.15884451196272448,
        "_y": -0.24828603263997334,
        "_z": -0.03934624788088123,
        "_order": "XYZ"
      },
      "target": {
        "x": -0.8685655393198173,
        "y": 3.597083220514682,
        "z": -0.7992350972029731
      }
    },
    {
      "position": {
        "x": -29.58877169991011,
        "y": -4.034199135702444,
        "z": 76.18204879848741
      },
      "rotation": {
        "isEuler": true,
        "_x": 0.09341937477174954,
        "_y": -0.3585334841448653,
        "_z": 0.03286484287495132,
        "_order": "XYZ"
      },
      "target": {
        "x": -0.6392703676576037,
        "y": 3.1723657419518787,
        "z": -0.735489550982189
      }
    },
    // {
    //   "position": {
    //     "x": 15.181208755341835,
    //     "y": -3.5355895076879875,
    //     "z": -78.42225155595366
    //   },
    //   "rotation": {
    //     "isEuler": true,
    //     "_x": 2.8570324564144856,
    //     "_y": 0.1257543689273308,
    //     "_z": -3.104923054946522,
    //     "_order": "XYZ"
    //   },
    //   "target": {
    //     "x": 4.871116163950245,
    //     "y": 19.359312275186813,
    //     "z": -0.14857763470073002
    //   }
    // },
    {
      "position": {
        "x": -23.420471614005237,
        "y": 137.78914342338055,
        "z": -460.2323545017668
      },
      "rotation": {
        "isEuler": true,
        "_x": -3.0820289705745414,
        "_y": 0.08749411770008181,
        "_z": 3.1363817114501717,
        "_order": "XYZ"
      },
      "target": {
        "x": -65.48842894695373,
        "y": 109.24039385411368,
        "z": 18.4986117289315
      }
    }
  ]

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    console.log({ width: Number(canvas?.clientWidth), height: Number(canvas?.clientHeight) });

    const camera = new Three.PerspectiveCamera(20, Number(canvas?.clientWidth) / Number(canvas?.clientHeight), 0.2, 1000);
    // camera.position.z = 2;
    const pos = animation[7]
    //   {
    //     "x": -139.16394019416737,
    //     "y": 35.89541802562928,
    //     "z": 177.304312228526
    // }
    //   const pos =  {
    //     "x": -35.51070851449893,
    //     "y": 100.85891678359616,
    //     "z": 207.07287142107864
    // }
    camera.position.set(pos?.position?.x, pos?.position?.y, pos?.position?.z);
    camera.rotation.set(pos?.rotation?._x, pos?.rotation?._y, pos?.rotation?._z);
    camera.lookAt(pos?.target?.x, pos?.target?.y, pos?.target?.z);
    const scene = new Three.Scene();
    scene.add(camera);

    const light = new Three.AmbientLight(0xffffff, 1);
    scene.add(light);
    const sun = new Three.DirectionalLight(0xffffff, 1.3);
    sun.position.set(500, 500, 500);
    scene.add(sun);


    const loader = new GLTFLoader();
    var clock: GLTF;
    loader.load("/clock_tower_free_fire_model.glb",
      (gltf) => {
        clock = gltf;
        console.log(gltf);
        // gltf.scene.position.set(0,-100,20);
        gltf.scene.position.set(85, -90, 200);
        scene.add(gltf.scene);
      }
    );

    const renderer = new Three.WebGLRenderer({});
    // const orbit = new OrbitControls(camera, renderer.domElement);
    renderer.setSize(Number(canvas?.clientWidth), Number(canvas?.clientHeight));
    canvas?.appendChild(renderer.domElement);

    const reRender = () => {
      requestAnimationFrame(reRender);
      renderer.render(scene, camera);
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollRatio = Math.round(scrollPosition / viewportHeight);
      const anim = animation[scrollRatio];

      camera.position.set(anim?.position?.x, anim?.position?.y, anim?.position?.z);
      camera.rotation.set(anim?.rotation?._x, anim?.rotation?._y, anim?.rotation?._z);
      camera.lookAt(anim?.target?.x, anim?.target?.y, anim?.target?.z);
      // camera.position.set(cameraPos[scrollRatio]?.x, cameraPos[scrollRatio]?.y, cameraPos[scrollRatio]?.z);
      gsap.to(camera.position, {
        x: anim?.position.x,
        y: anim?.position?.y,
        z: anim?.position?.z,
        duration: 5,
      });

      // console.log(camera.position);
      // console.log("Camera Position:", camera.position);
      // console.log("Camera Rotation:", camera.rotation); 
      // console.log({ position: camera.position, rotation: camera.rotation, target: orbit.target });

      // orbit.update()
    }
    reRender();

    () => {
      canvas?.removeChild(renderer.domElement);
    }
  }, []);

  // document?.addEventListener("scroll", () => {
  //   const scrollPosition = window.scrollY;
  //   const viewportHeight = window.innerHeight;
  //   const scrollRatio = Math.floor(scrollPosition / viewportHeight);

  //   const body = document.getElementById("body");
  //   if (!body) return;

  //   // Calculate the new height in vh
  //   const newHeight = (scrollRatio + 2) * 100; // +2 gives a buffer so user can keep scrolling

  //   // Update only if the height actually changed
  //   const currentHeight = parseInt(body.style.height || "0");
  //   if (currentHeight !== newHeight) {
  //     body.style.height = `${newHeight}vh`;
  //   }
  // });


  return (
    <div id="body" className="h-[800vh] relative">
      <div id="canvas" className="w-full fixed inset-0 h-screen">

      </div>

    </div>
  );
};

export default page;