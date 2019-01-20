import React from 'react';
import SongList from './SongList';
import SongDisplay from './SongDisplay';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDisplay />
                </div>
            </div>
        </div>
    );
}

export default App;