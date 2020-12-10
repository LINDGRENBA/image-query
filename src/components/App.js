import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
    <div>
      <SearchBar 
        className="ui container" 
        style={{marginTop: '10px'}}/>
    </div>
    );
  }
}

export default App;