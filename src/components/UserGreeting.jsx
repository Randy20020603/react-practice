function UserGreeting(props) {
    return(props.isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in</h1>)
}
export default UserGreeting