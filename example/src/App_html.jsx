import React from 'react';

import cutieRabbit from './image/CutieRabbit.png';

function App() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '1rem' }}>新しい投稿を作成</h1>
        <img
          src={cutieRabbit}
          alt="Cutie Rabbit"
          style={{ height: '150px' }}
        />
      </div>
      <div>
        <textarea
          id="post-content"
          name="postContent"
          rows="1"
          cols="60"
          placeholder="ここに投稿内容を入力してください"
        />
      </div>
      <div>
        <button type="submit">投稿する</button>
      </div>
    </>
  );
}

export default App;
