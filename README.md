# Steam Leimu

**English** | [中文](./README_CN.md) | [日本語](./README_JA.md)

A Steam skin based on the [Millennium](https://github.com/SteamClientHomebrew/Millennium) framework with Material Design 3 style.

![preview](images/header.png)

## Features

- Rounded corner design
- Three corner radius options (Small/Medium/Large)
- Custom background images
- Covers all Steam UI: Library, Friends, Store, Menu, Notifications, Overlay

## Installation

1. Install [Millennium](https://github.com/SteamClientHomebrew/Millennium)
2. Place the skin folder into `steamui/skins/` directory
3. Select the skin in Millennium settings

## Custom Background

Manually replace the background image:

1. Prepare an image (jpg/png format supported)
2. Rename the image to `main.jpg`
3. Replace the `images/main.jpg` file
4. Restart Steam to apply changes

Friends list background: Replace `images/friends.jpg`

## Project Structure

```
steam-leimu/
├── css/                    # CSS files
│   ├── libraryroot.custom.css
│   ├── friends.custom.css
│   ├── overlay.custom.css
│   ├── notifications.custom.css
│   ├── menu.custom.css
│   ├── webkit.css
│   └── radius-*.css       # Corner radius options
├── js/                     # JavaScript files
│   ├── libraryroot.custom.js
│   ├── friends.custom.js
│   ├── bigpicture.custom.js
│   └── localizer.js        # translate file
├── images/                 # Image assets
│   ├── main.jpg
│   ├── friends.jpg
│   ├── header.png
│   └── splash.png
├── skin.json              # Skin configuration
└── LICENSE                # MIT License
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Author

- **煜峰** - [yufengOvO](https://github.com/yufengOvO)
