import React from "react";
import AvatarInput from "../avatarInput/AvatarInput";
import LocationInput from "../locationInput/LocationInput";
import Button from "./button/Button";
import Input from "./input/Input";

import SignupFormContainer from "./styles/styles";

const SignupForm = ({
  form,
  formState,
  emailUnique,
  isFieldsEmpty,
  createUser,
}) => {
  return (
    <SignupFormContainer onSubmit={createUser} className="signup-form">
      <div className="signup-form-wrapper">
        <h2>Create an account</h2>

        <Input
          type="text"
          name="first-name"
          setType="firstName"
          setState={formState}
          placeHolder="First name"
        />
        <Input
          type="text"
          name="last-name"
          setType="lastName"
          setState={formState}
          placeHolder="Last name"
        />
        <Input
          type="text"
          name="email-address"
          setType="emailAddress"
          setState={formState}
          placeHolder="chris@domain.com"
        />
        <Input
          type="password"
          name="password"
          setType="password"
          setState={formState}
          placeHolder="Password"
        />

        <LocationInput setState={formState} form={form} />
        <AvatarInput setType="image" setState={formState} />
        <Button emailUnique={emailUnique} isFieldsEmpty={isFieldsEmpty} />
      </div>
    </SignupFormContainer>
  );
};

export default SignupForm;
