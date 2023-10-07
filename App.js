import React from 'react'
import BlogContextDemo from './Components/BlogContextDemo';
/*
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import ChangeTextColorDemo from './Components/ChangeTextColor';
import ArrayOfObjects from './Components/ArrayOfObjects';
import DigitalClockUseFun from './Components/DigitalClockUsefun';
import DigitalClock from './Components/DigitalClock';
import ViewItems from './Components/ViewItems';


function App() {
  return (
    <div className="App">
      <ArrayOfObjects />
      <ChangeTextColorDemo />
      <Greet />
      <Welcome />
      <Counter />
      <DigitalClockUseFun/>
      <DigitalClock />
      <ViewItems />
    </div>
  );
}

export default App
*/

const blogInfo = { 
  React: { 
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};

export const BlogContext = React.createContext(blogInfo);

export default function App() {
  return (
    <div className='App'>
      <div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo />
        </BlogContext.Provider>
      </div>
    </div>
  )
}