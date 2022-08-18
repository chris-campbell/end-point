import styled from "styled-components";
import { Rings } from "react-loader-spinner";

export const PendingAlertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;

export const RingLoader = styled(Rings)`
  display: flex;
  justify-content: center;
`;
