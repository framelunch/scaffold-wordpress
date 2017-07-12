# プラグイン仕様
## このプラグインでできること

- USERのIDごとに管理画面MENUに表示できる項目を変えられる  
```
・このUSERは「投稿タイプA」の記事編集ボタンだけ表示する
・このUSERは「全てのMENU」を表示する
※ 表示されていないMENU画面のURLを
  直接叩いた場合のリダイレクト先も設定可能
```
- USERのIDごとに編集できる投稿タイプを設定できる
```
・このUSERは「投稿タイプA」の記事編集だけできる
・このUSERは「全ての記事」を編集できる
```


## プラグインの設定前にやること
### 必要な情報の収集

- カスタム投稿タイプの決定  
「投稿の種類ってどんなのがありますか？」  
(後から増やすことも可能)
- カスタムタクソノミー(=カテゴリとかタグとか)の決定  
「カテゴリとかタグってどうしますか？」  
(投稿タイプごとに設定する)
- 実行権限(役割)について  
「この投稿タイプは誰が投稿できるんですか？」  
- カスタムフィールドの詳細
「どの投稿タイプでは、どんなフィールドがいる？」  
(後から変更可能)

