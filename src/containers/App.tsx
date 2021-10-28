import React, {SyntheticEvent, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {requestRobots, setSearchField} from '../store/actions';

import CardList from '../components/CardList';

import './App.css';
import Header from "./Header";
import {IRobot, IState} from "../store/reducers";


function App(): JSX.Element {
    const {searchField} = useSelector((state: IState) => state.searchRobots)
    const {robots, isPending} = useSelector((state: IState) => state.requestRobots)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestRobots());
        //console.log(process.env.REACT_APP_SOME_VARIABLE)
    }, [dispatch])


    const filteredRobots = robots.filter((robot: IRobot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    const handleSearchChange = useCallback(
        (event: SyntheticEvent<HTMLInputElement>) =>
            dispatch(setSearchField(event.currentTarget.value)),
        [dispatch]);

    return (
        <React.Fragment>
            <Header searchChange={handleSearchChange}/>
            <div className='tc'>
                <div style={{marginTop: '200px'}}>
                    {isPending ? <h1>Loading</h1> :
                        <CardList robots={filteredRobots}/>
                    }
                </div>
            </div>
        </React.Fragment>
    );

}

export default App; //connect(mapStateToProps, mapDispatchToProps)(App)
