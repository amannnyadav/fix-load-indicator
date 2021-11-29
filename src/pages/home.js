import CustomAppBar from "../components/CustomAppBar";
import { useState, useEffect } from "react";
import CustomTile from "../CustomTile/CustomTile";
import { Row } from "react-bootstrap";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/videos`, {
        method: "GET",
      });
      const data = await response.json();
      setVideos(data);
    }
    getVideos();
  }, []);

  return (
    <div> 
      <CustomAppBar
        label="Search"
        onSearch={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {videos.length === 0 ? (
        <div class="d-flex justify-content-center"  >
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">loading...</span>
          </div>
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {videos
            .filter((e) =>
              searchText.length !== 0
                ? e.title.toLowerCase().includes(searchText.toLowerCase())
                : true
            )
            .map((e) => (
              <CustomTile
                title={e.title}
                uploadedAgo={e.uploadedAgo}
                uploadedBy={e.uploadedBy}
                image={e.image}
                views={e.views}
              />
            ))}
        </Row>
      )}
    </div>
  );
};

export default Home;