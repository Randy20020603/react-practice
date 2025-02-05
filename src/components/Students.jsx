import PropTypes from 'prop-types'
// You need to pass "props" as a parameter in the function 
// to be able to access the props inside the component.
// The key / value pair are stored in the props parameter

// propTypes = a mechanism that ensures that the passed value 
// is of the correct datatype
// age: propTypes.number

// defaultProps = default values for props in case they are not
// passed from the parent component
function Student(props) {
    return(
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Basketballer",
    age: "25",
    isStudent: false
}
export default Student