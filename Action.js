// const usbdevice = require('DeviceDector')
// import {USBDevice} from './DeviceDector'

$(document).ready(function(){

    $("div.container").click(function(){
        USBDevice.getDevice().then((devices) => {
            console.log("decetor");
            console.log(devices);
        });
        console.log(" clicked ");
        // console.log(devices);
    });
});
