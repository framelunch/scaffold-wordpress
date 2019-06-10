import 'babel-polyfill'; // 各entrypointの先頭で読み込むが、サイズがデカイので場合によっては丸ごと外して必要なpolyfillのみ読み込む
import { format } from 'date-fns';

import './modules/DeviceChecker';

console.log(`Run: ${format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS')}`);

window.addEventListener('DOMContentLoaded', () => {
  console.log(`onDOMContentLoaded: ${format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS')}`);
});
