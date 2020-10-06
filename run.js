const axios = require('axios').default;
console.log("Hello")
async function go() {
    let res = await axios.get("http://localhost:3000/customers");
    console.log(res)
    return res;
}

go();