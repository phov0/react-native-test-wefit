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
  activeOpacity: 0.8,
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
  font-family: ${({ theme }) => theme.fonts.REGULAR_1};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.BLACK_2};
`;

export const TitleSpan = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;

export const RepositoryImage = styled.Image`
  height: 29px;
  width: 29px;
  border-radius: 50px;
`

export const Separator = styled.View`
  border: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.GRAY_4} ;
  margin: 16px 0px;
`

export const Content = styled.View`
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR_1};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Footer = styled(FlexViewRow)`
  margin-top: 16px;
`;

export const FavoriteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.YELLOW_2};
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

export const ButtonLabel = styled(Description)`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.YELLOW_1};
`;

export const CountLabel = styled(Description)`
  margin-left: 8px;
`;

export const Language =  styled(FlexViewRow)`
`;

export const LanguageElipsis = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.RED};
`;

export const LanguageLabel = styled(Description)`
  margin-left: 6px;
`;

