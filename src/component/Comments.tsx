import React from "react";
import { Form } from "react-bootstrap";

function Comments() {
  return (
    <div className="comments">
      <div className="comments_container">
        <div className="comments_secti">
          <Form>
            <input
              type="text"
              className="comments_input"
              placeholder="Add a comment"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
