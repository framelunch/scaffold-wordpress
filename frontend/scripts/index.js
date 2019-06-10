import 'core-js/stable';
import { format } from 'date-fns';

import './modules/DeviceChecker';

console.log(`Run: ${format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS')}`);

window.addEventListener('DOMContentLoaded', () => {
  console.log(`onDOMContentLoaded: ${format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS')}`);
});
