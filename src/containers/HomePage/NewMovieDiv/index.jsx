import React from "react";
import RecTabMovie from "../../../component/RecTabMovie";
import Title from "../../../component/MovieListTitle";
import RequestUrl from "../../../constant/Url";

const NewMovieDiv = (props) => (
  <div style={{
    display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "10px", background: "#fff", marginTop: "1vmax",
  }}
  >
    <Title title1="最新" title2="电影" />
    <RecTabMovie tabs={["最新", "动作", "喜剧", "爱情", "科幻", "恐怖", "剧情", "战争"]}
      url={RequestUrl.WebRoot + RequestUrl.IndexNewMovies}
      history={props.history} />
  </div>
);

export default NewMovieDiv;
