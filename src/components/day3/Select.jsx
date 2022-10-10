import { useState } from "react";

function Select() {

    const [select, setSelect] = useState(20);

    const changeSelect = () => {
        setSelect(1)
    }

    return (
        <>
            <div className="container">
                <button onClick={changeSelect} className="btn btn-yellow">Select Vienas</button>
            </div>
            <div className="containerSelect">
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="1">Vienas</option>
                    <option value="2">Du</option>
                    <option value="3">Trys</option>
                    <option value="20">Keturi</option>
                </select>
            </div>
        </>
    )
}

export default Select;