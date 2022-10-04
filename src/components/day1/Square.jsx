import { useState } from "react";
import randColor from "../functions/randColor";
import randNumb from "../functions/randNumb";

function Square() {

    const [addSq, setAddSq] = useState([]);

    const addingSq = () => {
        setAddSq(s => [...s, { number: randNumb(1, 100), color: randColor() }]);
    }



    return (
        <>
            <button className="btn btn-green" onClick={addingSq}>Add Square</button>
            <div className="container">
                {
                    addSq.map((sq, i) => <div style={{
                        backgroundColor: sq.color
                    }} className="square" key={i}>{sq.number}</div>)
                }
            </div>
            <div style={{
                backgroundColor: randColor()
            }} className="square"></div>
        </>
    )
}

export default Square;