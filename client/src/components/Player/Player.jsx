import React, { useEffect, useState } from 'react';
import Amplitude from 'amplitudejs';


function AudioPlayer(){
  const [isPlaying, setIsPlaying] = useState(false);
  const songList = [];
  
  useEffect(() => {
    Amplitude.init({
      songs: songList
    });
  }, [songList])

  const handlePlayPause = () => {
    if(isPlaying) Amplitude.pause();
    else Amplitude.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
    </div>
  )
}

function Player() {

  return (
    <div className='w-full h-[72px] rounded-md bg-transparent flex justify-between'>
      <div className='w-[250px] flex-shrink-0 px-6'>
        <a href='/song-name' className='w-full h-[60px] flex gap-2 my-1 rounded-md hover:bg-hover transition-all duration-300'>
          <div className='w-[60px] h-[60px] flex-shrink-0 rounded-md'>
            <img src='#' alt='name' className='w-full h-full rounded-md' />
          </div>
          <div className='flex-grow flex flex-col justify-center'>
            <h1 className='text-primary font-semibold'>Hip Hop</h1>
            <p className='text-secondary text-sm'>Yo Yo Honey Singh</p>
          </div>
        </a>
      </div>
      <div className='flex-grow'>
        <AudioPlayer />
      </div>
      <div className='w-[250px] flex-shrink-0'></div>
    </div>
  )
}

export default Player