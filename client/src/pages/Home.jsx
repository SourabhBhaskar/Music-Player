import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import Player from '../components/Player/Player';


function Home() {
  return (
    <div className='w-screen h-screen flex flex-col gap-2 p-2'>
        <div className='w-full flex-grow flex gap-2'>
            <div className='w-[420px] h-full flex-shrink-0 flex flex-col gap-2'>
                <div className='w-full h-[112px] flex-shrink-0 '>
                    <Navbar />
                </div>
                <div className='flex-grow'>
                    <Sidebar />
                </div>
            </div>
            <div className='flex-grow'>
                <Main />
            </div>
        </div>
        <div className='w-full h-[72px] flex-shrink-0'>
            <Player />
        </div>
    </div>
  )
}


export default Home;