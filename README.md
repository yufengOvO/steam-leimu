# Steam Leimu

[中文](README_CN.md)

A Steam skin based on the [Millennium](https://github.com/SteamClientHomebrew/Millennium) framework with Material Design 3 style.

![preview](images/md.png)

## Features

- MD3 style rounded corners
- Dark/Light theme switching
- Three corner radius options (Small/Medium/Large)
- Custom background images
- Video background support
- Covers all Steam UI: Library, Friends, Store, Menu, Notifications, Overlay

## Installation

1. Install [Millennium](https://github.com/SteamClientHomebrew/Millennium)
2. Place the skin folder into `steamui/skins/` directory
3. Select the skin in Millennium settings

## Custom Background

Use `skintool.exe` to customize background, adjust transparency (0~1) and rename the skin. Recommended background image resolution: 1920×1080

## Project Structure

```
steam-leimu/
├── css/                    # CSS files
│   ├── dark.css           # Dark theme
│   ├── light.css          # Light theme
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
│   └── bigpicture.custom.js
├── images/                 # Image assets
│   ├── main.jpg
│   ├── friends.jpg
│   └── md.png
├── skin.json              # Skin configuration
├── Install.cmd            # Installation script
└── LICENSE                # MIT License
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **煜峰** - [yufengOvO](https://github.com/yufengOvO)
