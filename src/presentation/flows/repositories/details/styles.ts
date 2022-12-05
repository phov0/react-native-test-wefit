import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_3};
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
  font-family: ${({ theme }) => theme.fonts.REGULAR_1};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK_2};
`;

export const TitleSpan = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR_1};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.GRAY_2};
  margin-top: 16px;
  margin-bottom: 16px;
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
  background-color: ${({ theme }) => theme.colors.RED};
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
export const ButtonSeeRepository = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
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
export const ButtonFavorite = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<BtnProps>`
  flex:1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme, favorite }) => favorite? theme.colors.YELLOW_1 : theme.colors.WHITE};
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  shadow-color: ${({ theme, favorite }) => favorite? "rgba(0, 0, 0, 0.12);" : "transparent"};
  shadow-offset: 0px 1px;
  shadow-radius: 5px;
  border: ${({ theme, favorite }) => favorite? "0px;" : "solid 1px black;"};
  elevation: ${({ theme, favorite }) => favorite? "2" : "0"};
`

export const ButtonFavoriteLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.BLACK_1};
  margin-right: 10px;
`
