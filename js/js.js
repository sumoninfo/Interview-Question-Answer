// synchronous (sync) - you can only execute one thing at a time
// asynchronous (async) - you can execute multiple things at the same time

async function showAvatar() {
    // read
    await setTimeout(resolve, 3000);
    // read next 3s
}

showAvatar();