const APIURL = "https://api.jikan.moe/v3/anime/";

export async function getRandAnime() {
  // Get a random number betwee 1 and 1000
  let rand = Math.floor(Math.random()*1000 + 1);

  // Fetch get API call to Jikan server
  return fetch(APIURL + rand)
  .then((resp) => {
    // if status is between 400 and 500 then call another request, or return json data
    if(!resp.ok) {
      if(resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          console.log(data.error);
          console.log("Try another ID");
          return getRandAnime();
        })
      } else {
        let err = {errorMessage: 'Please try again later, server is off'};
        throw err;
      }
    } else {
      return resp.json();
    }
  })
}