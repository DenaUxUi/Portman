import React from 'react'
import Topline from '../../widgets/topline/topline'
import Header from './../../widgets/header/Header';
import FirstScreen from './UI/FirstScreen/FirstScreen';
import Season from './UI/Season/Season';
import Collection from './UI/Collection/Collection';
import NewItems from './UI/NewItems/NewItems';
import Brand from "./UI/BrandList/BrandList"
import Footer from '../../widgets/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Topline />
      <Header />
      <FirstScreen />
      <Season />
      <Collection />
      <NewItems />
      <Brand />
      <Footer />
    </div>
  )
}

export default HomePage
