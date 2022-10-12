import { RRule, RRuleSet, rrulestr } from 'rrule'

const dates = new RRule({
    freq: RRule.DAILY,
    dtstart: new Date(Date.UTC(2022, 9, 13, 18, 0, 0)),
    count: 10,
    interval: 2,
}).all()

const endDates = new RRule({
    freq: RRule.DAILY,
    dtstart: new Date(Date.UTC(2022, 9, 13, 20, 0, 0)),
    count: 10,
    interval: 2,
}).all()

export const events = dates.map((date, index) => {
    return {
        title : "PN-18",
        start : date,
        end: endDates[index]
    }
})
