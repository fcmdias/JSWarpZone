var fetch = require("node-fetch");


const promise_one = new Promise((resolve, reject) => {
    resolve('An atom has a nucleus and electrons')
})

promise_one
.then( (response) => {
    return response + " and a nucleus has neutrons and protons"
})
.then( (response2) => {
    console.log(response2)
})


// async handles asynchronous code in a manner that appears synchronous
async function func_one(state) {
    return new Promise((resolve,reject) => {
        if (state) {
            resolve("sucess")
        } else {
            reject("failure")
        }
    })
}

func_one(true)
.then( (response) => {
    console.log(response)
})
.catch((er) => {
    console.error(er)
})
func_one(false)
.then( (response) => {
    console.log(response)
})
.catch((er) => {
    console.error(er)
})



fetch('https://api.github.com/users/fcmdias')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    console.log("the login value is", data.login)
  })
  .catch((error) => {
    console.error(error)
  })


  async function getUser() {
    try {
      // Handle success in try
      const response = await fetch('https://api.github.com/users/octocat')
      const data = await response.json()
  
      console.log(data)
    } catch (error) {
      // Handle error in catch
      console.error(error)
    }
  }


  getUser()