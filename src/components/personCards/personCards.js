
import "../../scss/components/_person-cards.scss"

function Item({img,name,desc}){
  return(
    <div className="person-container">
      <div className="icon-container">
      <img src={img} alt={name} />
      </div>
      <h5>{name}</h5>
      <p>{desc}</p>
    </div>
  )
}

export default Item