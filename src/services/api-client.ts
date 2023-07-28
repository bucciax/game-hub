import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
      key: '7170fdb2812a43ac82d01e5d48d8c3be'
  }
})