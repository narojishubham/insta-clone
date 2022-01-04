import CreatePost from "../component/CreatePost";
import Stories from "../component/Stories";
import Test from "../component/Test";

function HomePage() {
  return (
    <div className="home_page">
      <Test />
      <Stories />
      <CreatePost />
    </div>
  );
}

export default HomePage;
