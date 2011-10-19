/** @param {string} name
 *  @return {function()} */
function TestCase(name) {};

/** @param {string=} message */
function fail(message) {};

/** @param {string|boolean} p1
 *  @param {boolean=} p2 */
function assert(p1, p2) {};

/** @param {string|boolean} p1
 *  @param {boolean=} p2 */
function assertTrue(p1, p2) {};

/** @param {string|boolean} p1
 *  @param {boolean=} p2 */
function assertFalse(p1, p2) {};

/** @param {*} p1
 *  @param {*} p2
 *  @param {*=} p3 */
function assertEquals(p1, p2, p3) {};