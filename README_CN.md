# Steam 雷姆

[English](./README.md) | **中文** | [日本語](./README_JA.md)

基于 [Millennium](https://github.com/SteamClientHomebrew/Millennium) 框架的 Steam 皮肤

![preview](images/header.png)

## 功能

- 圆角设计
- 三种圆角大小（小/中/大）
- 自定义背景图片
- 覆盖所有 Steam UI：库、好友、商店、菜单、通知、覆盖层

## 安装

1. 安装 [Millennium](https://github.com/SteamClientHomebrew/Millennium)
2. 将皮肤文件夹放入 `steamui/skins/` 目录
3. 在 Millennium 设置中选择皮肤

## 自定义背景

手动替换背景图片：

1. 准备一张图片（支持 jpg/png 格式）
2. 将图片重命名为 `main.jpg`
3. 替换 `images/main.jpg` 文件
4. 重启 Steam 应用更改

好友列表背景：替换 `images/friends.jpg`

## 项目结构

```
steam-leimu/
├── css/                    # CSS 文件
│   ├── libraryroot.custom.css
│   ├── friends.custom.css
│   ├── overlay.custom.css
│   ├── notifications.custom.css
│   ├── menu.custom.css
│   ├── webkit.css
│   └── radius-*.css       # 圆角选项
├── js/                     # JavaScript 文件
│   ├── libraryroot.custom.js
│   ├── friends.custom.js
│   ├── bigpicture.custom.js
│   └── localizer.js        # translate 文件
├── images/                 # 图片资源
│   ├── main.jpg
│   ├── friends.jpg
│   ├── header.png
│   └── splash.png
├── skin.json              # 皮肤配置
└── LICENSE                # MIT 开源协议
```

## 开源协议

本项目采用 MIT 开源协议 - 详见 [LICENSE](LICENSE) 文件

## 作者

- **煜峰** - [yufengOvO](https://github.com/yufengOvO)
