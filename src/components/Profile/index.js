import Cookies from 'js-cookie'
import {Component} from 'react'

import './index.css'

class Profile extends Component {
  state = {
    profiles: '',
    isLoading: false,
  }

  componentDidMount() {
    this.getProfile()
  }

  profileList = profile => ({
    name: profile.name,
    profileImageUrl: profile.profile_image_url,
    shortBio: profile.short_bio,
  })

  getProfile = async () => {
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/profile`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    // console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.profileList(fetchedData.profile_details)
      this.setState({profiles: updatedData, isLoading: true})
    }
  }

  showProfile = () => {
    this.getProfile()
  }

  render() {
    const {profiles, isLoading} = this.state
    const {name, profileImageUrl, shortBio} = profiles
    return isLoading ? (
      <div className="profile">
        <img className="profile-pic" src={profileImageUrl} alt="profile" />
        <h1 className="name">{name}</h1>
        <p className="bio">{shortBio}</p>
      </div>
    ) : (
      <div className="retry">
        <button className="Retry" type="button" onClick={this.showProfile}>
          Retry
        </button>
      </div>
    )
  }
}

export default Profile
