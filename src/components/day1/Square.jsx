import { useState } from "react";
import randColor from "../functions/randColor";
import randNumb from "../functions/randNumb";

function Square() {

    const [addSq, setAddSq] = useState([]);

    const addingSq = () => {
        setAddSq(s => [...s, { number: randNumb(1, 100), color: randColor() }]);
    }

    const sortNumbers = () => {
        setAddSq(b => [...b].sort((a, b) => a.number - b.number))
    }



    return (
        <>
            <div className="container">
                <div style={{
                    backgroundColor: randColor()
                }} className="square">{randNumb(1, 9999)}</div>

                <button className="btn btn-green" onClick={addingSq}>Add Square</button>
                <button className="btn btn-red" onClick={sortNumbers}>Sort 9 - 0</button>
            </div>
            <h3 className="container">count greens: {addSq.filter(s => s.number < 30).length}</h3>
            <div className="container">
                {
                    addSq.map((sq, i) => <div style={{
                        backgroundColor: sq.number < 30 ? 'green' : sq.color,
                        borderRadius: sq.number % 2 ? null : 50 + '%'
                    }} className="square" key={i}>{sq.number}</div>)
                }
            </div>
        </>
    )
}

export default Square;