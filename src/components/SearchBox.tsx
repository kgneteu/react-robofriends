import React, {SyntheticEvent} from 'react';

type ComponentProps = {
    searchChange(event: SyntheticEvent<HTMLInputElement>): void;
    className: string
}
const SearchBox = ({searchChange}: ComponentProps) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
