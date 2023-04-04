import { OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export interface IThree {}
type BoxProps = {
  position: [number, number, number];
};
type SphereProps = {
  position: [number, number, number];
};
function Box(props: BoxProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hover and clicked events
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta;
      ref.current.rotation.x += delta;
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={click ? 2.9 : 2.5}
      onClick={() => setClick(!click)}
      onPointerOver={() => setHover(!hover)}
      onPointerOut={() => setHover(!hover)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={click ? 'hotpink' : 'red'} />
    </mesh>
  );
}
function SphereMesh(props: SphereProps) {
  const ref = useRef<any>();
  const sphereRef = useRef<any>();
  const lightRef = useRef<any>();
  // Hold state for hover and clicked events
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh and light every frame
  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta;
    }
    if (lightRef.current) {
      lightRef.current.position.x = 10 * Math.sin(state.clock.elapsedTime);
      lightRef.current.position.z = 10 * Math.cos(state.clock.elapsedTime);
    }
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={click ? 2.9 : 2.5}
      onClick={() => setClick(!click)}
      onPointerOver={() => setHover(!hover)}
      onPointerOut={() => setHover(!hover)}
    >
      <Sphere {...props} ref={sphereRef} args={[1, 32, 32]}>
        <meshStandardMaterial color={click ? 'blue' : 'red'} />
      </Sphere>
      <pointLight ref={lightRef} position={[10, 0, 0]} />
    </mesh>
  );
}
const Three: React.FC<IThree> = () => {
  return (
    <div className="flexCenter">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[2, 0, 0]} />
        <OrbitControls />
      </Canvas>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={2} />
        <pointLight position={[-10, -10, -10]} />
        <SphereMesh position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Three;
