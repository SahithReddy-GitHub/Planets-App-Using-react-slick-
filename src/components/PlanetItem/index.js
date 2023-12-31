import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data

  return (
    <div className="con">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="head">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
