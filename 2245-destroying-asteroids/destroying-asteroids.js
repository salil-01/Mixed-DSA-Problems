/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
    // sorting in descending order
    asteroids = asteroids.sort((a, b) => b - a);

    while (asteroids.length > 0 && asteroids[asteroids.length - 1] <= mass) {
        // checking if mass is equal or less add it mass and remove from asteriod
        mass += asteroids[asteroids.length - 1];
        asteroids.pop()
    }
    // console.log(asteroids, mass)
    if (asteroids.length === 0) {
        // if there are no asteriod left return true
        return true
    }
    return false
};