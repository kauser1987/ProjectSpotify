import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem.jsx'
import { PlayerContext } from '../context/PlayerContext.jsx'

const DisplayHome = () => {
  const {albumsData, songsData} = useContext(PlayerContext)
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
{albumsData.map((item,indx)=>(<AlbumItem key={indx} id={item._id} image={item.image} name={item.name} desc={item.desc}/>))}
      </div>
    </div>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
      <div className='flex overflow-auto'>
{songsData.map((item,indx)=>(<SongItem key={indx} id={item._id} image={item.image} name={item.name} desc={item.desc}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome