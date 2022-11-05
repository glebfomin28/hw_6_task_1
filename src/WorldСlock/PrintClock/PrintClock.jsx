import React, {useEffect, useState} from 'react';
import s from './PrintClock.module.css';
import {TimeUnit} from "./timeUnit/TimeUnit";

export const PrintClock = ({remember, deleteTime}) => {
    // console.log(time)
    // let newData
    // if(remember.step > 0) {
    //     newData = time.setHours( time.getHours() + remember.step);
    //
    // } else newData = time.setHours( time.getHours() - remember.step);

    // useEffect(() => {
    //     timeZone()
        // setInterval(() =>  setTime(new Date()), 1000)
        // console.log("newData")
    //
    // },[remember])



    const printTime = remember.map((el, id) =>
        <TimeUnit
            key={el.name}
            id={id}
            name={el.name}
            step={el.step}
            deleteTime={deleteTime}
        />
    )
    return (
        <div className={s.body}>
            {remember.length >0? printTime : null}
        </div>
    );
}
