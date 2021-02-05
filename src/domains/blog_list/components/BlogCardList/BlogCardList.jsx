import React from 'react';

import { BlogCard } from '../BlogCard';

export function BlogCardList({ list, columnCount }) {

  return (
    <div className="blog-list-BlogCardList">
      {list.map((item, i) => (
        <div
          key={i}
          className="blog-list-BlogCardList__column"
          style={{ "--grid-width": `${100 / columnCount }%` }}
        >
          <BlogCard blog={item} />
        </div>
      ))}
    </div>
  );
}
