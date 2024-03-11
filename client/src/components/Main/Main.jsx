import React from 'react';
import Nav from './Nav';
import Filter from './Filter';
import Playlist from './Playlist';

function Main() {
  return (
    <div className='w-full h-full rounded-md flex flex-col bg-primary'>
      <Nav />
      <Filter />
      <Playlist />
    </div>
  )
}

export default Main;