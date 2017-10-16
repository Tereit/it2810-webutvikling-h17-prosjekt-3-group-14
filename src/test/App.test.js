import React from 'react';
import ReactDOM from 'react-dom';
import App from '../scripts/app';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';
//
global.jestExpect = global.expect;
global.expect = chai.expect;

Enzyme.configure({adapter: new Adapter() });

it("1+1 = 2?", () => {
  expect(1+1).to.equal(2)
});

it('renders without crashing', () =>{
  const div = document.createElement('div');
  let testApp = new App();
  testApp.state ={
    displayCalendar: false,
    displayNotes: false,
    displayTodo: true,
    displayHome: true
  }
  ReactDOM.render(<testApp/>, div);
})

it('shallow render', () =>{
  const testapp = shallow(<App/>);
})

it('snapshot testing', ()=>{
  const rendered = renderer.create(<App/>);
  jestExpect(rendered.toJSON()).toMatchSnapshot();

})
