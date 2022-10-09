import { useState } from "react";
import randColor from "../functions/randColor";
import randNumb from "../functions/randNumb";

function Square() {

    const [addSq, setAddSq] = useState([]);

    const add = () => {
        setAddSq(s => [...s, { number: randNumb(1, 99), colored: randColor() }])

    }

    const sort = () => {
        setAddSq(s => [...s].sort((a, b) => b.number - a.number))
    }

    return (
        <>
            <h2 className="container">number:{addSq.filter(s => s.number < 50).length}</h2>
            <button onClick={add} className="btn btn-green">add sq</button>
            <button onClick={sort} className="btn btn-red">sort 9-0</button>
            <div className="container">
                {
                    addSq.map((sq, i) => <div style={{
                        backgroundColor: sq.number < 50 ? 'green' : sq.colored,
                        borderRadius: sq.number % 2 ? null : '50%'
                    }} key={i} className="square">{sq.number}</div>)
                }
            </div>
        </>
    )
}

export default Square;