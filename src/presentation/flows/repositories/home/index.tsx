import React from "react";
import {SafeAreaView, View, FlatList, ActivityIndicator} from "react-native";
import { Container, LoadingContainer } from "./styles";
import RepositoryView from "../../../components/RepositoryView";
import {useRepository} from "../../../hooks/useRepository";
import theme from "../../../styles/theme";

const Home = () => {
  const { repositories,isLoading } = useRepository();

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
          data={repositories}
          renderItem={({ item, index })=>{
            return <RepositoryView
              item={item}
              first={index == 0 ? true:false}
              last={index == repositories.length -1 ? true:false}
            />
          }
          }
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
