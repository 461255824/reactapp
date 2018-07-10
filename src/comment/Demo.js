import React, {
  Component
} from 'react';
import {
  Table
} from 'antd';
import axios from 'axios';
class Hello extends Component {
  constructor(props) {
    super(props)
    console.log('组件',props)
    this.state = {
      dataSource:[{
        entId: 1,
        entName: "企业1",
        maintenanceCount: 0,
        markerCount: 0,
        refuelCount: 0,
        repairCount: 0,
        stationCount: 0
      }],
      columns:[{
        title: '企业名称',
        dataIndex: 'entName',
        key: '1',
      }, {
        title: '站点',
        dataIndex: 'stationCount',
        key: '2',
      }, {
        title: '地理围栏',
        dataIndex: 'markerCount',
        key: '3',
      }, {
        title: '保养记录',
        dataIndex: 'maintenanceCount',
        key: '4',
      }, {
        title: '加油记录',
        dataIndex: 'refuelCount',
        key: '5',
      }, {
        title: '维修记录',
        dataIndex: 'stationCount',
        key: '6',
      }]
    }
  }
  componentWillMount() {
    let url = 'https://ccp.virtueit.net/cd-dev/report-service/services/stat/otherBusiData'
    let params = {
      "currentPage": 1,
      "entName": "",
      "numPerPage": 20,
      "sortCol": "0",
      "sortType": "ASC",
      "source": "0"
    }
    
    let _this = this
    axios.post(url, params).then(function (data) {
      console.log('请求回来的数据', data)
      let list = data.data.result.resultList
      _this.setState({
        dataSource:list
      })
    })
  }
  render() {
    return ( <
      Table dataSource = {
        this.state.dataSource
      }
      rowKey="entId"
      columns = {
        this.state.columns
      }
      />
    );
  }
}

export default Hello;