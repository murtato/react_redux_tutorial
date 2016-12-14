// packages installed through npm do not need folder extensions
import React from 'react';
import ReactDOM from 'react-dom';

// denote folder extensions if importing files made by self
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDsnMggqtdMnqnUbwWb27GQuOAIk0RZTFk';

// Create a new component. This component
// should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and
// put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
