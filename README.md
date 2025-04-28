# フロントエンド (HTML, CSS, JavaScript) チュートリアル  
**対象：Windows 11**

---

## 1. GitHubについて準備しよう！

### ■ GitHubアカウント作成
- [GitHubアカウントの作り方](https://zenn.dev/protoout/articles/50-howto-github-setup)

### ■ Gitインストール
- [Gitのインストール方法](https://zenn.dev/protoout/articles/50-howto-github-setup)

---

## 2. 開発環境を整えよう！

### ■ npmの導入
- 参考：[【初心者向け】Windows 環境で npm を導入する](https://qiita.com/fehde/items/17a2bfff8f5a5767c600)

1. `nvm-setup.zip` をダウンロード  
2. 展開して、`nvm-setup.exe` をダブルクリックしてインストール

### ■ npmが使えるか確認
以下のコマンドを実行して、バージョン番号が表示されれば成功です！
```
npm --version
```

例：`10.92` など

---

## 3. Viteを使ってプロジェクトを作成しよう！

### ■ 新しいプロジェクトを作成

```
npm create vite@latest myapp
```

選択肢が出たら以下を選ぼう：
- **Select a framework** → `React`
- **Select a variant** → `JavaScript`

### ■ プロジェクトディレクトリに移動してパッケージをインストール
```
cd myapp
npm install
```


---

## 4. いよいよ開発スタート！

### ■ 開発サーバーを起動する
```
npm run dev
```

ブラウザで次にアクセスします：

[http://localhost:5173/](http://localhost:5173/)

✅ `Vite + React` と書かれたページが表示されれば成功！

---

# 🎉 環境構築、おつかれさまでした！

これで開発を始める準備はバッチリです！

## 次は、実際にアプリを作ってみよう！

今回は「投稿」と「投稿の削除」ができる、シンプルな投稿アプリにチャレンジします。

🔗 [作成例と詳しい手順はこちら！](./example/README.md)

（クリックして、実装に進みましょう！）
