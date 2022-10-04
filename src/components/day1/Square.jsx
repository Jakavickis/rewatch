import { useState } from "react";

function Square() {

    const [addSq, setAddSq] = useState([]);

    const addingSq = () => {
        setAddSq(s => [...s, ''])
    }

    return (
        <>
            <div className="container">
                {
                    addSq.map((_, s) => <div className="square" key={s}></div>)
                }
            </div>
            <button className="btn btn-green" onClick={addingSq}>Add Square</button>
        </>
    )
}

export default Square;