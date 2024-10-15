import PropTypes from "prop-types"
import otter1 from "../assets/nutria1.jpg"


export const OtterOne = ({className}) => {
  return (
    <img src={otter1} alt="nutrias" className={className} />
  )
}

OtterOne.propTypes = {className: PropTypes.string}


