import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../UI/Button/Button';
import Modal  from '../../../UI/Modal/Modal';
import ButtonsBar from '../../ButtonsBar';
import LapsList from '../../LapsList/LapsList';
import SaveLapsModal from '../../SaveLapsModal/SaveLapsModal';
import classes from './Stopwatch.module.css'

const Stopwatch = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.lapsReducer.cash)

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState({
        milliseconds: 0,
        seconds: 0,
        minutes: 0
    });
    const [startTime, setStartTime] = useState(null);
    const [laps, setLaps] = useState([]);

    const [modalActive, setModalActive] = useState(false);
    

    useEffect(() => {

        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                let ms = Date.now() - startTime

                let sec = Math.floor(ms / 1000)
                let min = Math.floor(sec / 60)

                sec = sec % 60
                ms = ms % 1000

                setTime({
                    milliseconds: ms,
                    seconds: sec,
                    minutes: min
                })

            }, 1);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    });

    const addLap = () => {
        if (startTime) {
            setLaps([...laps, time])
        }
    }

    const clearLaps = () => {
        setLaps([])
    }

    const changeIsRunningState = () => {
        if (!startTime) {
            setStartTime(Date.now())
        } else {
            setStartTime(Date.now() - (time.milliseconds + time.seconds * 1000 + time.minutes * 1000 * 60))
        }

        if (!isRunning) {
            setIsRunning(true)
        } else {
            setIsRunning(false)
        }
    }

    const resetStopwatch = () => {
        if (isRunning) {
            changeIsRunningState()
        }
        setStartTime(null)
        clearLaps()
        setTime({
            milliseconds: 0,
            seconds: 0,
            minutes: 0
        })
    }

    const runOrStop = () => {
        changeIsRunningState()
    }

    const openModal = () => {
        setModalActive(true)
    }

    return <div>
        <div className={classes.DigitalClockFace__wrapper} id='Stopwatch'>
            <span className={classes.DigitalClockFace}>
                {('00' + time.minutes).slice(-2)}
                :{('00' + time.seconds).slice(-2)}
                :{('000' + time.milliseconds).slice(-3)}
            </span>
        </div>
        <div className={classes.ButtonsBar} id='ButtonsBar'>
            <Button onClick={runOrStop}>
                {
                    isRunning
                        ? 'Pause'
                        : 'Start'
                }
            </Button>
            <Button onClick={resetStopwatch}>Reset</Button>
            <Button onClick={addLap}>+Lap</Button>
            <Button onClick={clearLaps}>ClearLaps</Button>
        </div>
        <div style={{ textAlign: 'center' }}>
            {(laps.length > 0)
                ? <LapsList laps={laps} openModal={openModal}></LapsList>
                : <div></div>
            }
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <SaveLapsModal setActive={setModalActive}></SaveLapsModal>
        </Modal>

    </div>;
};

export default Stopwatch;
