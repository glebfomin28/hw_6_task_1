import React, {useEffect, useState} from 'react';
import s from '../PrintClock.module.css';
import moment from "moment-timezone";

export const TimeUnit = ({name, id, deleteTime, step}) => {

    const [time, setTime] = useState(moment().tz("GMT").format('HH:mm:ss'))


    const onDeleteTime = () => {
        deleteTime(id)
    }

    useEffect(() => {
        const collapse = Number(step);
        setInterval(() => {
            setTime(moment().add( moment.duration(`${collapse}:00:00`)).tz("GMT").format(`HH:mm:ss`))
        }, 1000)
    },[])

    return (
        <div >
            <span>{name}</span>
            <div className={s.timeBox}>{time}
                <button className={s.deleteTime}
                        onClick={onDeleteTime}
                >&#10006;</button>
            </div>
        </div>
    );
}
