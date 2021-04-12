import PageHeader from '../components/PageHeader'

import { useHistory } from "react-router-dom"

export default function HeaderNavigation({user, setUser}) {
  const history = useHistory()

 const onSignOut = () => {
    console.log("Sign out")
    setUser(null)
    history.push("/")
  }

 return (<PageHeader
    title="Social Something"
    titleClicked={() => history.push("/")}
    signOut={onSignOut}
    user={user}
    onSearch={({search}) => {history.push(`/?search=${search}`)}}
    newPost={() => history.push("/newPost")}
    profile={() => history.push("/profile")}
    login={() => history.push("/login")}
    ></PageHeader>)
}