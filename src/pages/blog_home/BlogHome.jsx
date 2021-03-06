import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { renderNotFound } from '../../domains/error/error_actions';

import { fetchBlog } from '../../domains/blog/blog_actions';
import { BlogHeader } from '../../domains/blog/components/BlogHeader';

import { fetchEntryList } from '../../domains/entry_list/entry_list_actions';
import { EntryList } from '../../domains/entry_list/components/EntryList';

import { Main } from '../../foundation/components/Main';

export function BlogHome() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.toJS());
  const entryList = useSelector((state) => state.entryList.toJS());
  const [hasFetchFinished, setHasFetchFinished] = useState(false);

  useEffect(() => {
    setHasFetchFinished(false);

    Promise.all(fetchBlog({ dispatch, blogId }), fetchEntryList({ dispatch, blogId })).catch(async ()=>{
      await renderNotFound({ dispatch });
    }).then(() => setHasFetchFinished(true))
  }, [dispatch, blogId]);

  return (
    <>
      <Helmet>
        <title>{blog.nickname} - Amida Blog: あみぶろ</title>
      </Helmet>
      <div className="BlogHome">
        <BlogHeader blog={blog} />

        <Main>
          <section className="BlogHome__entry-list">
            <h2 className="BlogHome__entry-list-title">記事一覧</h2>
            <EntryList blogId={blogId} list={hasFetchFinished?entryList:[]} />
          </section>
        </Main>
      </div>
    </>
  );
}
