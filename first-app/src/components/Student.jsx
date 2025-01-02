function Student(props) {
    return (
        <div className="student">
            <ul>
                    <li>{props.id}</li>
                    <li>{props.name}</li>
            </ul>
        </div>
    )
}
export default Student;