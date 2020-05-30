import React from 'react';
import '../css/Grid.css';
import Grid from '@material-ui/core/Grid';

export default class myGrid extends React.Component{

    state = {
      width: 4,
      tiles: ["hello"]
    }

    render () {

      return (
        <div className="grid-section">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item className="tile">
                  {this.state.tiles}
                </Grid>
            </Grid>
        </div>
      )
    }
  
}
