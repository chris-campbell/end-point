import styled from "styled-components";

const ContactSuggestions = styled.div`
  background-color: #ffc107;
  position: absolute;
  max-width: 980px;
  width: 100%;
  border-radius: 1rem;
  max-height: 250px;
  overflow-y: scroll;
  height: auto;
  box-shadow: 10px 10px 24px -7px rgba(0, 0, 0, 0.78);
  -webkit-box-shadow: 10px 10px 24px -7px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 10px 10px 24px -7px rgba(0, 0, 0, 0.78);

  ul {
    padding-left: 0;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export default ContactSuggestions;
