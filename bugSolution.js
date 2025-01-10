```javascript
import * as Constants from 'expo-constants';

function getDeviceName() {
  const deviceName = Constants.deviceName;
  return deviceName || 'Unknown Device'; // Provide fallback
}

console.log(getDeviceName());
```