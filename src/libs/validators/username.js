export default function username(usernameValidate) {
  if (/[^A-Za-z0-9]/g.test(usernameValidate)) {
    return false
  }

  return true
}
