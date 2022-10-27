const markStatus = require("../entities/mark-status.enum");
const { dateEqualsIgnoreTime } = require("../utils/date");
const save = require("../utils/save");

const setMarkStatus = async (req, res) => {
    const status = req.body.status;
    if (!markStatus.hasStatus(status)) {
        res.sendStatus(400)
        return
    }
    const {pid, mid} = req.params;
    const parsed = req.parsed;
    const period = parsed.find(p => p.id === pid)
    const mark = period.marks.find(m => m.id === mid)
    mark.setStatus(status)
    await save(parsed)
    res.json(parsed)
}

module.exports = {setMarkStatus}