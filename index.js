const noble = require('@abandonware/noble');

noble.startScanning([], true);

noble.on('discover', async (peripheral) => {
  // await noble.stopScanningAsync();
  //await peripheral.connectAsync();
  // const {characteristics} = await peripheral.discoverSomeServicesAndCharacteristicsAsync(['180f'], ['2a19']);
  // const batteryLevel = (await characteristics[0].readAsync())[0];

  console.log(peripheral);

  // await peripheral.disconnectAsync();
  // process.exit(0);
});