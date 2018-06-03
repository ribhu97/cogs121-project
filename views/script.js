var myPythonScriptPath = 'ml.py';

// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

let data = []
pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    data = message
    
    console.log(data[3]);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err){
        throw err;
    };

    console.log('finished');
});

