lbttCalculator = (propertyPrice) => {
  if (!propertyPrice) throw new Error("Please provide a property price.");
  if (isNaN(propertyPrice))
    throw new TypeError("Please provide a property price of type number.");

  if (propertyPrice < 145000.01) return 0;
  if (propertyPrice > 145000.0 && propertyPrice <= 250000.0)
    return propertyPrice * 0.02;
  if (propertyPrice > 250000.0 && propertyPrice <= 325000.0)
    return propertyPrice * 0.05;
  if (propertyPrice > 325000.0 && propertyPrice <= 750000.0)
    return propertyPrice * 0.1;
  if (propertyPrice > 75000.0) return propertyPrice * 0.12;

  //   let lbttRate = 0;

  //   switch (propertyPrice) {
  //     case propertyPrice > 145000.0 && propertyPrice <= 250000.0:
  //       console.log("here");
  //       lbttRate = 0.02;
  //       break;
  //     case propertyPrice > 250000.0 && propertyPrice <= 325000.0:
  //       lbttRate = 0.05;
  //       break;
  //     case propertyPrice > 325000.0 && propertyPrice <= 750000.0:
  //       lbttRate = 0.1;
  //       break;
  //     case propertyPrice > 750000.0:
  //       lbttRate = 0.12;
  //       break;
  //     default:
  //       return 0;
  //   }

  //   return propertyPrice * lbttRate;
};

module.exports = { lbttCalculator };
