import {Link} from "react-router-dom";

function Football() {
  const shoot = (message) => {
    alert(message);
  };

  return (
    <>
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
        <li>
          <Link to="/">Home</Link>
        </li>
    </>
  );
}
export default Football;
