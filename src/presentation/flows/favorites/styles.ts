import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
`;


export const LoadingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;