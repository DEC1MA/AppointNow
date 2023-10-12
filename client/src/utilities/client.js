
const axios = require("axios");

let token = undefined

let request = async (url, headers, body) => {
  let authHeaders = { ...headers, token }
  console.log(url, authHeaders, body)
  try {
    const { data } = await axios.post(`http://localhost:10000/${url}`, body, { headers: authHeaders });
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

class Api {
  static instance;
  constructor() {
    Api._instance = this;
  }
  user = {
    token: undefined,
    register(phone) {
      return request("user/register", {}, { phone });
    },
    verify(cCode, vCode) {
      return request("user/verify", {}, { cCode, vCode });
    },
    complete(cCode, firstName, lastName) {
      return new Promise(resolve => {
        request("user/complete", {}, { cCode, firstName, lastName }).then(res => {
          if (res.status === 'success') {
            token = res.data.session.token
          }
          resolve(res)
        });
      })
    },
    login() {
      return request("user/login", {}, { token });
    },
  };
  business = {
    create(
      name,
      about,
      location,
      phone,
      workingDays,
      workingHours,
      duration
    ) {
      return request("business/create", {}, {
        name,
        about,
        location,
        phone,
        workingDays,
        workingHours,
        duration
      });
    },
    update(
      businessId,
      name,
      about,
      location,
      phone,
      workingDays,
      workingHours,
      duration
    ) {
      return request("business/update", {}, {
        businessId,
        name,
        about,
        location,
        phone,
        workingDays,
        workingHours,
        duration
      });
    },
    search(query) {
      return request("business/search", {}, {
        query
      });
    },
    async readMyBusiness() {
      return request("business/readMyBusiness", {}, {});
    },
  };
  event = {
    create(businessId, startTime) {
      return request("event/create", {}, { businessId, startTime });
    },
    search(query) {
      return request("event/search", {}, { query });
    },
    cancelUserEvents() {
      return request("event/cancelUserEvents", {}, {});
    },
    cancelBusinessEvents(businessId) {
      return request("event/cancelBusinessEvents", {}, { businessId });
    },
    cancel(eventId) {
      return request("event/cancel", {}, { eventId });
    },
  };
}

let api = new Api();
(async () => {
  let res1 = await api.user.register("+123456789");
  console.log(res1)
  let res2 = await api.user.verify(res1.data.clientCode, res1.data.verificationCode);
  console.log(res2)
  let res3 = await api.user.complete(res2.data.clientCode, 'edward', 'kasperian');
  console.log(res3)
  let res4 = await api.user.login();
  console.log(res4)

  let res5 = await api.business.create(
    'test',
    'test about',
    'test location',
    '+123',
    ['sat', 'sun', 'mon'],
    [{ start: 123, duration: 100 }, { start: 456, duration: 100 }],
    10
  )
  console.log(res5)
  let res6 = await api.business.update(
    res5.data.business._id,
    'test 2',
    'test about',
    'test location',
    '+123',
    ['sat', 'sun', 'mon'],
    [{ start: 123, duration: 100 }, { start: 456, duration: 100 }],
    10
  )
  console.log(res6)
  let res7 = await api.business.search('test about')
  console.log(res7)
  let res8 = await api.business.readMyBusiness()
  console.log(res8)

  let res9 = await api.event.create(res6.data.business._id, 123)
  console.log(res9)
  let res10 = await api.event.search(res6.data.business._id, 123)
  console.log(res10)
  let res11 = await api.event.cancel(res9.data.event._id)
  console.log(res11)
  let res12 = await api.event.cancelUserEvents()
  console.log(res12)
  let res13 = await api.event.cancelBusinessEvents(res5.data.business._id)
  console.log(res13)
})()
