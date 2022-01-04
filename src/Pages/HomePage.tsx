import { Container } from "react-bootstrap";
import CreatePost from "../component/CreatePost";
import Stories from "../component/Stories";
import Test from "../component/Test";

function HomePage() {
  return (
    <div className="home_page">
      <Container>
        <Test />
        <Stories />
        <CreatePost />
      </Container>
    </div>
  );
}

export default HomePage;
