const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  credentials: true,
  origin: "*",
}
))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 const api ="https://superheroapi.com/api/1559753347737481"
 const axiosInstance = axios.create({
  baseURL: api,
})

app.put("/data",async(req, res) => {
  try {
     let {id} = req.body
     console.log(id)
     res.cookie('cookieId',id, { maxAge: 900000, httpOnly: true });
  } catch (error) {
    console.log(error)
  }
 

})
app.get("/data", async (req, res, next) => {
  try {
    var cookie = req.cookies.cookieId;
    const response = await axiosInstance.get(`${cookie}`)
    res.send(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }

})

app.listen(port, () => console.log(`Listening on port ${port}`));
