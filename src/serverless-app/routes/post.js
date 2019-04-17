module.exports = async (req, res) => {
  return res.json({...req.body, createdAt: Date.now()})
}
