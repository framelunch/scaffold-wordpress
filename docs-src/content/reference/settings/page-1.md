+++
date = "2018-03-06T02:24:46Z"
title = "Customize wp-config"
menuTitle = "wp-config.phpを変更する方法"
weight = 20
+++

## wp-config.php とは？
その名の通りWordpressのコンフィグファイルです。  
データベースの接続先等重要な情報を保持しています。
    
マルチサイト化などの場合に   
デフォルトの **wp-config.php** を編集したくなることがたまにあります。
  
しかし、DockerのBaseImageである「wordpress:alpine」は  
コンテナをビルドする時に自動で **wp-config.php** を配置してくれるので  
特定の設定しか自由にカスタマイズできません。  
  
このままでは**コンテナをビルドする度にwp-config.phpが元に戻ってしまう**。  
という悩みを解決するのが本記事です。

## BaseImageの挙動を知る
[BaseImageのDockerfile](https://github.com/docker-library/wordpress/blob/59f3b513af128d12da1403721e4f9be8d882ec54/php7.2/fpm-alpine/Dockerfile)を見るとわかるように  
コンテナをビルドする際の最後の処理として[docker-entrypoint.sh](https://github.com/docker-library/wordpress/blob/59f3b513af128d12da1403721e4f9be8d882ec54/php7.2/fpm-alpine/docker-entrypoint.sh)を実行しています。  
その中で WordpressのコアファイルをWebRootにコピーしてくれているようです。  
つまり、今回はその **コピー元を置き換えてやればwp-config.phpを自由にできそう** ですね。

{{% notice note %}}
コピー元のディレクトリは Wordpressコンテナ側  
**/usr/src/wordpress**
{{% /notice %}}

## 置き換え手順
### 1. 置き換え元のファイルを用意する
置き換えたい **wp-config.php** を用意して  
Wordpressコンテナの設定ファイル置き場に配置しましょう。
  
下記のコマンドで既存の **wp-config.php** をコピーして編集するのがオススメです。
```bash
YOUR_WP_CONTAINER=scaffold-wp-wp
docker exec -it $YOUR_WP_CONTAINER bash -c "cp -f /var/www/html/wp-config.php /var/www/html/wp-content/themes/fl" 
```
{{% notice note %}}
上のコマンドによってホスト側  
**wordpress/themes/fl** 以下に **wp-config.php** がコピーされます。  
コピーされたファイルを下記の配置場所に移動してください。
{{% /notice %}}


{{% notice note %}}
Host側の下記に配置する  
**settings/wp/wp-config.php**
{{% /notice %}}

### 2. Dockerfileを編集する
以上を踏まえて、Dockerfile最下部に下記を追記してください。  
編集するファイルは「**settings/wp/Dockerfile**」


```
ADD ./wp-config.php /usr/src/wordpress/wp-config-sample.php
```

{{% notice warning %}}
追加するファイル名が「**wp-config-sample.php**」であることに注意
{{% /notice %}}

### 3. DockerImageをリビルドしましょう

```bash
docker-compose up -d --build
```

---

設定は以上です。お疲れ様でした！