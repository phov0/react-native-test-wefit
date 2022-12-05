import React from "react";
import {
  Container,
  Header,
  Title,
  TitleSpan,
  RepositoryImage,
  Separator,
  Content,
  Description,
  Footer,
  FavoriteButton,
  ButtonLabel,
  FavoriteCount,
  CountLabel,
  Language,
  LanguageElipsis,
  LanguageLabel
} from "./styles";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import theme from "../../styles/theme";
import {useRepository} from "../../hooks/useRepository";

type Props = {
  item: Repository;
  first: boolean;
  last: boolean;
};

const RepositoryView = ({ item, first, last }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { addFavoriteRepository } = useRepository()

  const detailPressHandler = () =>{
    navigation.navigate('Details', {repository: item})
  }

  const favoritePressHandler = () =>{
    addFavoriteRepository({...item, favorite: 1});
  }

  return (
    <Container first={first} last={last} onPress={detailPressHandler}>
      <Header>
        <Title>{item.name.split("/")[0]}/<TitleSpan>{item.name.split("/")[1]}</TitleSpan></Title>
        <RepositoryImage source={{uri:item.owneravatar}}/>
      </Header>
      <Separator/>
      <Content>
        <Description>{item.description}</Description>
      </Content>
      <Footer>
        {item.favorite == 0 ?
          <FavoriteButton onPress={favoritePressHandler}>
            <Entypo name={"star"} size={16} color={theme.colors.YELLOW_1}/>
            <ButtonLabel>Favoritar</ButtonLabel>
          </FavoriteButton>:null
        }
        <FavoriteCount>
          <Entypo name={"star"} size={16} color={theme.colors.YELLOW_1}/>
          <CountLabel>{Math.floor(item.stars)}</CountLabel>
        </FavoriteCount>
        <Language>
          <LanguageElipsis/>
          <LanguageLabel>{item.language || "Undefined"}</LanguageLabel>
        </Language>
      </Footer>
    </Container>
  );
};

export default RepositoryView;