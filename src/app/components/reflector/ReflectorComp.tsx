import { Reflector } from '@react-three/drei';
export default function ReflectorComp(props: any) {
    return (
        <Reflector
            {...props}
            blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
            mixBlur={0.75} // How much blur mixes with surface roughness
            mixStrength={0.05} // Strength of the reflections
            resolution={2024} // Off-buffer resolution, lower=faster, higher=better quality
            args={[7, 30]} // PlaneBufferGeometry arguments
            mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
            minDepthThreshold={0.25}
            maxDepthThreshold={1}
            depthScale={50}
        ></Reflector>
    );
}
