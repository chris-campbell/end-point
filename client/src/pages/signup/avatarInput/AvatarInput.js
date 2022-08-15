import React, { useState } from "react";
import styled from "styled-components";

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

  const handleAvatarChange = (e) => {
    const files = e.target.files[0];

    files && setFilename(e.target.files[0].name);
    setState(e.target.files[0], setType);
  };

  return (
    <AvatarInputContainer>
      <input
        type="file"
        name="avatar"
        id="img"
        title=" "
        onChange={(e) => handleAvatarChange(e)}
      />
      <label for="img">{filename || "Upload avatar"} </label>
    </AvatarInputContainer>
  );
};

export default AvatarInput;
