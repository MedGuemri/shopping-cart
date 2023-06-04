import React from 'react'
import FavoriteItem from "./FavoriteItem"


const Favorites = () => {
    
  return (
        
      <div className="flex justify-center flex-col items-center ">
          <h1 className='mt-20 font-bold text-5xl text-slate-700 bg-yellow-300 rounded-2xl p-4'>Favorites</h1>
          <div className="  grid  grid-cols-1 lg:grid-cols-2  gap-5  py-20">


            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />






              


          </div>

      </div>
  )
}

export default Favorites