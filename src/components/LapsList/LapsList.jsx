import { Button, Table } from 'antd';
import React from 'react';
import classes from './LapsList.module.css'
import SimpleBar from 'simplebar-react';
import 'antd/dist/antd.dark.css';
import 'simplebar/dist/simplebar.min.css';
import { SaveOutlined } from '@ant-design/icons';
import { getElementError } from '@testing-library/react';
import { adaptLap } from '../../tableFunctions/adapterLap';
import { columnsTable } from '../../tableFunctions/columns';


const LapsList = ({ laps, openModal }) => {


    const columns = columnsTable;

    

    const data = adaptLap(laps)

    const calculateHeightLapsTab = () => {
        try {
            return window.innerHeight - document.getElementById('Stopwatch').offsetHeight - document.getElementById('ButtonsBar').offsetHeight - document.getElementById('Navbar').offsetHeight - 50
        } catch (error) {
            return 500
        }
    }

    return (
        <div className={classes.LapsTab}>
            <div >
                <Button className={classes.SaveLapsBtn} onClick={openModal} icon={<SaveOutlined />}>
                    Save laps
                </Button>
            </div>
            <SimpleBar
                style={{ maxHeight: calculateHeightLapsTab() }}
            >
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </SimpleBar>

        </div>
    )
};

export default LapsList;