import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchEle = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachOne =>
      eachOne.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="Main-bg">
        <h1>Destination Search</h1>
        <div className="seachElement_contanier">
          <input
            type="search"
            placeholder="username"
            className="seachElement"
            onChange={this.onSearchEle}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search_img"
          />
        </div>

        <ul className="unorder_contaneir">
          {searchResult.map(eachUser => (
            <DestinationItem destinationsList={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
