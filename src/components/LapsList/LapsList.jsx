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

        },
        {
            title: 'time',
            dataIndex: 'time',
        }
    ];

    const adaptLap = (laps) => {
        let lapsObjArr = []
        for (let i = 0; i < laps.length; i++) {
            lapsObjArr.push(
                {
                    'key': i,
                    'numLap': '#' + (i + 1),
                    'time': ('00' + laps[i].minutes).slice(-2) + ':' + ('00' + laps[i].seconds).slice(-2) + ':' + ('000' + laps[i].milliseconds).slice(-3)
                }
            )
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
            <SimpleBar style={{ maxHeight: calculateHeightLapsTab() }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                // scroll={{ y: calculateHeightLapsTab() }}
                />
            </SimpleBar>
        </div>
    )
};

export default LapsList;