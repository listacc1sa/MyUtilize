const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "Advanced";
const name1 = "Unlimited";
const appid = "com.palligroup.gpt3.yearlyyy";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  chxm1024.subscriber.subscriptions = chxm1024.subscriber.subscriptions || {};
  chxm1024.subscriber.entitlements = chxm1024.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  const data1 = {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-12-24T10:45:38Z",
        "product_identifier" : "gpt_year",
        "expires_date" : "2099-12-27T10:45:38Z"
      };
      
  chxm1024.subscriber.entitlements[(name1)] = (data1);
  chxm1024.subscriber.entitlements[(name)] = (data);
  chxm1024.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "chxm1023",	"Telegram": "https://t.me/chxm1023",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  chxm1023.body = JSON.stringify(chxm1024);
}

$done(chxm1023);