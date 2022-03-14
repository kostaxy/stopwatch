import { Table } from 'antd';
import React from 'react';
import classes from './LapsList.module.css'
import 'antd/dist/antd.dark.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const LapsList = ({ laps }) => {

    let clLapNum = [classes.Lap__content, classes.Number].join(' ')
    let clLapTime = [classes.Lap__content, classes.Time].join(' ')

    const columns = [
        {
            title: 'lap',
            dataIndex: 'numLap',
            align: 'center'

        },
        {
            title: 'total time',
            dataIndex: 'TotalTime',
            align: 'center'
        },
        {
            title: 'lap time',
            dataIndex: 'LapTime',
            align: 'center'
        }
    ];

    const adaptLap = (laps) => {
        let lapsObjArr = []
        for (let i = 0; i < laps.length; i++) {
            //первый круг
            if (i === 0) {
                lapsObjArr.push(
                    {
                        'key': i,
                        'numLap': '#' + (i + 1),
                        'TotalTime': ('00' + laps[i].minutes).slice(-2) + ':' + ('00' + laps[i].seconds).slice(-2) + ':' + ('000' + laps[i].milliseconds).slice(-3),
                        'LapTime': ('00' + laps[i].minutes).slice(-2) + ':' + ('00' + laps[i].seconds).slice(-2) + ':' + ('000' + laps[i].milliseconds).slice(-3)
                    }
                )
            } else {
                let lapFullTimeMilliseconds = (laps[i].milliseconds + laps[i].seconds * 1000 + laps[i].minutes * 1000 * 60) - (laps[i - 1].milliseconds + laps[i - 1].seconds * 1000 + laps[i - 1].minutes * 1000 * 60)

                // sec = sec % 60
                // ms = ms % 1000
                let lapSec = Math.floor(lapFullTimeMilliseconds / 1000)
                let lapMin = Math.floor(lapSec / 60)
                lapSec = lapSec % 60
                let lapMs = lapFullTimeMilliseconds - (lapMin * 60 * 1000) - (lapSec * 1000)
                lapsObjArr.push(
                    {
                        'key': i,
                        'numLap': '#' + (i + 1),
                        'TotalTime': ('00' + laps[i].minutes).slice(-2) + ':' + ('00' + laps[i].seconds).slice(-2) + ':' + ('000' + laps[i].milliseconds).slice(-3),
                        'LapTime': ('00' + lapMin).slice(-2) + ':' + ('00' + lapSec).slice(-2) + ':' + ('000' + lapMs).slice(-3)
                    }
                )
            }

        }
        lapsObjArr.reverse()
        return lapsObjArr
    }

    const data = adaptLap(laps)
    // const data = laps

    const calculateHeightLapsTab = () => {
        return window.innerHeight - 500
    }


    return (
        <div className={classes.LapsTab}>
            <SimpleBar
                style={{ maxHeight: calculateHeightLapsTab() }}
            >
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                // scroll={{ y: calculateHeightLapsTab() }}
                // scroll={{ y:  'calc(100vh - 500px)' }}
                />
            </SimpleBar>

        </div>
    )
};

export default LapsList;