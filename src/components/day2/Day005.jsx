import { useState } from "react";

function Day005() {

    const [fontSize, setFontZise] = useState(40);

    const changeFont = () => {
        setFontZise(f => !f)
    }

    return (
        <>
            <h1 className="container" style={{
                fontSize: fontSize ? '40px' : '25px'
            }}>TEST TEST TEST</h1>
            <button onClick={changeFont} className="btn btn-green">Font size</button>
        </>
    )
}

export default Day005;