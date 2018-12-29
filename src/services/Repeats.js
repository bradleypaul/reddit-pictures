let repeats = new Set();

let checkRepeats = (id) => {
    console.log(repeats); 
    if (repeats.has(id))
        return false;
    repeats.add(id);
    return true;
}

export default {
    checkRepeats
}