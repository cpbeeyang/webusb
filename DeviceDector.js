// const USBDevice = new Object();
//
// USBDevice.getDevice = () => {
//     return window.navigator.usb.getDevice()
// }
//
// export default USBDevice;

var USBDevice = {

    requestDevicePermission: function() {
        navigator.usb.requestDevice({ filters: [{ vendorId: 0x0483, productId: 0x5710 },
                { vendorId: 0x0630, productId: 0x0818 },
                { vendorId: 0x0630, productId: 0x0618 },
                { vendorId: 0x0630, productId: 0x0818 }] })
            .then(device => {
                console.log(device.productName);
                console.log(device.manufacturerName);
            })
            .catch(error => { console.log(error); });
    },

    getDevice: function() {
        return window.navigator.usb.getDevices().then((devices) => {
            return devices;
        })
    }
}
USBDevice.requestDevicePermission();

function registerUsbEventListeners () {
    console.log("reader connect");
    window.navigator.usb.addEventListener("connect", connectEvent => {
        let device = connectEvent.device;
        console.log("device connected");
        console.log(device);
    });
    window.navigator.usb.addEventListener("disconnect", connectEvent => {
        //Device.close(); //cant call close on removed device
        Device = null;
        Interfaces = null;
        raiseLogEvent("reader disconnect");
    });
    function raiseLogEvent(message) {
        let logEvent = new CustomEvent('logEvent',{detail: message});
        if(document) document.dispatchEvent(logEvent);
    }
}
registerUsbEventListeners();


