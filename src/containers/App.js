import React from "react";
import 'tachyons';

import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestRobots, setSearchField} from '../store/actions';

import CardList from '../components/CardList';

import './App.css';
import Header from "./Header";


function App() {
    const {searchField,} = useSelector(state => state.searchRobots)
    const {robots, isPending} = useSelector(state => state.requestRobots)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestRobots());
        //console.log(process.env.REACT_APP_SOME_VARIABLE)
    }, [dispatch])


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    const handleSearchChange = useCallback(event => dispatch(setSearchField(event.target.value)),
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
