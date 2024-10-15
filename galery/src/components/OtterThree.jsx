import PropTypes from "prop-types"
import otter3 from "../assets/nutria3.jpg"


export const OtterThree = ({className}) => {
  return (
    <img src={otter3} alt="nutrias" className={className} />
  )
}

OtterThree.propTypes = {className: PropTypes.string}