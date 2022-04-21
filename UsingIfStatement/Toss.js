const HEADS = 0;
    let toss = Math.floor(Math.random() * 10) % 2;

    if (toss == HEADS) {
        console.log("Toss found HEADS");
    } else {
        console.log("Toss found TAILS");
    }