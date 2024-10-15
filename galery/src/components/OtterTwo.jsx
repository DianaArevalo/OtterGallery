import PropTypes from "prop-types"
import otter2 from "../assets/nutria2.jpg"


export const OtterTwo = ({className}) => {
  return (
    <img src={otter2} alt="nutrias" className={className} />
  )
}

OtterTwo.propTypes = {className: PropTypes.string}