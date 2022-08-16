import React, { useState } from "react";
import styled from "styled-components";
import axiosClient from "../../../utils/apiClient";

const AvatarInputContainer = styled.div`
  margin-bottom: 1rem;
  input {
    display: none;
  }

  label {
    color: #9a9a9a;

    &:hover {
      color: #707070;
    }

    &:active {
      color: var(--secondary-color);
    }
  }
`;

const AvatarInput = ({ setType, setState }) => {
  const [filename, setFilename] = useState("");

  const onAddImage = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    setFilename(e.target.files[0].name);

    const image = new FormData();

    image.append("image", file);

    const headers = {
      Authorization: "Client-ID 7939250da82f389",
    };

    const urlData = await axiosClient.post(
      "https://api.imgur.com/3/image/",
      image,
      {
        headers: headers,
      }
    );
    const url = urlData.data.data.link;

    setState(url, setType);
  };

  return (
    <AvatarInputContainer>
      <input
        type="file"
        name="avatar"
        id="img"
        title=" "
        onChange={(e) => onAddImage(e)}
      />
      <label for="img">{filename || "Upload avatar"} </label>
    </AvatarInputContainer>
  );
};

export default AvatarInput;
