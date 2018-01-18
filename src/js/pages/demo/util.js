const dateType = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss']
const dateMap = {
    YYYY: 'getYear',
    MM: 'getMonth',
    DD: 'getDate',
    HH: 'getHours',
    mm: 'getMinutes',
    ss: 'getSeconds'
}

const dateFn = {
    getYear: (time) => {
        return time.getFullYear()
    },
    getMonth: (time) => {
        const month = time.getMonth() + 1
        return addZero(month)
    },
    getDate: (time) => {
        const day = time.getDate()
        return addZero(day)
    },
    getHours: (time) => {
        const hour = time.getHours()
        return addZero(hour)
    },
    getMinutes: (time) => {
        const minute = time.getMinutes()
        return addZero(minute)
    },
    getSeconds: (time) => {
        const second = time.getSeconds()
        return addZero(second)
    }
}

function addZero (num) {
    if (num < 10) num = '0' + num
    return num
}

const format = (date, type) => {
    const time = date ? new Date(date) : new Date()
    let placeholder = type
    dateType.forEach((val) => {
        if (type.indexOf(val) > -1) {
            const trueValue = dateFn[dateMap[val]](time)
            placeholder = placeholder.replace(val, trueValue)
        }
    })
    return placeholder
}

const setDays = (date, type, num) => {
    const time = date ? new Date(date) : new Date();
    type === 'add'
        ? time.setDate(time.getDate() + num)
        : time.setDate(time.getDate() - num);
    return time;
}

export {
    format,
    setDays
}
