let banners = document.querySelector(".banners");
const baseURL = "http://localhost:3000";

const getBanners = async () => {
  try {
    const res = await fetch(`${baseURL}/banners`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const data = await getBanners()
    
    banners.innerHTML = data?.map((item)=>console.log(item))
  } catch (er) {
    console.log(er);
  }
};

getData();
