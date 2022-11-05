import React, {useState} from 'react';
import {InputBlock} from "./InputBlock/InputBlock";
import {PrintClock} from "./PrintClock/PrintClock";

export const WorldСlock = () => {
    const [nameTime, setNameTime] = useState('')
    const [stepTime, setStepTime] = useState(0)
    const [remember, setRemember] = useState([])




    const pushNewTime = () => {
        setRemember([...remember, {name: nameTime, step: stepTime}])
        // console.log(remember)
    }

    const deleteTime = (el) => {
        setRemember([...remember.slice(0, el), ...remember.slice(el + 1)]);
    }

    return (
        <div >
           <InputBlock
               nameTime={nameTime}
               setNameTime={setNameTime}
               stepTime={stepTime}
               setStepTime={setStepTime}
               pushNewTime={pushNewTime}
            />
            <PrintClock
                remember={remember}
                deleteTime={deleteTime}
            />
        </div>
    );
}

