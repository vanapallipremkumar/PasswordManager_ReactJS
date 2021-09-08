import './index.css'
import NoPassword from '../NoPassword'
import PasswordItem from '../PasswordItem'

const PasswordsList = props => {
  const {passwordsList, searchInput, showPasswords, onClickDelete} = props
  const filteredPasswordsList = passwordsList.filter(passwordsDetails =>
    passwordsDetails.websiteName.toLowerCase().includes(searchInput),
  )

  return filteredPasswordsList.length === 0 ? (
    <NoPassword />
  ) : (
    <ul className="passwords-list">
      {filteredPasswordsList.map(passwordDetails => (
        <PasswordItem
          passwordDetails={passwordDetails}
          showPasswords={showPasswords}
          key={passwordDetails.id}
          onClickDelete={onClickDelete}
        />
      ))}
    </ul>
  )
}

export default PasswordsList
