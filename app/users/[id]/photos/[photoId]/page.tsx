import React from "react";

type Props = {
  params: {
    id: string;
    photoId: string;
  };
};

const PhotoPage = ({ params }: Props) => {
  return (
    <div>
      <h1>PhotoPage</h1>
      <p>id: {params.id}</p>
      <p>photo: {params.photoId}</p>
    </div>
  );
};

export default PhotoPage;
