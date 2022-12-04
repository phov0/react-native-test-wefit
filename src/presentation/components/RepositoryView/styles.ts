import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const FlexViewRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  first:boolean;
  last:boolean;
}
export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<Props>`
  padding: 12px 16px 12px 16px;
  marginHorizontal: 16px;
  background: #FFFFFF;
  border-radius: 4px;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 1px;
  shadow-radius: 10px;
  elevation: 4;
  margin-top: ${({first})=> first? '16px':"8px"};
  margin-bottom: ${({last})=> last? '16px':"8px"};
  
`;

export const Header = styled(FlexViewRow)`
  
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #070707;
`;

export const TitleSpan = styled(Title)`
  font-weight: bold;
`;

export const RepositoryImage = styled.Image`
  height: 29px;
  width: 29px;
  border-radius: 50px;
`

export const Separator = styled.View`
  border: 0.5px #DADADA solid;
  margin: 16px 0px;
`

export const Content = styled.View`
  
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Footer = styled(FlexViewRow)`
  margin-top: 16px;
`;

export const FavoriteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  background-color: #FAF3DC;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FavoriteCount = styled(FlexViewRow)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLabel = styled(Text)`
  margin-left: 12px;
  color: #FFD02C;
`;

export const CountLabel = styled(Text)`
  margin-left: 8px;
`;

export const Language =  styled(FlexViewRow)`
  
`;

export const LanguageElipsis = styled.View`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: red;
`;

export const LanguageLabel = styled(Text)`
  margin-left: 6px;
`;

export const SettingsIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "settings",
  size: 24,
}))``;

export const Ellipsis = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "circle",
  size: 24,
}))``;
