import React from 'react'

import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { Collapse } from 'antd';
import classes from './SavedLaps.module.css'
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteSavedLapAction, setCurrentLapsAction } from '../../../store/lapsReducer';
import { adaptLap } from '../../../tableFunctions/adapterLap';
import { columnsTable } from '../../../tableFunctions/columns';


const SavedLaps = () => {

    const dispatch = useDispatch()
    const savedLaps = useSelector(state => state.lapsReducer.savedLaps)

    const deleteLap = (lapId) => {
        dispatch(deleteSavedLapAction(lapId))
    }

    const columns = columnsTable;

    const { Panel } = Collapse;

    function callback(key) {
    }

    const calculateHeightLapsTab = () => {
        try {
            return window.innerHeight - document.getElementById('Navbar').offsetHeight - 50
        } catch (error) {
            return 500
        }
    }

    const genExtra = (id) => (
        <DeleteOutlined
            onClick={event => {
                event.stopPropagation();
                deleteLap(id)
            }}
        />
    );

    return (
        savedLaps.length > 0
            ?
            <SimpleBar
                style={{
                    maxHeight: calculateHeightLapsTab(),
                }}
                className={classes.Slider__wrapper}
            >
                <div className={classes.LapsTab}>
                    <div className={classes.LapsTitle}>Saved Laps</div>
                    <Collapse onChange={callback}>
                        {
                            savedLaps.map((savedLap, index) =>
                                <Panel header={savedLap.name} key={index} extra={genExtra(index)}>
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