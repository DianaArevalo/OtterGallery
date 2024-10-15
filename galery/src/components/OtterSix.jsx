import PropTypes from "prop-types"
import otter6 from "../assets/nutria6.jpg"


export const OtterSix = ({className}) => {
  return (
    <img src={otter6} alt="nutrias" className={className} />
  )
}

OtterSix.propTypes = {className: PropTypes.string}