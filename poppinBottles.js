var totalBottlesRedeemed = 0;
var totalCapsRedeemed = 0;
var overallLeftoverCaps = 0;
var overallLeftoverBottles = 0;

function calcRedeemablePop(popsBought, caps, bottles){
  if(popsBought <= 0 && caps <= 3 && bottles <= 1){
    overallLeftoverBottles = bottles;
    overallLeftoverCaps = caps;
    return 0;
  }

  var numOfBottles = popsBought + bottles;
  var numOfCaps = popsBought + caps;
  var leftOverCaps = numOfCaps%4;
  var leftOverBottles = numOfBottles%2;
  var redeemableBottles = (numOfBottles - leftOverBottles)/2;
  var redeemableCaps = (numOfCaps - leftOverCaps)/4;
  var totalRedeemable =  redeemableCaps + redeemableBottles;

  totalCapsRedeemed += redeemableCaps*4;
  totalBottlesRedeemed += redeemableBottles*2;

  var recursedTotalRedeemable = totalRedeemable + calcRedeemablePop(totalRedeemable, leftOverCaps, leftOverBottles);

  return recursedTotalRedeemable;


}




var moneySpent = process.argv[2];

console.log(calcRedeemablePop(Math.floor(moneySpent/2), 0, 0),"Extra drinks obtained");
console.log(totalBottlesRedeemed,"Bottles Redeemed", totalCapsRedeemed,"Caps Redeemed");
console.log("You have:",overallLeftoverBottles,"Empty Bottle(s) and",overallLeftoverCaps,"Cap(s) leftover");