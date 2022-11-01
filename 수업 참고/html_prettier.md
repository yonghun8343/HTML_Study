### Prettier HTML적용 방법

F1 -> Preferences: Open User Setting(JSON)
의 파일 하단 부분에 아래의 내용 추가
```JSON
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  }
  ```

### 그래도 적용이 안될 경우

F1 - format document with -> Configure Default Formatter -> Prettier - Code formatter