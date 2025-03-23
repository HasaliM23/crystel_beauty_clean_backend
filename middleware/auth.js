import jwt from "jsonwebtoken";
export default function verifyJWT (req, res, next){
  const header = req.header("Authorization");
  /// oyage prashne thibbe Authorization name eka waradi ekai  frontend eken eken Authorization gnn be ethakota
  if (header != null) {
    const token = header.replace("Bearer ", "");
    jwt.verify(token, "random456", (err, decoded) => {
      console.log(decoded);
      if (decoded != null) {
        req.user = decoded;
      }
    });
  }
  next();
}