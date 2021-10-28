import {shallow} from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe('ErrorBoundary', function () {
    it('should render properly', function () {
        expect(shallow(<ErrorBoundary/>)).toMatchSnapshot()
    });
});
