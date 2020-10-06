const axios = require('axios').default;

test("Verify server response", async () => {
    let res = await axios.get("http://localhost:3000/customers");
    if (process.env.CI == true) {
        expect(true).toBe(true);
    }
    expect(res.data).toBeTruthy();
});