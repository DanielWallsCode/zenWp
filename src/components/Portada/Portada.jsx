/* eslint-disable react/prop-types */
import './Portada.css'

const Portada = ({portada}) => {
  return (
    <div className="portada">
        <img src={portada} alt="" />
      </div>
  )
}

export default Portada