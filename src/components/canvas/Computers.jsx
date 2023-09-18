import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* light */}
      <hemisphereLight intensity={5} groundColor="black" />
      <ambientLight intensity={0.15} />
      <directionalLight color="grey" position={[0, 0, 5]} />
      {/* light that points on object */}
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* elememt that hold object to which we can pass component */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  //this useeffect is to check the width of the screen and if it matches
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 912px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      // position takes x,y,z axis, fov means field of view i.e how wide field of view will be
      camera={{ position: [20, 3, 5], fov: 25 }}
      //to properly render gl has to be there
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* adding suspense enables us to have a loader while 3d is loading or sumn like that sha */}
      <Suspense fallback={<CanvasLoader />}>
        {/* orbitcontrols allows us to move image left and right, enable zoom for zooming effect and it is false cos we no wan dey zoom in and out */}
        <OrbitControls
          enableZoom={false}
          //polar angle allows us to rotate just through a specific angle not all the way up down , left and right you gettt
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
