import React from 'react'
import FavoriteItem from "./FavoriteItem"
import { useSelector } from 'react-redux'


const Favorites = () => {

  const Favorites = useSelector((state)=>state.cart.favorites)
    
  return (
        
      <div className="flex justify-center flex-col items-center min-h-screen ">
          <h1 className='mt-20 font-bold text-5xl text-slate-700 bg-yellow-300 rounded-2xl p-4'>Favorites</h1>
          <div className="  grid  grid-cols-1 lg:grid-cols-2  gap-5  py-20">

            {
              Favorites.map((fave)=>   <FavoriteItem  key={fave.id} fave={fave} /> )
            }
           
           






              


          </div>

      </div>
  )
}

export default Favorites