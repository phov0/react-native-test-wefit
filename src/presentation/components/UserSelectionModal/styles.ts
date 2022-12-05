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
  font-family: ${({ theme }) => theme.fonts.REGULAR_2};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.BLACK_3};
`;

export const InputArea = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 56px;
  padding-top: 24px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: ${({ theme }) => theme.colors.BLACK_6};
  margin-top: 16px;
`;

type FloatingLabelProps = {
  isFocused:boolean;
}
export const FloatingLabel = styled.Text<FloatingLabelProps>`
  position: absolute;
  paddingLeft: 12px;
  font-family:  ${({ theme }) => theme.fonts.REGULAR_2};
  top: ${({isFocused})=>!isFocused ? "16px" : "8px"};
  fontSize: ${({isFocused})=>!isFocused ? "16px" : "12px"};
  color: ${({ theme }) => theme.colors.BLACK_4};
  opacity: 0.6;
`

export const BorderBottom = styled.View`
  border: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.BLACK_5};
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

export const ButtonCancel = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonCancelLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.BLUE};
`

export const ButtonSave = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
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
  font-size: 15px;
  color: ${({ theme }) => theme.colors.WHITE};
`

