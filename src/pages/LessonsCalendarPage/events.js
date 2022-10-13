import { RRule, RRuleSet, rrulestr } from 'rrule'
import moment from 'moment'

const startDate = new Date(Date.UTC(2022, 3, 25, 18, 0, 0) - 6 * 3600 * 1000) 
const endDate = new Date(Date.UTC(2022, 3, 25, 18, 0, 0) - 6 * 3600 * 1000) 
const dates = new RRule({
    freq: RRule.DAILY,
    dtstart: startDate,
    until: endDate.setMonth(endDate.getMonth() + 7),
    // interval: 1,
    byweekday: [RRule.MO, RRule.WE, RRule.FR]
}).all()

export const events = dates.map((date, index) => {
    return {
        title : `PN-18`,
        start : date,
        end : moment(date).add(2, "hours").toDate()
    }
})
