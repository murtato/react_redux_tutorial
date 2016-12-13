// packages installed through npm don't need folder extensions;
import React from 'react';
import ReactDOM from 'react-dom';

// denote folder extensions if importing files made by self
import Counter from './Counter';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDsnMggqtdMnqnUbwWb27GQuOAIk0RZTFk';

// Create a new component. This component
// should render some HTML onto the page
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and
// put it on the page (in the DOM)
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount'),
    <App />, // placing SearchBar here and hoping it doesn't break... much
    document.querySelector('.container')
  );
});
