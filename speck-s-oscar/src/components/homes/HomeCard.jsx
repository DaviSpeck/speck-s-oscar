import React from "react"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, director, country, genres, releaseYear, video } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='image of the current film' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                {rating >= 4.7 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </>
                }
                {rating >= 4.3 && rating <= 4.6 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  </>
                }
                {rating >= 3.8 && rating <= 4.2 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </>
                }
                {rating >= 3.3 && rating <= 3.6 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  </>
                }
                {rating >= 2.8 && rating <= 3.2 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </>
                }
                {rating >= 2.3 && rating <= 2.6 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  </>
                }
                {rating >= 1.8 && rating <= 2.2 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </>
                }
                {rating >= 1.3 && rating <= 1.6 &&
                  <>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  </>
                }
                {rating >= 0.8 && rating <= 1.2 &&
                  <>
                    <i className='fa fa-star'></i>
                  </>
                }
                {rating <= 0.7 &&
                  <>
                    <i className='fa fa-star-half'></i>
                  </>
                }
              </div>
              <label>{rating}</label>
              <label>Duração: {time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Diretor:</span>
                {director}
              </h4>
              <h4>
                <span>País:</span>
                {country}
              </h4>
              <h4>
                <span>Ano de lançamento:</span>
                {releaseYear}
              </h4>
              <h4>
                <span>Gêneros:</span>
                {genres}
              </h4>
            </div>
          </div>
          <div className='palyButton row'>
            <a href={video} target="_blank" rel="noreferrer">
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt=''/>
                  <img src='./images/play.png' className='change' alt=''/>
                </div>
                Assistir ao trailer
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
