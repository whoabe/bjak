import axios from "axios";

// const KEY = ''
// no key needed

export default axios.create({
  baseURL: "https://cdn-discover.hooq.tv/v1.2/discover"
});
// preconfigured instance of axios with the following baseURL
