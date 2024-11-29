import axios from "axios";
export const fetchDatafromVtex = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://${process.env.VTEX_VENDOR_ID}.vtexcommercestable.com.br/api/oms/pvt/orders/1472150500035-01`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-VTEX-API-AppToken": process.env.X_VTEX_API_APPTOKEN,
      "X-VTEX-API-AppKey": process.env.X_VTEX_API_APPKEY,
      //   Cookie:
      //     "CheckoutOrderFormOwnership=AGzcDtjBlfGT0YRcqM7IV%2FiEtw5%2Flle1ETtd%2BovlQHm0tyIXPxG3LZzSgttoy2m9hGMY%2BkwCLWs6vEVc4eobxQM6dbGF6XiEp652%2BKCMob%2BeFpfSp5kw7wi4pSubsWhc9jq6FVUu2r98SKhNfMM75%2BN76WkX57Y%2BZpz%2B14ZHpwHyD%2BxzXH3xYgxqZpxxz5AEXV0rjIexGs6TGKZO%2BG8Zv6XJkJjG3A8DYgboXDCLTLYYkzMHH1ZHt7aaHtNT8z5F%2FG4N7F%2B1OvxZd7%2FEC3XJMR6L0ZKaUMl2Iug608%2F6bPLdqpilSDQnh5TRn6GgTV3JGwq5XkXmqxAg7xDhsDJXY03n5r0THWXl3APMywC1fbZoaFI9ypqa1nf8H4QWVkwShWRl4fywrQgqeRMMetWnPyKLaToKjOLnameLBVuK0MWXqlcr1lxG5Sv64mvkyCL6ti8YaK8v1rB58ia2BRN3Y55012d5Utn6vevPwWSF5rhPMUErIYwmxQQD2azGU1WVA94eJw0ussPwTh9tM5NCzNSdbY74JPO%2FHUaMMXgSAMixQcZ%2BgrpPHDKtr0jJ5zJMGPj%2FDHaOJXE8U0x%2F%2FiHPfWvR44SwXvP9zYqR0%2B1ibzCCNuJKfcEnfClpnHW8NDd27NMyOKcr9usn3SEnozN2TMBgoYB0VN2jm8cWHT7SIikNfY%2FREcxX5KeKaeKrF8VrrAxtOsiBBUxFK7NZJjDyMyMykNwnSl2YS6Xe%2FJvc%2BgVeCjLYibLi3h7C3ar%2BXSa4KYS6B00mpSS9ZjwsO2kweNL0PamUJM52WmMxfO8QXu2%2B4qVJERCJFWjrUVjgdPDRJxUO9F2SDS1StnCXlPtMqg%3D%3D; checkout.vtex.com=__ofid=7696bf69f6b444269807774b6054e9b6; janus_sid=56ac78fa-bc55-4b00-a6c9-358423f60a3d",
    },
  };

  return axios
    .request(config)
    .then((response) => {
      console.log("response from axios", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
