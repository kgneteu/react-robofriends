import {shallow} from "enzyme";
import CardList from "./CardList";


it('should render CardList component', function () {
    let robots = [
        {id: 1, name: "x", email: 'aaa'},
        {id: 2, name: "x", email: 'aaa'}
    ]
    expect(shallow(<CardList robots={robots}/>)).toMatchSnapshot();
});
