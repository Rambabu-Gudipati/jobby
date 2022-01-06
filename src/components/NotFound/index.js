import './index.css'

const NotFound = () => (
  <div className="not-found">
    <div className="not-card">
      <img
        className="notFoundImg"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p className="warn">
        We’re sorry, the page you requested could Not Be Found
      </p>
    </div>
  </div>
)

export default NotFound
