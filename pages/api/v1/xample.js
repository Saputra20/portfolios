import { data } from "@/data";

const handle = (req, res) => {
  res.status(200).json(data);
};

export default handle