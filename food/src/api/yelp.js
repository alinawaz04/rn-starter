import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TS1PFrM2EkDwnaqglq_MNQX-VncuplnpfQKM0My2A6Djo5VbzsMgKzbbZC4Ai-y985OxuLZeNE5s5Vs8MgdLR5zjgkcXmcIZlxQ4S6526bSkQZPZ0JFGQoDkugZNZnYx",
  },
});
