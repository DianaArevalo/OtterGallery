import { Link } from "react-router-dom"
import { OtterOne } from "./OtterOne"
import { OtterTwo } from "./OtterTwo"
import { OtterThree } from "./OtterThree"
import { OtterFour } from "./OtterFour"
import { OtterFive } from "./OtterFive"
import { OtterSix } from "./OtterSix"
import { OtterSeven } from "./OtterSeven"


export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to='/OtterOne' className="links">
      <figure className="thumbnail-image-size">
        <OtterOne/>
        <figcaption>Otter One</figcaption>
      </figure>
      </Link>
      <Link to='/OtterTwo' className="links">
      <figure className="thumbnail-image-size">
        <OtterTwo/>
        <figcaption>Otter Two</figcaption>
      </figure>
      </Link>
      <Link to='/OtterThree' className="links">
      <figure className="thumbnail-image-size">
        <OtterThree/>
        <figcaption>Otter Three</figcaption>
      </figure>
      </Link>
      <Link to='/OtterFour' className="links">
      <figure className="thumbnail-image-size">
        <OtterFour/>
        <figcaption>Otter Four</figcaption>
      </figure>
      </Link>
      <Link to='/OtterFive' className="links">
      <figure className="thumbnail-image-size">
        <OtterFive/>
        <figcaption>Otter Five</figcaption>
      </figure>
      </Link>
      <Link to='/OtterSix' className="links">
      <figure className="thumbnail-image-size">
        <OtterSix/>
        <figcaption>Otter Six</figcaption>
      </figure>
      </Link>
      <Link to='/OtterSeven' className="links">
      <figure className="thumbnail-image-size">
        <OtterSeven/>
        <figcaption>Otter Seven</figcaption>
      </figure>
      </Link>
    </div>
  )
}


