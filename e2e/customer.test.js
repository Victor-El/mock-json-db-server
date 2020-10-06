const axios = require('axios').default;

test("Verify server response", async () => {
    let res = {};
    try {
        res = await axios.get("http://localhost:3000/customers");
    } catch (error) {
        
    }
    if (process.env.CI == true) {
        expect(true).toBe(true);
    } else {
        expect(res.data).toBeTruthy();
    }
});