import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useEffect(() => {
    const b = getElementByTagName("body");
    const ele = b.items(0);

    const new_ele = document.createElement("script");
    new_ele.setAttribute("src", TWITTER_SDK);
    ele.appendChild(new_ele);

    return () => {
      new_ele.remove();
    };
  }, []);

  return (
    <div className="entry-TwitterShareButton">
      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
    </div>
  );
}
