export default function password(passwordValidate) {
  if (!/([A-Za-z])\w+/g.test(passwordValidate)) {
    return false
  }
  if (!/([0-9])\d+/g.test(passwordValidate)) {
    return false
  }
  if (!/[^A-Za-z0-9]/g.test(passwordValidate)) {
    return false
  }

  return true
}
