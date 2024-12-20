import React, { useState } from "react";


function UpdatedComponent (OriginalComponent) {

    function NewComponent() {
        const [money, setMoney] = useState(100);
        function handleRaise() {
            setMoney(money * 2);
        }
        return <OriginalComponent handleRaise={handleRaise} money={money}/>
           
       
    }
    return NewComponent;

}

export default UpdatedComponent;