import Tilt from 'react-parallax-tilt'
import videoTemplate from '../../../../../public/videoTemplate.jpg';


const VideoTitle = () => {    
    return (
        <Tilt
            className={' rounded-3xl'}
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            glareMaxOpacity={0.5}
            glareColor={'red'}
            glareReverse={true}
            glareBorderRadius={'1.5rem'}
        >
            <div
                style={{
                    backgroundImage: `url('${videoTemplate.src}')`,
                    backgroundSize: 'cover'
                }}
                className={`aspect-video  w-full rounded-3xl bg-gray-600`}
            ></div>{' '}
        </Tilt>
    );
};

export default VideoTitle;
