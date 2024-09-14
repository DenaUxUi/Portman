import React from 'react'
import Topline from '../../widgets/topline/topline'
import Header from '../../widgets/header/Header';
import FirstScreen from '../HomePage/UI/FirstScreen/FirstScreen';
import Collection from '../HomePage/UI/Collection/Collection';
import NewItems from '../HomePage/UI/NewItems/NewItems';
import Footer from '../../widgets/Footer/Footer';

function SecondPage() {
  return (
    <div>
      <Topline />
      <Header />
      <FirstScreen />
      <NewItems />
      <Collection />
      <Footer />
    </div>
  )
}

export default SecondPage
