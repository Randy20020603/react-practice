function Football() {
    const shoot = (message) => {
      alert(message);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
  }
  export default Football