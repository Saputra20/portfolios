import axios from 'axios'

export default async (req, res) => {
    try {
      const axiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
      const post = axiosResponse.data;
      res.status(200).json(post)
    } catch (error) {
      console.error(error);
      res.status(error.status || 400).json({ message: "Api Error!" });
    }
};