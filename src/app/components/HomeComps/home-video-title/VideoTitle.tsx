import { useState, useRef, useEffect } from 'react';import Tilt from 'react-parallax-tilt';
import videoTemplate from '../../../../../public/videoTemplate.jpg';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';

const videoURL = 'https://www.youtube.com/watch?v=ZaYvwn9nBD4&ab_channel=Alura';

const usePlayerState = (videoPlayerRef: any) => {
    const [playerState, setPlayerState] = useState({
        playing: true,
        muted: true,
        percentage: 0.0,
        volume: 0
    });

    useEffect(() => {
        console.log(videoPlayerRef.current.volume);

        playerState.playing
            ? videoPlayerRef.current.play()
            : videoPlayerRef.current.pause();
    }, [playerState.playing]);

    const toggleVideoPlay = () => {
        setPlayerState({
            ...playerState,
            playing: !playerState.playing
        });
    };

    const handleTimeUpdate = () => {
        const currentPercentage =
            (videoPlayerRef.current.currentTime /
                videoPlayerRef.current.duration) *
            100;
        setPlayerState({
            ...playerState,
            percentage: currentPercentage
        });
    };

    const handleChangerVideoPercentage = (event: any) => {
        const currentPercentageValue = event.target.value;
        videoPlayerRef.current.currentTime =
            (videoPlayerRef.current.duration / 100) * currentPercentageValue;

        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue
        });
    };

    return {
        playerState,

        toggleVideoPlay,
        handleTimeUpdate,
        handleChangerVideoPercentage
    };
};

const VideoTitle = () => {
    let videoPlayerRef = useRef<any>(null);
    const {
        playerState,

        toggleVideoPlay,
        handleTimeUpdate,
        handleChangerVideoPercentage
    } = usePlayerState(videoPlayerRef);
    return (
        <div className="videoWrapper aspect-video w-full rounded-3xl  ">
            <video
                loop
                autoPlay
                muted
                ref={videoPlayerRef}
                src={'homeVideoTestDois.mp4'}
                // poster="https://mir-s3-cdn-cf.behance.net/projects/404/b2978d144842697.Y3JvcCwyNzYxLDIxNjAsNTQwLDA.png"
                onTimeUpdate={handleTimeUpdate}
                className="h-full w-full rounded-t-3xl"
            />

            <div className="controls videoBG flex h-14 items-center  rounded-b-3xl">
                <button
                    className="h-full w-1/5 rounded-bl-3xl duration-500 mr-3 hover:bg-blue-800 hover:bg-opacity-5 "
                    onClick={toggleVideoPlay}
                >
                    {playerState.playing ? (
                        <PauseIcon className="text-white" />
                    ) : (
                        <PlayArrowSharpIcon className="text-white" />
                    )}
                </button>


                <input
                    onChange={handleChangerVideoPercentage}
                    type="range"
                    min="0"
                    max="100"
                    value={playerState.percentage}
                    className="range range-success range-xs w-3/5 bg-blue-800 "
                />

                <div className="f w-1/5 px-5 text-gray-900">
                    <select className="w-full rounded-xl text-center">
                        {[1, 1.5, 2].map((speed: number) => {
                            return (
                                <option key={`speedChange_${speed}`}>
                                    x{speed}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </div>

        // <div
        //     style={{
        //         backgroundImage: `url('${videoTemplate.src}')`,
        //         backgroundSize: 'cover'
        //     }}
        //     className="aspect-video  w-full rounded-3xl bg-black"
        // ></div>
    );
};

export default VideoTitle;
