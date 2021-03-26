var fs = require('fs-extra');

var source = "E:/";
var destination = "C:/Users/DELL/Desktop/AJ/backupfolder";

var usbDetect = require('usb-detection');

usbDetect.startMonitoring();

usbDetect.on('add', function(device) {
    console.log('add', device);
    var path = "E:/";

    fs.readdir(path, function(err, items) {
        console.log(items);

        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            fs.copy(source, destination, function(err) {
                if (err) {
                    console.log("Please Wait...");
                }
                console.log('Copy completed!')
            });
        }
    });

    const child = require('child_process');

    child.exec('wmic logicaldisk get name', (error, stdout) => {
        console.log(
            stdout.split('\r\r\n')
            .filter(value => /[A-Za-z]:/.test(value))
            .map(value => value.trim())
        );
    });



});
usbDetect.on('add:vid', function(device) {
    console.log('add', device);
});
usbDetect.on('add:vid:pid', function(device) {
    console.log('add', device);
});

// Detect remove
usbDetect.on('remove', function(device) {
    console.log("remove");
});
usbDetect.on('remove:vid', function(device) {
    console.log('remove', device);
});
usbDetect.on('remove:vid:pid', function(device) {
    console.log('remove', device);
});

// Detect add or remove (change)
usbDetect.on('change', function(device) {
    console.log('change', device);
});
usbDetect.on('change:vid', function(device) {
    console.log('change', device);
});
usbDetect.on('change:vid:pid', function(device) {
    console.log('change', device);
});
