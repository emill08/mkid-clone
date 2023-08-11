const errorHandler = (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({ message: err.errors[0].message });
  }
  if (err.name === "Invalid email/password") {
    res.status(401).json({ message: "Email or Password is invalid" });
  }
  if (err.name === "emptyEmail") {
    res.status(401).json({ message: "Email cannot be empty" });
  }
  if (err.name === "emptyPassword") {
    res.status(401).json({ message: "Password cannot be empty" });
  }
  if (err.name === "Unauthorized") {
    res.status(401).json({ message: "You aren't allowed to perform this action" });
  }
};

module.exports = { errorHandler };
