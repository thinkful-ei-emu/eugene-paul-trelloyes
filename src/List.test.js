import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe ('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards ={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', ()=>{
    const tree=renderer
      .create(<List cards ={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('renders UI as expected with 0 cards', ()=>{
    const tree=renderer
      .create(<List cards ={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
