const noble = require('@abandonware/noble');

noble.startScanning(['4fafc201-1fb5-459e-8fcc-c5c9c331914b'], true);

noble.on('discover', async (peripheral) => {
  try {
    await noble.stopScanningAsync();
    await peripheral.connectAsync();
    const { characteristics } = await peripheral.discoverAllServicesAndCharacteristicsAsync(['4fafc2011fb5459e8fccc5c9c331914b'], ['beb5483e36e14688b7f5ea07361b26a8']);
    const imuCharacteristic = characteristics[0];
    await subscribeToCharacteristic(imuCharacteristic);
  } catch (e) {
    console.error(e);
  }
});

async function subscribeToCharacteristic(characteristic) {
  return new Promise((resolve, reject) => {
    characteristic.subscribe(error => {
      if (error) {
        reject(error);
      } else {
        console.log('Subscribed to notifications.');
        characteristic.on('data', (data, isNotification) => {
          console.log('Received data:', data.toString());
          // Handle the received data
        });
        resolve();
      }
    });
  });
}