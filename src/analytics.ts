console.log("Sending...");

let logged;
function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  logged = "Andy";
}

sendAnalytics("The data");
