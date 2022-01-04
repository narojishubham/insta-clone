import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./CreatePost.css";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handelImage = (e: any) => {
    console.log(e.target.files[0].name);
    const storageRef = ref(storage, e.target.files[0].name);
    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
    });
  };
  const SubmitPost = (e: any) => {
    e.preventDefault();
  };
  return (
    <Container>
      <div className="create">
        <Form onSubmit={SubmitPost}>
          <div className="CreateInput">
            <input
              type="text"
              className="inputText"
              placeholder="Whats in your mind"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="addImageContainer">
            <div className="addImageSection_A">
              <label htmlFor="file">
                <img
                  className="addFile"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFHUlEQVRoge1Z328UVRT+ztyZO3eXLbtt2YJWuouJJEIimPgjMUCVQkDeSCDygC34Lwj8ASagSeubz5rGB15QBImA3WKjvhgx8CBbiQZsARHawjbddrs/Zq4PdRfmF8zODt0+9Hu7373nzPl2z7n3zFxgGctYxjKW0QSQ18SnmT/ekTAOSChdBKkuZlB2SFCFYI5LqZw8uvPlEbc1rkIGMtcGAPrw2YYXGP1Hdmw4ZicdQvqHs3tJ4uvFiSkw9h7ZseGbxwnFvoKkPLx48QQDAYfsnEMIQOnFCKYRSGCdnXMR4sotNTA70dTdyI6o0ME1jmKphEKxWJft0hBCQGdHErFotEZNz+Tx7+SUbxdLIo3isZhFBADEW2KIRSO+fYQuhMjzjPVERNddeaEL3z5CFxIVAprG67IpVyqufMWDd0OoQjjnYKoKoXMoin/XuZk8DMOwcKVKGdP5Wd8+Qit2pijQ+cI/QUSICIHZuTlftoZhYOzOXbQl4uCco1gsYio3DSlN388PSQhBRISlPhhj4DpHqVjy5aFsGLg39SBwBKGkls41MMVxRkHXdCgu/LNAw0IYY+DcfdchAqIR4f2uECIaE0JARAg8acdVFAW6h1Cdc6xdsxoUgtSGhAgufO1OnHMwZk0xxhheWJ1ENCKQbEs0EgaABoQspJTmbzEBERGp/fIEQmdyFVR1Ya9pja9EPBYLGgqAwEIWtte6HqQQdLGwPSfbWxGJWO07VrVB1+s7SC3+gxiJiF7XgVcF1zgSK1vQurLFGQgROjuSYCzYb1u3lcpUcNVnSjlsGTraWj3nNVVFZ0cyUPHXdSASkSMl/EJRFLTHW57YVJaNedzJX8WfhV/wMH8PZTkLlQQES6BdvIQOsRGaEnW1rUuIEHqg7pZAaG1Z4ZmOFbOEq/98h8u3vsJ8xb2/ujP3KxTSkI5twbrYdscp64hqIJP9HcBGO69pWt0FXkV8RRRRj38yX3qAs9c+wf38X779cdZSrsjpt4Z6hy5XOV81QkQQwv1QexoignuLKE7i5NVjdYkAgJIxo5mmMrJ9cNcbVc5XahERCoX63qFrtgDuFR86+IosI3PzBGaLzkaxO70V3elttXH2/ihOZR2f2laQxOldX+567eL7F+/6EmKaJkzTf0v9OKZnyq78jZkMHs6Pu86lEilsS221klnXpc8bBo4D+KAp7+yGLOHGzKVQfEmgt2dwz/qmCJmYH0XZLITljklZ2d+Uz0ET89ct4+70VqQSqdp405pXLPOpRAq9mw/WxrlCDmevn6uNCbTbTUiwYqgD84a1wLvT25w18RhS8S70bnokZCw3bhECIO1MLUk3Gw30aSgZ+bBdJh1CJMzPw36KHRpzbzMawANHah3dufHMQCbbD+Bo2E+rQijWF6ns/VHLOJVIIRXvqo0n5yaRnXi0ZmJ2wu7ytmfj1D80+jYIBwiyC0CwdtcDf+dHnhvNnXG0QVX0bj5oqYkfx37CRyPHvR1KnPDctf6/q3O9r2sUPYM97YB6G0Cw5s0GhZmnm3KODPcNTxHos3C80bdDvUOXm3atwCry44qK9wCstc/lCjmM5R61Ly41UUWeSfMY8ITr6cXAjsF3X5XS/BlAkG3MlET7LvVdOA00+X4k03f+CpGyBcCtOk3zJGl/VQSwBC56Mn3nr6gMbxLwBQDjqQbAOSbl65nDFyx9fVNTy46ewT3rAWMfJHYD8kWAkgCmANyWRMNSmqd+OPT9b262/wEZBWEw3Hh/vQAAAABJRU5ErkJggg=="
                />
              </label>
              <input
                onChange={handelImage}
                type="file"
                className="selectImage"
                id="file"
              />
            </div>
            <div className="addImageSection_B">
              <input type="submit" value="Create" className="btn-sweet" />
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default CreatePost;
