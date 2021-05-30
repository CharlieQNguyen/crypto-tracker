// https://github.com/motdotla/dotenv
require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

async function main() {
  // https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide, but adapted for axios
  // axios config: https://github.com/axios/axios#request-config
  const config = {
    method: "get",
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    data: {
      start: 1,
      limit: 50,
      convert: "USD",
    },
    headers: { "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_APIKEY }, // im authorize to make this request give me data
  };
  const response = await axios(config);
  // https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
  const prettyPrintedResponse = JSON.stringify(response.data, null, 2);
  fs.writeFileSync("data/response.json", prettyPrintedResponse);
  // console.log(response);
}

main();
