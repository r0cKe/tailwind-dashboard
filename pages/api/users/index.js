import { userRows as users } from "@/utils/data";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(users);
      break;
    case "POST":
      users.push(req.body.user);
      res.status(200).json(users);
      break;
    default:
      break;
  }
}
