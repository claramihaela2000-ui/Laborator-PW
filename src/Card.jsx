function Card(props) {
    return (
        <div>
            <p> Studenta </p>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

        </div>
    );
}
export default Card;