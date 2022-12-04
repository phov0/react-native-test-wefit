import React from "react";
import { Container, LoadingContainer } from "./styles";
import {useRepository} from "../../hooks/useRepository";
import {ActivityIndicator, FlatList, SafeAreaView} from "react-native";
import RepositoryView from "../../components/RepositoryView";
import theme from "../../styles/theme";

const Favorites = () => {
  const { favorites, isLoading } = useRepository();

  if(isLoading){
    return (
      <LoadingContainer>
        <ActivityIndicator
          color={theme.colors.BLUE}
        />
      </LoadingContainer>
    )
  }
  return (
    <Container>
      <SafeAreaView>
        <FlatList
          data={favorites}
          renderItem={({ item, index })=>{
            return <RepositoryView
              item={item}
              first={index == 0 ? true:false}
              last={index == favorites.length -1 ? true:false}
            />
          }
          }
        />
      </SafeAreaView>
    </Container>
  );
};

export default Favorites;
