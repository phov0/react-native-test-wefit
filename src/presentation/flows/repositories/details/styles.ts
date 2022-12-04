import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContentArea = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 20px;
  color: #070707;
`;

export const TitleSpan = styled(Title)`
  font-weight: bold;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Language = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LanguageElipsis = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: red;
  margin-right: 6px;
`;

export const LanguageLabel = styled.Text`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const ButtonArea = styled.View`
  height: 126px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-bottom: 0px;
`
export const ButtonSeeRepository = styled.TouchableOpacity`
  flex:1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ButtonSeeRepositoryLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.BLUE};
  margin-right: 10px;
`

type BtnProps = {
  favorite?:boolean
}
export const ButtonFavorite = styled.TouchableOpacity<BtnProps>`
  flex:1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme, favorite }) => favorite? theme.colors.YELLOW : theme.colors.WHITE};
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  shadow-color: ${({ theme, favorite }) => favorite? "rgba(0, 0, 0, 0.12);" : "rgba(0, 0, 0, 0);"};
  shadow-offset: 0px 1px;
  shadow-radius: 5px;
  border: ${({ theme, favorite }) => favorite? "0px;" : "solid 1px black;"};
  elevation: ${({ theme, favorite }) => favorite? "2" : "0"};
`

export const ButtonFavoriteLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.BLACK};
  margin-right: 10px;
`

type GapProps = {
  gap:number;
}
export const Gap = styled.View<GapProps>`
  margin-right: ${({gap})=> gap}px;
  margin-bottom: ${({gap})=> gap}px;
`