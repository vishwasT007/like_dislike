import { useState } from "react";
import Card from "./Card";
import Title from "./Title";

function LikePhoto() {
  const [countLike, setCountLike] = useState(0);

  function handleToggleLike() {
    setCountLike((prevState) => (prevState === 0 ? 1 : 0));
  }

  return (
    <div className="container">
      <Title cssClass="center" titleName="Like Dislike" />
      <Title
        cssClass="subtitle center m-top--sm"
        titleName={`Likes ❤️ : ${countLike}`}
      />
      <Card onLike={handleToggleLike} />
    </div>
  );
}

export default LikePhoto;
