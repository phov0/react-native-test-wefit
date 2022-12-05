import React, {useCallback} from "react";
import {SafeAreaView, FlatList, ActivityIndicator, ListRenderItemInfo} from "react-native";
import { Container, LoadingContainer } from "./styles";
import RepositoryView from "../../../components/RepositoryView";
import {useRepository} from "../../../hooks/useRepository";
import theme from "../../../styles/theme";
const Home = () => {
  const { repositories,isLoading } = useRepository();

  const renderItem = useCallback(({ item, index }:ListRenderItemInfo<Repository>)=>(
      <RepositoryView
        item={item}
        first={index == 0 ? true:false}
        last={index == repositories.length -1 ? true:false}
      />
    ),[repositories]);

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
          keyExtractor={(item:Repository, index)=> `${item.id}`}
          data={repositories}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
