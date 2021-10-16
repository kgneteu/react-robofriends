import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestRobots, setSearchField} from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
// const mapStateToProps = (state) => {
//     return {
//         searchField: state.searchRobots.searchField,
//         robots: state.requestRobots.robots,
//         isPending: state.requestRobots.isPending
//     }
// }


function App() {

    const {searchField,} = useSelector(state => state.searchRobots)
    const {robots, isPending} = useSelector(state => state.requestRobots)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestRobots());
    }, [dispatch])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))}/>
            {isPending ? <h1>Loading</h1> :
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            }
        </div>
    );

}

export default App; //connect(mapStateToProps, mapDispatchToProps)(App)
