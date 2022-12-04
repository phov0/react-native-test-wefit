import React, {useEffect, useState} from "react";
import { useModalize } from "react-native-modalize";
import {Alert} from "react-native";
import {
  BorderBottom,
  ButtonArea,
  Container, InputArea, ButtonCancel, ButtonSave, Title,ButtonCancelLabel, ButtonSaveLabel,FloatingLabel
} from "./styles";
import {TextInput} from "react-native";

type Props = {
  repositoryOwner:string;
  visible: boolean;
  onClose: () => void;
  getUserRepositories:(username:string)=>void;
};

const UserSelectionModal = ({ repositoryOwner, visible, onClose, getUserRepositories }: Props) => {
  const { ref, open, close } = useModalize();
  const [isFocused, setIsFocused]=useState(true);
  const [username,setUsername]=useState(repositoryOwner);

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  useEffect(()=>{
    setUsername(repositoryOwner);
  },[repositoryOwner]);

  const textChangeHandler = (text:string) =>{
    setUsername(text)
  }

  const focusHandler = ()=>{
    setIsFocused(true);
  }

  const blurHandler = ()=>{
    if(username.trim() == ""){
      setUsername("");
      setIsFocused(false);
    }
  }

  const closeHandler = () =>{
    setUsername(repositoryOwner);
    setIsFocused(true);
    onClose();
  }
  const saveHandler = ()=>{
    if(username.trim() == ""){
      Alert.alert("Usuário invalido!", "Nome do usuário não pode estar vázio.");
      return
    }
    getUserRepositories(username);
    onClose();
  }

  return (
    <Container ref={ref} onClose={closeHandler}>
      <Title>Alterar usuário selecionado</Title>
      <InputArea>
        <FloatingLabel isFocused={isFocused}>Nome do usuário</FloatingLabel>
        <TextInput
          value={username}
          onChangeText={textChangeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </InputArea>
      <BorderBottom/>
      <ButtonArea>
        <ButtonCancel onPress={closeHandler}>
          <ButtonCancelLabel>CANCELAR</ButtonCancelLabel>
        </ButtonCancel>
        <ButtonSave onPress={saveHandler}>
          <ButtonSaveLabel>SALVAR</ButtonSaveLabel>
        </ButtonSave>
      </ButtonArea>
    </Container>
  );
};

export default UserSelectionModal;
