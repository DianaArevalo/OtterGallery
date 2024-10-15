import PropTypes from "prop-types"
import otter5 from "../assets/nutria5.jpg"


export const OtterFive = ({className}) => {
  return (
    <img src={otter5} alt="nutrias" className={className} />
  )
}

OtterFive.propTypes = {className: PropTypes.string}