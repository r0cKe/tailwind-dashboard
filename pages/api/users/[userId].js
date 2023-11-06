import { userRows as users } from "@/utils/data";
export default function handler(req, res) {
  const { userId } = req.query;
  switch (req.method) {
    case "GET":
      const user = users.find((user) => user.id === parseInt(userId));
      res.status(200).json(user);
      break;
    case "DELETE":
      let newUsers = [...users];
      newUsers = newUsers.filter((user) => user.id !== parseInt(userId));
      res.status(200).json(newUsers);
      break;

    default:
      break;
  }
}
