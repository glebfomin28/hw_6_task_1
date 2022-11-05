import React from 'react';
import s from './InputBlock.module.css';

export const InputBlock = ({nameTime,setNameTime,setStepTime,stepTime, pushNewTime}) => {

    const handleChangeName = (evt) => {
        setNameTime(evt.target.value)
    }
    const handleChangeStep = (evt) => {
        setStepTime(evt.target.value)
    }

    return (
        <div className={s.inputBlock}>
            <div>
                <div>Название</div>
                <input type={"text"}
                    onChange={handleChangeName}
                       value={nameTime}
                />
            </div>
            <div>
                <div>Временная зона</div>
                <input type={"number"}
                       onChange={handleChangeStep}
                       value={stepTime}
                />
            </div>
            <button className={s.button} onClick={pushNewTime}>Добавить</button>
        </div>
    );
}

