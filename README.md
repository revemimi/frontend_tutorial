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

### ■ nvmのインストール
参考：　[【初心者向け】Windows 環境で npm を導入する](https://qiita.com/fehde/items/17a2bfff8f5a5767c600)

以下の手順に従って、Windows 環境に nvm を導入します。
1. GitHub の nvm-windows リポジトリから nvm-setup.zip をダウンロードします。
2. リンク: https://github.com/coreybutler/nvm-windows
3. ZIP ファイルを解凍し、中にある nvm-setup.exe をダブルクリックしてインストーラーを起動します。
4. インストーラーの指示に従い、nvm-windows をインストールします。

### ■ nvm上でNode.jsをインストール
nvm（Node Version Manager）を使って、Node.js を簡単にインストール・切り替えできます。
- インストール可能なバージョン一覧を表示
```
nvm list available
```
- 推奨される LTS（Long Term Support）版をインストール（例: 最新の LTS を選択）
```
nvm install 22.15.0
```
- インストールしたバージョンを使用
```
nvm use 22.15.0
```
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
myappのディレクトリに移動する
```
cd myapp
```
パッケージのインストール
```
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

🔗 [作成例と詳しい手順はこちら！](./example/)
