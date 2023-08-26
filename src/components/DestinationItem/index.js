import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="list_contanier">
      <img src={imgUrl} alt={name} className="image_size" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
