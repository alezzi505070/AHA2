import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const ParticleField = () => {
  const ref = useRef<any>(null);
  const count = 2000;
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    return pos;
  }, [count]);

  useFrame(({ clock, mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.02;
      ref.current.rotation.x = mouse.y * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#C4A35A"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};
