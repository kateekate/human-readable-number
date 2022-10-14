module.exports = function toReadable(number) {
  const totwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tohundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (number === 0) return 'zero'
  if (number < 20) return totwenty[number]
  if (number < 100) return tohundred[Math.floor(number / 10)] + (number % 10 == 0 ? '' : ' ' + totwenty[number % 10])
  return totwenty[Math.floor(number / 100)] + ' hundred' + (number % 100 == 0 ? '' : ' ' + toReadable(number % 100).trim())
}


