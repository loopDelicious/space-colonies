import React from 'react'
import '../css/Grid.css'
import Grid from '@material-ui/core/Grid'
import bat from '../img/bat.jpg'
import fox from '../img/fox.jpg'
import koala from '../img/koala.jpg'
import otter from '../img/otter.jpg'

export default class myGrid extends React.Component{

    state = {
      width: 26,
      height: 26,
      // tiles: [],
      options: {
          "image": [
            bat, fox, koala, otter, 
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,            
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter,
            bat, fox, koala, otter               
          ]
        }
    }

    componentDidMount = () => {
      // TODO: get all the redis keys and set state
      this.setState({
        tiles: "redisKeys"
      })
    }

    render () {
      let numbers = Array.from(Array(12).keys()).map(x => ++x)
      let letters = 'abcdefghijkl'.split('')

      // TODO: fixed dimensions for grid
      return (
        <div className="grid-section">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
              {numbers.map((number, index) => (
                <Grid item xs={1} key={index} className="header">
                  <p>{number}</p>
                </Grid>
              ))} 

              {this.state.options.image.map((image, index) => (
                <Grid item xs={1} key={index} className="tile">
                  <img src={image} alt='animal' className='animalTile' style={{backgroundImage: `url(../img/${image.toString()}.jpg)`}}></img>
                </Grid>
              ))}

            </Grid>
        </div>
      )
    }
  
}
