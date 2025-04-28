import React from 'react'
import './App_old.css'

function App() {
  return (
    <>
      {/* ページ上部の見出し */}
      <h1>新しい投稿を作成</h1>

      {/* 投稿内容を入力するエリア */}
      <div>
        <textarea
          id="post-content"
          name="postContent"
          rows="5"
          cols="60"
          placeholder="ここに投稿内容を入力してください"
        ></textarea>
      </div>

      {/* フォーム送信ボタン */}
      <div>
        <button type="submit">投稿する</button>
      </div>
    </>
  )
}

export default App
