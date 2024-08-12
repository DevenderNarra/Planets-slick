import {Component} from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'
import './index.css'

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
}

class PlanetSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      <div className="main-container">
        <center>
          <h1>PLANETS</h1>
        </center>
        <ul className="slider-container">
          <Slider {...settings}>
            {planetsList.map(planet => (
              <PlanetItem planetDetails={planet} key={planet.id} />
            ))}
          </Slider>
        </ul>
      </div>
    )
  }
}
export default PlanetSlider
