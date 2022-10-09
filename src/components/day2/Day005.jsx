import { useState } from "react";

function Day005() {

    const [fontSize, setFontZise] = useState(40);
    const [plusingCount, setPlusingCount] = useState(0)

    const changeFont = () => {
        setFontZise(f => !f)
    }
    const addingPlus = () => {
        setPlusingCount(c => c + 1)
    }

    return (
        <>
            <div className="container">
                <button onClick={changeFont} className="btn btn-green">Font size</button>
                <button onClick={addingPlus} className="btn btn-red">Plusing</button>
            </div>
            <div className="container">
                <h1 className="container" style={{
                    fontSize: fontSize ? '40px' : '25px'
                }}>TEST TEST TEST</h1>
                <h1>{plusingCount}</h1>
            </div>
        </>
    )
}

export default Day005;