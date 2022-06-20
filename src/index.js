const priceList = {
  "1-10": "Some",
  "11-20": "My name",
  "21-30": "Hello",
  "31-40": "Ops",
  "41-50": "Daddy",
  "51-60": "Black"
  // И так далее
};

const getDiscount = (count = 1) => {
  // Write here
};

getDiscount(5); // 'Some'
getDiscount(40); // 'Ops'
getDiscount(11); // 'My name'
getDiscount(0); // 'Some';
