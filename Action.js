$(document).ready(function(){

    $("div.container").click(function(){
        USBDevice.getDevice().then((devices) => {
            console.log("decetor");
            console.log(devices);
        });
        console.log(" clicked ");
    });
});


document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOMContentLoaded");
    const devices = await navigator.usb.getDevices();
    devices.forEach(device => {
        // Add |device| to the UI.
        console.log("await navigator.usb.getDevices()");
        console.log(device);
    });
});

