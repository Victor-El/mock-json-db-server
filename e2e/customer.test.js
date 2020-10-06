const axios = require('axios').default;

test("Verify server response", async () => {
    let res = await axios.get("http://localhost:3000/customers");
    expect(res.data).toBeTruthy();
});