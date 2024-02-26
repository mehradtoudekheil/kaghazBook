import React from 'react'

// import components 
import MainHeader from '../components/mainComponents/MainHeader'
import SliderBook from "../components/HomeC/SliderBook"
import HomeArticle from '../components/HomeC/HomeArticle'
import HomeSugItemContainer from "../components/HomeC/HomeSugItemContainer"
import Banner from '../components/HomeC/Banner'
import HomeCategory from '../components/HomeC/HomeCategory'
import HomePopularContainer from '../components/HomeC/HomePopularContainer'
import HomeAds from '../components/HomeC/HomeAds'
import MainFooter from '../components/mainComponents/MainFooter'

function HomePage() {
  return (
    <div dir='rtl'>
      <MainHeader/>
      <Banner/>
      <HomeSugItemContainer/>
      <HomeCategory/>
      <HomeAds/>
      <HomePopularContainer/>
      <SliderBook/>
      <HomeArticle/>
      <MainFooter/>
    </div>
  )
}

export default HomePage