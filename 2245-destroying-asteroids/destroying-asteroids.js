/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
    asteroids = asteroids.sort((a, b) => b - a);

    while (asteroids.length > 0 && asteroids[asteroids.length - 1] <= mass) {
        mass += asteroids[asteroids.length - 1];
        asteroids.pop()
    }
    // console.log(asteroids, mass)
    if (asteroids.length === 0) {
        return true
    }
    return false
};