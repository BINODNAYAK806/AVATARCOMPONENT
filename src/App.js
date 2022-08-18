import "./styles.css";
import Avatar from "./Components/Avatar";
const userDetails = [
  {
    img_url: "https://avatars.githubusercontent.com/u/95870032?v=4"
  },

  {
    img_url:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/b/w/o/s-c301-white-dennis-lingo-original-imafw2ggrk5epcfu-bb.jpeg?q=90"
  },
  {
    img_url:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/a/c/c/40-assfwmofv18960-allen-solly-original-imaft9us8uwwfsbe-bb.jpeg?q=90"
  }
];

const dis = userDetails.map((user) => (
  <div>
    <Avatar src={user.img_url} />
  </div>
));

export default function App() {
  return <div className="App">{dis}</div>;
}
