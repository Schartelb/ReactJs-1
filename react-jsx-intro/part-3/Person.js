const Person = (props) => {
    let ageOut;
    if (props.age < 18) {
        ageOut = "you must be 18"
    } else {
        ageOut = "Please go vote!"
    }
    let nameOut;
    if (props.name.length > 8) {
        nameout = props.name.slice(0, 7)
    } else { nameOut = props.name }
    return (
        <div>
            <p>
                Learn some information about this person.
                {nameOut}, {props.age}
                <h4>{ageOut}</h4>
            </p>
            <p>
                <ul>Hobbies
                    {props.hobbies.map(h => <li key={h.id}> {h.text}</li>)}
                </ul>
            </p>
        </div>
    )
}