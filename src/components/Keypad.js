// Code Keypad Component Here

function Keypad (){
    function handleInput (){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" placeholder="Enter Your Password!" onChange={handleInput} />
        </div>
    )
}

export default Keypad;