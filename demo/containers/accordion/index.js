import React, {Component} from 'react';

import {Accordion, AccordionItem} from '../../../src';

export default class AccordionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: '1',
      activeKeys: ['1', '3']
    };
  }

  handleSingleSelect = (nextActiveKey) => {
    const {activeKey: prevActiveKey} = this.state;
    const activeKey = nextActiveKey === prevActiveKey ? null : nextActiveKey;

    this.setState({activeKey});
  };

  handleMultiSelect = (nextActiveKey) => {
    const {activeKeys: prevActiveKeys} = this.state;
    const activeKeys =
      prevActiveKeys.includes(nextActiveKey)
      ? prevActiveKeys.filter((item) => item !== nextActiveKey)
      : prevActiveKeys.concat([nextActiveKey]);

    this.setState({activeKeys});
  };

  render() {
    const {activeKey, activeKeys} = this.state;

    return (
      <div>
        <h4>Controlled Single Select</h4>
        <Accordion activeKey={activeKey} onSelect={this.handleSingleSelect}>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Controlled Multi Select</h4>
        <Accordion activeKey={activeKeys} onSelect={this.handleMultiSelect}>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Uncontrolled Single Select</h4>
        <Accordion>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Uncontrolled Single Select With Default 3</h4>
        <Accordion defaultActiveKey='3'>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Uncontrolled Single Select Allowing All Closed</h4>
        <Accordion allowAllClosed>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Uncontrolled Multi Select</h4>
        <Accordion multiExpand>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Uncontrolled Multi Select With 2 And 4 Defaults</h4>
        <Accordion defaultActiveKey={['2', '4']} multiExpand>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
        <h4>Uncontrolled Multi Select Allowing All Closed</h4>
        <Accordion allowAllClosed multiExpand>
          <AccordionItem eventKey='1' title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem eventKey='2' title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem eventKey='3' title='Title 3'>
            Item 3
          </AccordionItem>
          <AccordionItem eventKey='4' title='Title 4'>
            Item 4
          </AccordionItem>
          <AccordionItem eventKey='5' title='Title 5'>
            Item 5
          </AccordionItem>
        </Accordion>
        <br/>
      </div>
    );
  }
}
