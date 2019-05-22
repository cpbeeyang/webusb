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
    // let devices = await navigator.usb.getDevices();
    // devices.forEach(device => {
    //     // Add |device| to the UI.
    //     console.log("await navigator.usb.getDevices()");
    //     console.log(device);
    // });

    console.log('DOMContentLoaded');

    let button = document.getElementById('button');
    button.addEventListener('click', async () => {
        let device;
        try {
            device = await navigator.usb.requestDevice({ filters: [{
                    vendorId: 0x0630,
                    productId: 0x0618
                }]});
        } catch (err) {
            // No device was selected.
        }

        if (device !== undefined) {
            // Add |device| to the UI.
        }
    });
});


