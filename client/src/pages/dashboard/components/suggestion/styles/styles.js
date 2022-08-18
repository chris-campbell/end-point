import styled from "styled-components";

const SuggestionContainer = styled.li`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  gap: 1rem;
  &:last-child {
    margin-bottom: -8px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 2.5rem;
    object-fit: cover;
    border: 2px solid #ffd659;
  }

  .suggestion-short-details {
    .suggestion-distance {
      margin-left: 2rem;
      text-align: left;
      color: var(--secondary-color-red);
    }
  }
`;

export default SuggestionContainer;
