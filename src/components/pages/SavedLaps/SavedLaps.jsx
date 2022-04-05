import React from 'react'

import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { Collapse } from 'antd';


const SavedLaps = () => {

  const dataSource = [
    {
      key: '1',
      totalTime: 'Mike',
      lapTime: 32,
      lap: '10 Downing Street',
    },
    {
      key: '2',
      totalTime: 'John',
      lapTime: 42,
      lap: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'lap',
      dataIndex: 'lap',
      key: 'lap',
    },
    {
      title: 'total time',
      dataIndex: 'totalTime',
      key: 'totalTime',
    },
    {
      title: 'lap time',
      dataIndex: 'lapTime',
      key: 'lapTime',
    },
  ];


  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;


  return (
    <Collapse onChange={callback}>
      <Panel header="Name 1" key="1">
        <Panel header="This is panel nest panel" key="1">
          <p>{text}</p>
        </Panel>
      </Panel>
      <Panel header="Name 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Name 3" key="3">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Panel>
    </Collapse>
  );
}

export default SavedLaps