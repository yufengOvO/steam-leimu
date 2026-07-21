// ==============================================================================
// LOCALIZER SCRIPT
// Dynamically localizes steam-leimu theme settings based on Steam client language
// ==============================================================================

(() => {
  const TRANSLATIONS = {
    ja: {
      // Tabs
      "General": "全般",
      "Style": "スタイル",

      // Option Titles
      "Theme Switch": "テーマを切り替え",
      "Corner Radius": "角丸の設定",

      // Descriptions
      "Switch between dark and light theme": "テーマをダークまたはライトに切り替えます",
      "Set the corner radius size for UI elements": "UI要素の角の丸みの大きさを設定します",

      // Values
      "dark": "ダーク",
      "light": "ライト",
      "small": "小",
      "medium": "中",
      "large": "大"
    }
  };

  // Helper to get active language
  function getSteamLanguage() {
    if (typeof window !== 'undefined') {
      if (window.g_Language) return window.g_Language.toLowerCase();
    }
    const htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang) return htmlLang.toLowerCase();
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language.toLowerCase();
    }
    return 'english';
  }

  const lang = getSteamLanguage();
  let activeLang = 'en';
  if (lang.startsWith('ja') || lang === 'japanese') {
    activeLang = 'ja';
  }

  if (activeLang === 'en') return;

  const dict = TRANSLATIONS[activeLang];
  let isTranslating = false;

  // Helper to translate a single text node
  function translateNode(node) {
    if (isTranslating) return;
    const text = node.nodeValue.trim();
    if (dict[text]) {
      isTranslating = true;
      node.nodeValue = dict[text];
      isTranslating = false;
    }
  }

  // Walk element and translate all child text nodes
  function translateElement(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
      translateNode(node);
    }
  }

  // Observe and translate
  function init() {
    translateElement(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') {
          translateNode(mutation.target);
        } else if (mutation.type === 'childList') {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              translateElement(node);
            } else if (node.nodeType === Node.TEXT_NODE) {
              translateNode(node);
            }
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
