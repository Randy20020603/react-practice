function UserGreeting(props) {
    return(props.isLoggedIn ? <h1>Welcome!</h1> : <h1 style={{color: "red", backgroundColor: "gray"}}>Please log in</h1>)
}
export default UserGreeting