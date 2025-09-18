

/**
 * Calculate the total score from an object of scores
 * @param {Object} scores - { roadSigns: 15, trafficRules: 10, ... }
 * @returns {number} total
 */
export const calculateTotal = (scores) =>
    Object.values(scores).reduce((sum, val) => sum + (Number(val) || 0), 0);

/**
 * Get remark (PASSED / FAILED / "")
 * @param {Object} scores - object of scores
 * @param {number} total - total score
 * @returns {string} remark
 */
export const getRemark = (scores, total) =>
    Object.values(scores).every((v) => v === "" || v === null || v === undefined)
        ? ""
        : total >= 80
            ? "PASSED"
            : "FAILED";
