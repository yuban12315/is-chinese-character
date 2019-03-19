###Check if the incoming character is Chinese characters

#Install
```
npm install is-chinese-character
```
#Usage
```js
const char=require('is-chinese-character')
char.isChineseCharacter('𠮷')
//=> true
char.isAllChineseCharacter('中文')
//=> true
```