import React from 'react';
import classes from './LapsList.module.css'

const LapsList = ({ laps }) => {

    let clLapNum = [classes.Lap__content, classes.Number].join(' ')
    let clLapTime = [classes.Lap__content, classes.Time].join(' ')

    return (
            <div className={classes.LapsTab}>
                <div id='testx' className={[classes.Lap, classes.Header].join(' ')}>
                    <div className={clLapNum}>Lap</div>
                    <div className={clLapTime}>Time</div>
                </div>
                <div className={classes.Laps__container} id='Laps__container'>
                    {laps.map((lap, index) =>
                        <div key={index} className={classes.Lap}>
                            <div className={clLapNum}>
                                #{index + 1}
                            </div>
                            <div className={clLapTime}>
                                {('00' + lap.minutes).slice(-2)}
                                :{('00' + lap.seconds).slice(-2)}
                                :{('000' + lap.milliseconds).slice(-3)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
};

export default LapsList;