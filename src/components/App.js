import React from "react";
import blogData from "../data/blog";
import About from "./About";

import ArticleList from "./ArticleList";
import Header from "./Header";




console.log(blogData);

function App() {
  return (
    <div className="App">

      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      <Header />

      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );

}

export default App;
