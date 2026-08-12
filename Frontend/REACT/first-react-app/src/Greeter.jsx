// export default function Greeter(props) {
//     return <h1>Hello {props.name}!</h1>
// }

/* Destructured: Getting only the name key directly. */
export default function Greeter({name, age}) {
    return (
        <>
            <h1>Hello {name}!</h1>
            <h3>{age} years Old!</h3>
        </>
    )
}