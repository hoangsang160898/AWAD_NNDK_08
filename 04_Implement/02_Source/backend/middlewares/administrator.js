module.exports = async (req, res, next) => {
	const { position } = req.user
	if (!position || position !== 'ADMINISTRATOR') {
		return res.status(403).json({
			errors: [{ msg: 'You not have permission to access.' }],
		})
	}

	return next()
}
