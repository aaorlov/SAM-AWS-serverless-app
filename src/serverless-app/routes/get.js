module.exports = async (req, res) => {
  const queryStringParameters = req.query || {}

  const userId = queryStringParameters['userId']
  return res.json([{name: 'Vasya', id: userId}])
}
