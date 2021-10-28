import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './constants';
import {AnyAction} from "redux";


export interface IRobot {
    id: number;
    name: string;
    email: string;
}

interface IStateRobots {
    robots: Array<IRobot>;
    isPending: boolean
}

interface ISearchState {
    searchField: string;
}

const initialStateSearch: ISearchState = {
    searchField: ''
}


export const searchRobots = (state: ISearchState = initialStateSearch,
                             action: AnyAction) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}

const initialStateRobots: IStateRobots = {
    robots: [],
    isPending: true
}

export interface IState {
    searchRobots: {
        searchField: string;
    };
    requestRobots: IStateRobots
}

export const requestRobots = (state: IStateRobots = initialStateRobots, action: AnyAction) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload})
        default:
            return state
    }
}
