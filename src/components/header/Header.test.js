import {shallow} from "enzyme";
import Header from "./Header";
import {create} from "react-test-renderer";


describe('Header', function () {
    it('should render Header component', function () {
        expect(shallow(<Header/>)).toMatchSnapshot()
    });
    //React Test Renderer
    it('should render Header component alt', function () {
        const header = create(<Header/>)
        expect(header.toJSON()).toMatchSnapshot();
    });
});
