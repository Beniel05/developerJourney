import "./PropertyList.css";

import Property from "./Property"

export default function PropertyList({properties}) {
    return (
        <div className="property-list">
            <ul>
                {properties.map((p) => {
                    // return <Property key={p.id} property={p} />
                    return <Property {...p} key={p.id}/>
                })}
            </ul>
        </div>
    )
}