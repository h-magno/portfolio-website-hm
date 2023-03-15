import Tilt from 'react-parallax-tilt';import videoTemplate from '../../../../../public/videoTemplate.jpg';

const VideoTitle = () => {
    return (


            <div
                style={{
                    backgroundImage: `url('${videoTemplate.src}')`,
                    backgroundSize: 'cover'
                }}
                className="aspect-video  w-full rounded-3xl bg-black"
            ></div>

       
    );}
//     return (
       
//             <div
//                 className={`aspect-video  w-full rounded-3xl bg-gray-600`}
//             ></div>{' '}
       
//     );
// };

export default VideoTitle;
