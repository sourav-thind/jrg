import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Scene = () => {
  const { scene } = useGLTF('/models/scene.glb'); // Path to your .glb model
  return <primitive object={scene} />;
};

const MainSetup = () => {
  const cameraRef = useRef();
  const [index, setIndex] = useState(0);

  // Define camera positions and rotations
  const cameraPositions = [
    { position: [0, 0, 3], rotation: [0, 0, 0] },
    { position: [5, 2, 0], rotation: [0, Math.PI / 2, 0] },
    { position: [0, 2, -5], rotation: [0, Math.PI, 0] },
  ];

  const handleNext = () => {
    if (index < cameraPositions.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      // Scroll to the next section when the last view is reached
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <Canvas
        camera={{
          position: cameraPositions[index].position,
          rotation: cameraPositions[index].rotation,
        }}
      >
        <ambientLight intensity={0.5} />
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Buttons */}
      <div className="absolute bottom-10 w-full flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-800 text-white rounded"
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainSetup;
