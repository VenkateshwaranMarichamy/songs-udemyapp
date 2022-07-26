import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
//for default export
//import selectSong from '../actions'

//for named exports
//import { selectSong } from '../actions';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div >
  );
};

export default App;
