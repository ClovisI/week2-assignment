import './App.css';
import missedArticles from './_data/missed-articles.json';
import yourArticles from './_data/your-articles.json';
import React from 'node_modules/react';
import Article from './Article.js';
import Header from './Header.js';
import Section from './Section.js';

function App() {
  return (
      <div>
        <Header/>
        {yourArticles.map((a, idx) => {
          return <Article key={idx} article={a} />
        })}
        {missedArticles.map((a, idx) => {
          return <Article key={idx} article={a} />
        })}
        <h1>My Blog</h1>
      </div>
    );
}

export default App;
