import React, { createRef, useEffect, useState } from 'react';

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState({
        milliseconds: 0,
        seconds: 0,
        minutes: 0
    });
    const startStopBtnRef = createRef()
    const [FAR, setFAR] = useState(null);
    const [startState, setStartState] = useState(null);

    useEffect(() => {
        if (!startState) {
            setStartState(Date.now());
        }
    }, [startState]);


    const runStopwatch = () => {

        let ms = Date.now() - startState

        let sec = Math.floor(ms / 1000)
        let min = Math.floor(sec / 60)

        sec = sec % 60
        ms = ms % 1000

        setTime({
            milliseconds: ms,
            seconds: sec,
            minutes: min
        })
        setFAR(requestAnimationFrame(runStopwatch));

    }

    const pauseStopwatch = () => {
        cancelAnimationFrame(FAR)
    }

    const changeIsRunningState = () => {
        if (!isRunning) {
            setIsRunning(true)
            startStopBtnRef.current.innerHTML = 'pause'
        } else {
            setIsRunning(false)
            startStopBtnRef.current.innerHTML = 'start'
        }
    }

    const resetStopwatch = () => {
        if (isRunning) {
            changeIsRunningState()
        }
        pauseStopwatch();
        setStartState(null);
        setTime({
            milliseconds: 0,
            seconds: 0,
            minutes: 0
        })
    }

    const runOrStop = () => {
        if (!isRunning) {
            runStopwatch()
        } else {
            pauseStopwatch()
        }
        changeIsRunningState()
    }


    return <div>
        <span>
            {('00' + time.minutes).slice(-2)}
            :{('00' + time.seconds).slice(-2)}
            :{('000' + time.milliseconds).slice(-3)}
        </span>
        <button ref={el => startStopBtnRef.current = el} onClick={runOrStop}>start</button>
        <button onClick={resetStopwatch}>reset</button>
    </div>;
};

export default Stopwatch;
