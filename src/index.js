module.exports = function toReadable (number) {
   let oneNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
   let secondNum = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
 
   let numSplit = String(number).split('')
   let sliceNum = parseInt(String(number).split('').slice(1, 3).join(''))

   console.log(sliceNum)

   if (String(number).length == 1) return oneNum[number];

   if (String(number).length == 2 && number <= 19) return oneNum[number];

   if (String(number).length == 2 && numSplit[1] == '0') {
      return `${secondNum[numSplit[0] - 2]}`
   };

   if (String(number).length == 2 && number > 19 && number <= 99) {
      return `${secondNum[numSplit[0] - 2]} ${oneNum[numSplit[1]]}`
   };

   if (String(number).length == 3 && numSplit[1] == '0' && numSplit[2] == '0') {
      return `${oneNum[numSplit[0]]} hundred`
   };

   if (String(number).length == 3 && numSplit[1] == '0') {
      return `${oneNum[numSplit[0]]} hundred ${oneNum[numSplit[2]]}`
   };

   if (String(number).length == 3 && sliceNum < 20) {
      return `${oneNum[numSplit[0]]} hundred ${oneNum[sliceNum]}`
   };

   if (String(number).length == 3 && numSplit[2] == '0') {
      return `${oneNum[numSplit[0]]} hundred ${secondNum[numSplit[1] - 2]}`
   };

   if (String(number).length == 3 && number > 99) {
      return `${oneNum[numSplit[0]]} hundred ${secondNum[numSplit[1] - 2]} ${oneNum[numSplit[2]]}`
   };
}
