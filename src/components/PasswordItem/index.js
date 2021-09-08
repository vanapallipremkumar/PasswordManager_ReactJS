import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPasswords, onClickDelete} = props
  const {id, websiteName, username, password, backgroundColor} = passwordDetails
  const firstCharacter = websiteName.charAt(0)

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="password-item-container">
      <div className={`first-character-container ${backgroundColor}`}>
        <p className="first-character">{firstCharacter}</p>
      </div>
      <div className="password-details-container">
        <p className="website-name">{websiteName}</p>
        <p className="username">{username}</p>
        {showPasswords ? (
          <p className="password">{password}</p>
        ) : (
          <img
            className="hidden-password"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={onClickDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
