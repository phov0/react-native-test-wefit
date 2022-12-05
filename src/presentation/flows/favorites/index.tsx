import React, {useCallback} from "react";
import { Container } from "./styles";
import {useRepository} from "../../hooks/useRepository";
import {FlatList, ListRenderItemInfo, SafeAreaView} from "react-native";
import RepositoryView from "../../components/RepositoryView";

const Favorites = () => {
  const { favorites } = useRepository();

  const renderItem = useCallback(({ item, index }:ListRenderItemInfo<Repository>)=>(
    <RepositoryView
      item={item}
      first={index == 0 ? true:false}
      last={index == favorites.length -1 ? true:false}
    />
  ),[favorites]);

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          keyExtractor={(item:Repository, index)=> `${item.id}`}
          data={favorites}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Favorites;
