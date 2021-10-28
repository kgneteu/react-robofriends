import {shallow} from "enzyme";
import App from "./App";

describe('App test', function () {
    // it('should render', function () {
    //     const wrapper = shallow(<App/>)
    //     expect(wrapper.html()).toContain('placeholder="search robots"')
    // });
    expect(shallow(<App/>)).toMatchSnapshot();
});
