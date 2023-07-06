import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import { unavailable, img_300, img_500 } from "../../config/index";
import YouTube from "react-youtube";
import Carousel from "react-multi-carousel";

const Details = ({ any }) => {
  const { id, type } = useParams();
  const [item, setItem] = useState([]);
  const [video, setVideo] = useState([]);
  const [credits, setCredits] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 900, min: 700 },
      items: 3,
    },
    small: {
      breakpoint: { max: 700, min: 450 },
      items: 2,
    },
    verysmall: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };
  const history = useHistory();
  // for youtube video
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=97cd0ab3fd3e22a15f551b94745e328a&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=97cd0ab3fd3e22a15f551b94745e328a&language=en-US`
    );
    setCredits(data.cast);
  };
  useEffect(() => {
    window.scroll(0, 0);
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=97cd0ab3fd3e22a15f551b94745e328a`
      )
      .then((res) => {
        setItem(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
    fetchVideo();
    fetchCredits();
  }, [id, type]);
  const Back = () => {
    history.go(-1);
    // window.scroll(0, 0);
  };
  const opts = {
    height: "490",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className="container mt-5">
      <button className="btn btn-outline-primary" onClick={Back}>
        <i className="fas fa-arrow-left mr-3"></i>
        Back
      </button>
      <div className="row ">
        <div className="col-lg-4">
          <div className="boximg">
            <img
              src={item.poster_path ? img_500 + item.poster_path : unavailable}
              className="w-100"
              alt={item.title}
            />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="information text-white">
            <h2 style={{ fontWeight: "bold" }}>{item.title}</h2>
            <p>Language :{item.original_language}</p>
            <p>Date :{item.release_date}</p>
            <p>
              Rate :{item.vote_average}{" "}
              <i className="text-warning fas fa-star"></i>
            </p>
            <p style={{ lineHeight: "30px", fontWeight: "500" }}>
              {" "}
              Overview : {item.overview}
            </p>
            <a
              className="btn btn-danger btn-lg"
              target="__blank"
              href={`https://www.youtube.com/watch?v=${video}`}
            >
              Watch Trailer
              <i className="fab fa-youtube ml-3"></i>
            </a>
          </div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {credits.map((char) => {
          return (
            <div className="my-5 px-2" key={char.id}>
              <img
                src={
                  char.profile_path ? img_300 + char.profile_path : unavailable
                }
                alt={char.name}
                className="w-100"
              />
            </div>
          );
        })}
      </Carousel>

      <div className="mt-5">
        <YouTube videoId={video} opts={opts} onReady={onReady} />
      </div>
    </div>
  );
};

export default Details;
