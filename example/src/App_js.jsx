import React, { useState } from 'react';
import './App.css';

import cutieRabbit from './image/CutieRabbit.png';

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = content.trim();
    if (!text) return;
    setPosts([{ id: Date.now(), text }, ...posts]);
    setContent('');
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div id="root">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '1rem' }}>新しい投稿を作成</h1>
        <img
          src={cutieRabbit}
          alt="Cutie Rabbit"
          style={{ height: '150px' }}
        />
      </div>

      <form className="post-form" onSubmit={handleSubmit}>
        <textarea
          className="post-textarea"
          rows={1}
          placeholder="ここに投稿内容を入力してください"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">投稿する</button>
      </form>

      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <p className="post-text">{post.text}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(post.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
