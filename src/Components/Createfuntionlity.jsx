import { useState } from "react";

const CreateFunctionality = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    return (
        <>
            <button onClick={() => { setTab1(true); setTab2(false); setTab3(false); }} className="tab1"></button>
            <button onClick={() => { setTab1(false); setTab2(true); setTab3(false); }} className="tab2"></button>
            <button onClick={() => { setTab1(false); setTab2(false); setTab3(true); }} className="tab3"></button>

            {tab1 && (
                <h1>radhe radhe</h1>
            )}

            {tab2 && (
                <h1>jai shree ram </h1>
            )}

            {tab3 && (
                <h1>Jai Hanuman</h1>
            )}
        </>
    );
}

export default CreateFunctionality;
