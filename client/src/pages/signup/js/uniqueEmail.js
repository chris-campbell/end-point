import validator from "validator";
import axiosClient from "../../../utils/apiClient";

const emailUnique = async (email, ref, setFormState) => {
  if (!validator.isEmail(email)) {
    setFormState((prev) => ({ ...prev, emailAddress: "" }));
    return (ref.current.querySelector("email-text-field").value = "");
  }

  const emailObj = { emailAddress: email };

  try {
    const { data } = await axiosClient.post("/checkEmailUnique", emailObj, {
      withCredentials: true,
    });

    if (!data) {
      return console.log("Email provided isnt unique, Please try another one.");
    }

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default emailUnique;
