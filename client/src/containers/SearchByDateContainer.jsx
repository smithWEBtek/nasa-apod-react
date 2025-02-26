import React, { Component } from 'react'
import SearchByDate from '../components/SearchByDate'
import Picture from '../components/Picture'
import AstronomyVideo from '../components/AstronomyVideo'
import { connect } from 'react-redux'
import { fetchSearchedPicture } from '../actions/fetchSearchedPicture'

const VideoOrPicture = (picture) => ( picture.media_type === 'video' ? <AstronomyVideo picture={picture} /> : <Picture picture={picture} /> )

class SearchByDateContainer extends Component {


  render() {
    
    console.log(Object.keys(this.props.result).length === 0, Object.keys(this.props.result).length)
    const result = (Object.keys(this.props.result).length !== 0 ) ? VideoOrPicture(this.props.result) : null 

     
    return(
      <div>
        <h1> Inside container</h1>
        <SearchByDate fetchSearchedPicture={this.props.fetchSearchedPicture} />
        {result}
      </div>
    )
  }
}
function mapStateToProps(state) {

  return { result: state.pictures.result }
}
const mapDispatchToProps = dispatch => ({
  fetchSearchedPicture: (date)=> dispatch(fetchSearchedPicture(date)), 
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchByDateContainer)