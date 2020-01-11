import React, { Component } from 'react';


import { Drawer, Button, Radio } from 'antd';
import 'antd/dist/antd.css';

const RadioGroup = Radio.Group;


class Qwe extends Component {

    state = { visible: false, placement: 'bottom' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

//   onChange = e => {
//     this.setState({
//       placement: e.target.value,
//     });
//   };

    render() {
        return (
            <>
                {/* <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </RadioGroup> */}
                <Button type="primary" onClick={this.showDrawer}>
                    Open
                </Button>
                <Drawer
                    height='90%'
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            
            </>
        )
    }
}

export default Qwe;