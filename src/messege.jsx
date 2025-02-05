function Message(props) {
    const goat = "Bronny"
    if (goat)
      return <h1>Hello {goat} and {props.name}</h1>;
    return <h1>Hello nobody</h1>
}

export default Message;
