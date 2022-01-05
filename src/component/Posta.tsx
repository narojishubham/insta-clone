import React from "react";
import { db } from "../firebase/firebaseConfig";
import Comments from "./Comments";

function Posta() {
  // db.collection{''}
  return (
    <div className="posts">
      <div className="post_hesder">
        <div className="post_header_avator">
          <div className="post_header_name">ROY</div>
          <div className="post_image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default Posta;
