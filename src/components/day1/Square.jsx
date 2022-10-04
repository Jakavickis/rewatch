import { useState } from "react";
import RandNumb from "../functions/randNumb";

function Square() {

    const [addSq, setAddSq] = useState([]);

    const addingSq = () => {
        setAddSq(s => [...s, RandNumb(1, 100)])
    }

    return (
        <>
            <button className="btn btn-green" onClick={addingSq}>Add Square</button>
            <div className="container">
                {
                    addSq.map((sq, i) => <div className="square" key={i}>{sq}</div>)
                }
            </div>
        </>
    )
}

export default Square;