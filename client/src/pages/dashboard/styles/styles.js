import styled from "styled-components";
import { Rings } from "react-loader-spinner";

export const DashboardContainer = styled.div`
  .dashboard-wrapper {
    max-width: 980px;
    margin: 0 auto;
    min-height: 100vh;
  }
`;

export const RingLoader = styled(Rings)`
  margin: 0 auto;
`;
