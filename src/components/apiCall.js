const APIURL = "https://api.jikan.moe/anime/";

export async function getRandAnime() {
  let rand = Math.floor(Math.random()*1000 + 1);
  
  return fetch(APIURL + rand)
  .then((resp) => {
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