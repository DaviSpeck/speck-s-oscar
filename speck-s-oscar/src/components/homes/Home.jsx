import React, { useEffect, useState } from "react"
import { reactLocalStorage } from "reactjs-localstorage"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "./HomeCard"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
const Home = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const [loadingState, setLoadingState] = useState('not_loaded');
  const [sortType, setsortType] = useState([reactLocalStorage.get("lastSort"), "Ano de Lançamento", "Nome do Filme", "País de Origem"])  
  const Sort = sortType.map(Sort => Sort)

  React.useEffect(() => {
    setLoadingState('loading')
    if(!reactLocalStorage.get("lastSort")){
      reactLocalStorage.setObject('items', items.sort(compareYear))
      reactLocalStorage.set("lastSort", "Ano de Lançamento")
    }
    setLoadingState('loaded');
  }, []);

  function compareName( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  function compareCountry( a, b ) {
    if ( a.country < b.country ){
      return -1;
    }
    if ( a.country > b.country ){
      return 1;
    }
    return 0;
  }

  function compareYear( a, b ) {
    if ( a.releaseYear < b.releaseYear ){
      return -1;
    }
    if ( a.releaseYear > b.releaseYear ){
      return 1;
    }
    return 0;
  }

  const handlesortTypeChange = (e) => {
    if (sortType[e.target.value] === "Ano de Lançamento"){
      reactLocalStorage.set("lastSort", "Ano de Lançamento")
      reactLocalStorage.setObject('items', items.sort(compareYear))
      setsortType(["Ano de Lançamento", "Nome do Filme", "País de Origem"])
      window.location.reload(false);
    }
    if (sortType[e.target.value]=== "Nome do Filme"){
      reactLocalStorage.set("lastSort", "Nome do Filme")
      reactLocalStorage.setObject('items', items.sort(compareName))
      window.location.reload(false);
    }
    if (sortType[e.target.value] === "País de Origem"){
      reactLocalStorage.set("lastSort", "País de Origem")
      reactLocalStorage.setObject('items', items.sort(compareCountry))
      window.location.reload(false);
    }
  }

 if (loadingState === "loaded"){
  return (
    <>
      <div className='homeContainer'>
        <Slider {...settings}>
          {reactLocalStorage.getObject('items').map((item) => {
            return (
              <>
                <div className="selectSort">
                  <span>Ordenar por:</span>
                  <select
                  onChange={e => handlesortTypeChange(e)}>
                    {
                      Sort.map((sort, key) => <option value={key}>{sort}</option>)
                    }
                  </select>
                </div>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </Slider>
      </div>
    </>
  )
 }
  
}

export default Home
