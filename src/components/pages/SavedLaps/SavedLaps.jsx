import React from 'react'

import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { Collapse } from 'antd';
import classes from './SavedLaps.module.css'
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';


const SavedLaps = () => {

  const dispatch = useDispatch()
  const savedLaps = useSelector(state => state.lapsReducer.savedLaps)

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

  const { Panel } = Collapse;

  function callback(key) {
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;

  const calculateHeightLapsTab = () => {
    try {
      return window.innerHeight - document.getElementById('Navbar').offsetHeight - 50
    } catch (error) {
      return 500
    }
  }

  return (
    savedLaps.length > 0
      ?
      <SimpleBar
        style={{
          maxHeight: calculateHeightLapsTab(),
          width: '100%',
          marginTop: '30px'
        }}
      >
        <div className={classes.LapsTab}>
          <div className={classes.LapsTitle}>Saved Laps</div>
          <Collapse onChange={callback}>
            {
              savedLaps.map((savedLap, index) =>
                <Panel header={savedLap.name} key={index}>
                  <Table
                    dataSource={adaptLap(savedLap.laps)}
                    columns={columns}
                    pagination={false}
                  />
                </Panel>
              )
            }

          </Collapse>
        </div>
      </SimpleBar >
      : <div className={classes.NoLapsTitle}>
        The list of saved laps is empty
      </div>
  );
}

export default SavedLaps