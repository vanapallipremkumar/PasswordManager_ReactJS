import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordsList from '../PasswordsList'

const colors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
]

class PasswordManger extends Component {
  state = {
    passwordsList: [],
    websiteName: '',
    username: '',
    password: '',
    count: 0,
    searchInput: '',
    showPasswords: false,
  }

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  onChangeWebsiteName = event =>
    this.setState({websiteName: event.target.value})

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onToggleCheckbox = () =>
    this.setState(previousState => ({
      showPasswords: !previousState.showPasswords,
    }))

  onClickDelete = id => {
    this.setState(previousState => ({
      passwordsList: previousState.passwordsList.filter(
        passwordDetails => passwordDetails.id !== id,
      ),
      count: previousState.count - 1,
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {websiteName, username, password} = this.state
    const allAreNonEmpty =
      websiteName.trim().length !== 0 &&
      username.trim().length !== 0 &&
      password.length !== 0

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)]

    if (allAreNonEmpty) {
      const newPasswordDetails = {
        id: uuidv4(),
        websiteName,
        username,
        password,
        backgroundColor,
      }
      this.setState(previousState => ({
        passwordsList: [...previousState.passwordsList, newPasswordDetails],
        count: previousState.count + 1,
        websiteName: '',
        username: '',
        password: '',
      }))
    }
  }

  renderFormContainer = () => {
    const {websiteName, username, password} = this.state
    return (
      <form className="form-inputs-container" onSubmit={this.onSubmitForm}>
        <h1 className="form-title">Add New Password</h1>
        <div className="input-field-container">
          <div className="input-field-icon-container">
            <img
              className="input-field-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
          </div>
          <div className="form-input-container">
            <input
              type="input"
              className="form-input"
              value={websiteName}
              onChange={this.onChangeWebsiteName}
              placeholder="Enter Website"
            />
          </div>
        </div>
        <div className="input-field-container">
          <div className="input-field-icon-container">
            <img
              className="input-field-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
          </div>
          <div className="form-input-container">
            <input
              type="input"
              className="form-input"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Enter Username"
            />
          </div>
        </div>
        <div className="input-field-container">
          <div className="input-field-icon-container">
            <img
              className="input-field-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
          </div>
          <div className="form-input-container">
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Enter Password"
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    )
  }

  RenderFormPageContainer = () => (
    <div className="form-page-container">
      {this.renderFormContainer()}
      <img
        className="small-device-password-manager-image"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        alt="password manager"
      />
      <img
        className="large-device-password-manager-image"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
      />
    </div>
  )

  RenderHeader = () => {
    const {count, searchInput} = this.state
    return (
      <div className="header-container">
        <div className="count-container">
          <h1 className="header-title">Your Passwords</h1>
          <p className="passwords-count">{count}</p>
        </div>
        <div className="search-bar-container">
          <div className="search-icon-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
          </div>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input-field"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    )
  }

  RenderPasswordsPageContainer = () => {
    const {passwordsList, searchInput, showPasswords} = this.state
    return (
      <div className="passwords-page-container">
        <this.RenderHeader />
        <hr />
        <div className="check-box-container">
          <input
            type="checkbox"
            id="showPasswords"
            className="checkbox-input"
            onChange={this.onToggleCheckbox}
          />
          <label htmlFor="showPasswords" className="checkbox-label">
            Show Passwords
          </label>
        </div>
        <PasswordsList
          passwordsList={passwordsList}
          searchInput={searchInput.toLowerCase()}
          showPasswords={showPasswords}
          onClickDelete={this.onClickDelete}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="background-container">
        <img
          className="password-manager-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
        />
        <this.RenderFormPageContainer />
        <this.RenderPasswordsPageContainer />
      </div>
    )
  }
}

export default PasswordManger
