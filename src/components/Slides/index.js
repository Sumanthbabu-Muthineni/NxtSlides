import {Component} from 'react'
import SlideItems from '../SlideItems'
import SlideContext from '../../Context'
import Slide from '../Slide'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="scroll-slides-container">
              <ol className="scroll-slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideItems
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slides
