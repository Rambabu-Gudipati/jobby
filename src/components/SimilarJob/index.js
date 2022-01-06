import {BsStar, BsBag} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import './index.css'

const SimilarJob = props => {
  const {similar} = props
  const {companyLogo, jobDescription, rating, title, location, eType} = similar

  return (
    <li className="job-card">
      <div className="top-card">
        <img
          src={companyLogo}
          alt="similar job company logo"
          className="company-logo"
        />
        <div className="title">
          <h1>{title}</h1>
          <div>
            <BsStar className="star" />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="des-name">Description</h1>
      <p className="job-para">{jobDescription}</p>
      <div className="row-s">
        <div className="row-s">
          <GoLocation />
          <p>{location}</p>
        </div>
        <div className="row-s">
          <BsBag />
          <p>{eType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJob
