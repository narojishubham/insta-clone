import { useState } from "react";
import "./stories.css";
function Stories() {
  const [stories, setStories] = useState([
    { id: 1, image: "/images/1.jpg", name: "toy" },
    { id: 1, image: "/images/2.jpg", name: "__papu" },
    { id: 1, image: "/images/3.jpg", name: "123ram" },
    { id: 1, image: "/images/4.jpg", name: "mohan123" },
    { id: 1, image: "/images/5.jpg", name: "jit12342" },
    { id: 1, image: "/images/6.jpg", name: "pipu12" },
    { id: 1, image: "/images/9.jpg", name: "boss" },
    { id: 1, image: "/images/10.jpg", name: "roxy" },
    { id: 1, image: "/images/11.jpg", name: "toxy" },
    { id: 1, image: "/images/12.jpg", name: "tommy" },
    { id: 1, image: "/images/images.jpg", name: "roy" },
  ]);
  return (
    <div className="StoryBox">
      {stories.map((user) => (
        <div className="story" key={user.id}>
          <div className="story_info">
            <div className="story_img">
              <span>
                <img src={user.image} />
              </span>
            </div>
            <div className="stries_name">{user.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stories;
