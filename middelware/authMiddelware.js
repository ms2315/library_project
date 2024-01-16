function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'secret_key', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
  
      req.user = user;
      next();
    });

}

module.exports={authenticateToken};