import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const Random = () => {
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();


  return (
    <div className="w-1/2   bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 my-[15px] ">
      <h1 className="text-2xl mt-[15px]   underline uppercase font-extrabold">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <button
        className="w-10/12  bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] "
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
