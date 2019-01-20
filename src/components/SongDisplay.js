import React from 'react';
import { connect } from 'react-redux';

const SongDisplay = ({selected}) => {
    if (selected){
        return (
        <div>
            <h3>Details for:</h3>
            <p>
                {selected.title}
            </p>
            <p>
                {selected.duration}
            </p>
        </div>);
    }
    return <div>Select a song</div> 
}
//mapstatetoprops receives whole state, destructured afterwards.
const mapStateToProps = ({selected}) => {
    return { selected };
}

export default connect(mapStateToProps)(SongDisplay);