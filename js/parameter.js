//===========Example of the default parameter==========

function message(msg = "Hello default parameter") {
    console.log(`${msg}`);
}

message();
message('Passing something value');


//===========Example of the Rest Parameter===========

function sum(x, y, ...z) {
    console.log(`X: ${x}, Y: ${y}, Z: ${z}`)
}

sum(5, 10, 12, 16, 20);