import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";


export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 16,
    paddingBottom:0
  },
})`
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const InputArea = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 56px;
  padding-top: 24px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  background: rgba(0, 0, 0, 0.06);
  margin-top: 16px;
`;

export const BorderBottom = styled.View`
  border: 0.5px solid rgba(0, 0, 0, 0.42);
  margin-bottom: 16px;
`;

export const ButtonArea = styled.View`
  position: relative;
  top:5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 16px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonCancelLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.BLUE};
`

export const ButtonSave = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.BLUE};
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;

  margin-bottom: 5px;
  shadow-color: rgba(0, 0, 0, 0.12);
  shadow-offset: 0px 1px;
  shadow-radius: 5px;
  elevation: 2;
`

export const ButtonSaveLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.WHITE};
`

type Props = {
  isFocused:boolean;
}
export const FloatingLabel = styled.Text<Props>`
  position: absolute;
  paddingLeft: 12px;
  top: ${({isFocused})=>!isFocused ? "16px" : "8px"};
  fontSize: ${({isFocused})=>!isFocused ? "16px" : "12px"};
  color: rgba(0, 0, 0, 0.6);
`
