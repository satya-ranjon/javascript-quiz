import React, { useState } from "react";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loding, videos, error, hasmore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasmore}
          next={() => setPage(page + 4)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                to={`quiz/${video.youtubeID}`}
                state={{
                  videoTitle: video.title,
                }}
                key={`${video.youtubeID}${Math.random()}`}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                key={`${video.youtubeID}${Math.random()}`}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loding && videos.length === 0 && <div className="">No data found</div>}
      {error && <div className="">There was an error</div>}
      {loding && <h1 className="">loding......</h1>}
    </div>
  );
}
