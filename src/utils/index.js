export function numberFormat(num, fixed) {
  if (num === undefined) {
    return '...'
  }
  if (fixed === 0) {
    num = parseInt(num, 10)
  }
  if (num < 1000 ) {
    if (fixed) {
      return num.toFixed(fixed)
    }
    return num
  }
  const bits = num.toString().split('.')
  const prefix = bits[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  let suffix = bits[1]
  if (suffix) {
    if (fixed) {
      suffix = suffix.slice(0, fixed)
    }
    return prefix + '.' + suffix
  }
  return prefix
}