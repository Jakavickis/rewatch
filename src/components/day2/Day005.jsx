import { useState } from "react";

function Day005() {

    const [color, setColor] = useState('')
    const [fontSize, setFontZise] = useState(40);
    const [plusingCount, setPlusingCount] = useState(0)
    const [ls, setLs] = useState(0)

    const changeFont = () => {
        setFontZise(f => !f)
    }
    const addingPlus = () => {
        setPlusingCount(c => c + 1)
    }
    const changeColor = () => {
        setColor(c => !c)
    }
    const ls5 = () => {
        setLs(5)
    }
    const ls10 = () => {
        setLs(10)
    }

    return (
        <>
            <div className="container">
                <button onClick={changeFont} className="btn btn-green">Font size</button>
                <button onClick={addingPlus} className="btn btn-red">Plusing +1</button>
                <button onClick={changeColor} className="btn btn-red">Change Color</button>
                <button onClick={ls5} className="btn btn-red">ls5</button>
                <button onClick={ls10} className="btn btn-red">ls10</button>
            </div>
            <div className="container">
                <h1 className="container" style={{
                    fontSize: fontSize ? '40px' : '25px',
                    color: color ? 'black' : 'white',
                    fontWeight: 'bold',
                    letterSpacing: ls
                }}>TEST TEST TEST</h1>
                <h1>{plusingCount}</h1>
            </div>
        </>
    )
}

export default Day005;