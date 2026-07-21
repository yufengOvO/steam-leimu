# Steam Rem

[English](./README.md) | [中文](./README_CN.md) | **日本語**

[Millennium](https://github.com/SteamClientHomebrew/Millennium) フレームワークをベースにした、Material Design 3 スタイルな Steam スキンです。

![preview](images/header.png)

## 機能

- 角丸なデザイン
- 3 種類のコーナー半径のオプション (小/中/大)
- カスタム背景画像
- Steam UI 全体に対応: ライブラリ、フレンド、ストア、メニュー、通知、オーバーレイ

## インストール

1. [Millennium](https://github.com/SteamClientHomebrew/Millennium) をインストールします
2. スキンフォルダーを `steamui/skins/` のディレクトリに配置してください
3. Millennium の設定でスキンを選択してください

## カスタム背景

手動で背景画像を変更できます:

1. 画像を用意します (jpg/png 形式に対応)
2. 画像のファイル名を `main.jpg` に変更します
3. `images/main.jpg` のファイルを置換します
4. Steam を再起動で変更が適用されます

フレンドリストの背景はこちら: `images/friends.jpg` を置換する

## プロジェクトの構成

```
steam-leimu/
├── css/                    # CSS ファイル
│   ├── libraryroot.custom.css
│   ├── friends.custom.css
│   ├── overlay.custom.css
│   ├── notifications.custom.css
│   ├── menu.custom.css
│   ├── webkit.css
│   └── radius-*.css       # 角丸のオプション
├── js/                     # JavaScript ファイル
│   ├── libraryroot.custom.js
│   ├── friends.custom.js
│   ├── bigpicture.custom.js
│   └── localizer.js        # 言語ファイル
├── images/                 # 画像のアセット
│   ├── main.jpg
│   ├── friends.jpg
│   ├── header.png
│   └── splash.png
├── skin.json              # スキンの構成
└── LICENSE                # MIT ライセンス
```

## ライセンス

このプロジェクトは、MIT ライセンスに基づいてライセンスされています。詳細は、[LICENSE](LICENSE) ファイルを参照してください。

## 作者

- **煜峰** - [yufengOvO](https://github.com/yufengOvO)
