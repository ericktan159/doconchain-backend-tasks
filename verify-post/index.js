const axios = require("axios");

// Insert URL here
const url = "https://www.facebook.com/Doconchain/posts/339575264352883";

axios
  .request(url)
  .then((res) => {
    const data = res.data;

    if (!data.includes("/hashtag/doconchain?")) {
      return console.log("Post does not contain #DocOnChain!");
    }

    console.log("Post contains #DocOnChain!");
  })
  .catch((e) => {
    console.log(e);
  });

  
  
  