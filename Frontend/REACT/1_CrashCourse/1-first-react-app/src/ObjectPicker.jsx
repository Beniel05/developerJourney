export default function ObjectPicker({ elements }) {
    
    const keysList = Object.keys(elements);

    // eslint-disable-next-line react-hooks/purity
    const random = Math.floor(Math.random() * keysList.length);

    return (
        <div>
            <h4>Elements: {JSON.stringify(elements)}</h4>
            <p style={{backgroundColor: "#000", color: "#fff", padding: "5px"}}>Random Value: {elements[keysList[random]]}</p>
        </div>
    )

}