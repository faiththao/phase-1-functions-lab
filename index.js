let hqLocation = 42;
function distanceFromHqInBlocks(start) {
    return Math.abs(start - hqLocation);
}

function distanceFromHqInFeet(start) {
    return Math.abs((start - hqLocation)*264);
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end)*264);
}

function calculatesFarePrice(someValue1, someValue2) {
    let distance = (Math.abs(someValue1 - someValue2)*264);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400)*0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}