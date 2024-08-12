import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planets-container">
      <img src={imageUrl} alt={`planet ${name}`} height="100px" />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
