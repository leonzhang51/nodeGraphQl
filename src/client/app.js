const GRAPHQL_URL = "http://localhost:4000/";

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          getOrders{
    orderId
    origin
    marketplaceServicesEndpoint
    totals {
      id
      name
    }
  }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  return data.getOrders;
}

fetchGreeting().then((data) => {
  console.log("response", data);
  const title = document.querySelector("h1");
  title.textContent = data.marketplaceServicesEndpoint;
});
