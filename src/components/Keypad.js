// Code Keypad Component Here

function Keypad() {
    const changeHandler = () => {
        console.log("Entering password...");
    };

    return (
        <div>
            <input type="password" onChange={changeHandler} />
        </div>
    );
}

export default Keypad;
