import React, { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context'

function FavouritesPage() {
  
  const favoritesCtx = useContext(FavoritesContext);
  
  return (
    <section>
      <h1>My favorites</h1>
      <MeetupList meetups={favoritesCtx.favorites}/>
    </section>
  )
}

export default FavouritesPage