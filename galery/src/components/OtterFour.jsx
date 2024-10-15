import PropTypes from "prop-types"
import otter4 from "../assets/nutria4.jpg"


export const OtterFour = ({className}) => {
  return (
    <img src={otter4} alt="nutrias" className={className} />
  )
}

OtterFour.propTypes = {className: PropTypes.string}