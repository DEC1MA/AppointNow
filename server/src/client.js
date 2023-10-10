
let request = (url, headers, body) => {
    console.log(`http://localhost:10000/${url}`)
    return fetch(
        `http://localhost:10000/${url}`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }
    ).then(res => res.json())
}

class Api {
    static instance
    constructor() {
        Api._instance = this
    }
    user = {
        register(phone) {
            return request('user/register', {}, { phone })
        },
        verify(cCode, vCode) {
            return request('user/verify', {}, { cCode, vCode })
        },
        complete(cCode, firstName, lastName) {
            return request('user/complete', {}, { cCode, firstName, lastName })
        },
        complete(token) {
            return request('user/login', {}, { token })
        }
    }
    business = {
        create(name, about, location, phone, workingDays,
            workingHours, duration) {

        },
        update(businessId, name, about, location, phone,
            workingDays, workingHours, duration) {

        },
        search(query) {

        },
        readMyBusiness() {

        }
    }
    event = {
        create(businessId, startTime) {

        },
        search(query) {

        },
        cancelUserEvents() {

        },
        cancelBusinessEvents(businessId) {

        },
        cancel(eventId) {

        }
    }
}

let api = new Api()

console.log()
api.user.register('+123456789').then(res => console.log(res))
