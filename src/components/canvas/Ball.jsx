import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // the imgUrl is coming from the icon object in technologies from the constant index.js file

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3}>
        {/* the thing that makes the ball go rounddddddddd like all those fidget spinners */}
        <icosahedronGeometry args={[1, 1]} />
        {/* the material is the dark color of the ball */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]} //for it to not be showing in a mirror type of way as in st in stead of ts
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      //to properly render gl has to be there
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* adding suspense enables us to have a loader while 3d is loading or sumn like that sha */}
      <Suspense fallback={<CanvasLoader />}>
        {/* orbitcontrols allows us to move image left and right, enable zoom for zooming effect and it is false cos we no wan dey zoom in and out */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
