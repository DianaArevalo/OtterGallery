import PropTypes from "prop-types"
import otter7 from "../assets/nutria7.jpg"


export const OtterSeven = ({className}) => {
  return (
    <img src={otter7} alt="nutrias" className={className} />
  )
}

OtterSeven.propTypes = {className: PropTypes.string}