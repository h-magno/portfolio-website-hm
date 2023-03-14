import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../../react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../../react-three-fiber/sphere2/Sphere2';
import ReflectorComp from '../../reflector/ReflectorComp';
import { Suspense } from 'react';
import { useWindowSize } from 'react-use';

const HomeBG = () => {
    const { width: windowWidth, height: windowHeigh } = useWindowSize();

    return (
        <div
            style={{ height: '200vh' }}
            className="absolute top-0 -z-10 w-full"
        >
            <Canvas
                camera={{
                    fov: 20,
                    position: [
                        8.456852303528139, 5.451671860941685, 7.850283038832504
                    ]
                }}
            >
                <ambientLight color={'blue'} intensity={0.5} />
                <pointLight
                    color={'blue'}
                    position={[5, 5.4, 6]}
                    intensity={5}
                />
                <axesHelper args={[10]} />
                <MyCameraRef></MyCameraRef>
                <Suspense fallback={null}>
                    <Sphere2
                        position={
                            windowWidth <= 912
                                ? [6.77, 4.36, 6.05]
                                : [7, 4.4, 6]
                        }
                        rotation-x={1}
                        rotation-y={0}
                        rotation-z={0}
                    />
                </Suspense>
                <ReflectorComp
                    position={[7, 4.4, 6]}
                    rotation-x={15}
                    rotation-y={3}
                />
            </Canvas>
        </div>
    );
};

export default HomeBG;
