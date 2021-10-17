import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestRobots, setSearchField} from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundry';

import './App.css';


function App() {

    const {searchField,} = useSelector(state => state.searchRobots)
    const {robots, isPending} = useSelector(state => state.requestRobots)
    const dispatch = useDispatch();
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled((window.scrollY > 8) && !scrolled)
    }

    useEffect(() => {
        dispatch(requestRobots());
    }, [dispatch])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
        <>
            <header
                style={{position: 'fixed',
                    top: 0,
                    textAlign: 'center',
                    width: '100%',
                    height: '200px',
                    zIndex: '100',
                    boxShadow: scrolled ? '0 4px 4px rgba(0, 0, 0, 0.4)': 'none',
                    transition: 'all 0.2s ease-out',
                }}>
                <h1 className='f1 center'>RoboFriends</h1>
                <SearchBox className={'ml-auto'}
                           searchChange={(event) => dispatch(setSearchField(event.target.value))}/>
            </header>
            <div className='tc'>
                <div style={{marginTop: '200px'}}>
                    {isPending ? <h1>Loading</h1> :

                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>

                    }
                </div>
            </div>
        </>
    );

}

export default App; //connect(mapStateToProps, mapDispatchToProps)(App)
