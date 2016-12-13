// packages installed through npm don't need folder extensions;
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

// denote folder extensions if importing files made by self
import SearchBar from './components/search_bar';


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
    document.getElementById('mount')
  );
});
