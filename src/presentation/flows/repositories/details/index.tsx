import React, {useState} from "react";
import {
  Container,
  ButtonArea,
  ButtonSeeRepository,
  ButtonFavorite,
  ButtonFavoriteLabel,
  ButtonSeeRepositoryLabel,
  ContentArea,
  Language,
  LanguageElipsis,
  LanguageLabel,
  Title,
  TitleSpan,
  Description
} from "./styles";
import {Entypo, Feather} from "@expo/vector-icons";
import theme from "../../../styles/theme";
import {openBrowserAsync} from "expo-web-browser";
import {useRepository} from "../../../hooks/useRepository";
import {RouteProp} from "@react-navigation/native";
import {Alert} from "react-native";

type Props = {
  route: RouteProp<{ params: { repository: Repository } }, 'params'>
}

const Details = ({route}:Props) => {
  const repository = route.params.repository;

  const { addFavoriteRepository, removeFavoriteRepository } = useRepository()

  const [isFavorite, setIsFavorite] = useState(repository.favorite == 0 ? false : true);

  const favoriteHandler= async ()=>{
    try {
      await addFavoriteRepository({...repository, favorite:1});
      setIsFavorite(true);
    }
    catch (err) {
      Alert.alert("Erro!","Erro ao adicionar repositório como favorito.");
    }
  }

  const unfavoriteHandler= async ()=>{
    try{
      await removeFavoriteRepository(repository.id);
      setIsFavorite(false);
    }catch (err){
      Alert.alert("Erro!","Erro ao remover repositório dos favorito.");
    }
  }

  return (
    <Container>
      <ContentArea>
        <Title>{repository.name.split("/")[0]}/<TitleSpan>{repository.name.split("/")[1]}</TitleSpan></Title>
        <Description>
          {repository.description}
        </Description>
        <Language>
          <LanguageElipsis></LanguageElipsis>
          <LanguageLabel>{repository.language || "Undefined"}</LanguageLabel>
        </Language>
      </ContentArea>
      <ButtonArea>
        <ButtonSeeRepository onPress={()=>{openBrowserAsync(repository.url)}}>
          <ButtonSeeRepositoryLabel>VER REPOSITÓRIO</ButtonSeeRepositoryLabel>
          <Feather name="link-2" size={20} color={theme.colors.BLUE} />
        </ButtonSeeRepository>
        {!isFavorite?
          <ButtonFavorite favorite onPress={favoriteHandler}>
            <ButtonFavoriteLabel >FAVORITAR</ButtonFavoriteLabel>
            <Entypo name={"star"} size={19} color={theme.colors.BLACK_1}/>
          </ButtonFavorite>:
          <ButtonFavorite onPress={unfavoriteHandler}>
            <ButtonFavoriteLabel>DESFAVORITAR</ButtonFavoriteLabel>
            <Entypo name={"star-outlined"} size={19} color={theme.colors.BLACK_1}/>
          </ButtonFavorite>
        }
      </ButtonArea>
    </Container>
  );
};


export default Details;
