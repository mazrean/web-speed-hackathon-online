import React from 'react';
import Icon from '../../../../assets/thumbs-up.svg';

export function AmidaLikeButton({ likeCount, onClick }) {
  return (
    <button type="button" className="entry-AmidaLikeButton" onClick={onClick}>
      <Icon />
      <span className="entry-AmidaLikeButton__count">{likeCount}</span>
    </button>
  );
}
