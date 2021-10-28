import {shallow} from "enzyme";
import Card from "./Card";

describe('Card',()=>{
    it('should match Card component snapshot', function () {
        expect(shallow(<Card/>)).toMatchSnapshot();
    });
})


