export function isAuthorized(req, res, next) {

const auth = req.header('Authorization')
if (auth && auth === 'qazwsx') {
    console.log('autorizado')
      next()
  } else {
      res.sendStatus(401).send('No anda')
  }
}