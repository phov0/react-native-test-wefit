import React, {createContext, useEffect, useState} from "react";
import UserSelectionModal from "../components/UserSelectionModal";
import RepositoryService from "../../infrastructure/service/RepositoryService";
import axios from "axios";
import repositoryService from "../../infrastructure/service/RepositoryService";
import {Alert} from "react-native";

type Children = { children: JSX.Element };

export type RepositoryContextData = {
  repositories: Repository[];
  favorites: Repository[];
  getUserRepositories: (user:string) => Promise<void>;
  toggleUserSelectionModal: () => void;
  getFavoriteRepositories: () => Promise<void>;
  addFavoriteRepository: (repository: Repository) => Promise<void>;
  removeFavoriteRepository: (id: number) => Promise<void>;
  isLoading:boolean;
};

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData,
);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<Repository[]>(new Array());
  const [repositories, setRepositories] = useState<Repository[]>(new Array());
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    getFavoriteRepositories();
    getUserRepositories(repositoryOwner);
  },[])

  useEffect(()=>{
    if(favorites.length>0){
      getUserRepositories(repositoryOwner);
    }
  },[favorites])

  const addFavoriteRepository = async (repository: Repository) => {
      setIsLoading(true);
      await repositoryService.create(repository);
      await getFavoriteRepositories();
  };

  const removeFavoriteRepository = async (id: number) => {
      setIsLoading(true);
      await repositoryService.remove(id);
      await getFavoriteRepositories();
  };

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const getUserRepositories = async (repositoryOwner:string) => {
    setIsLoading(true);
    axios.get(`https://api.github.com/users/${repositoryOwner}/repos`).then((response)=>{
      if(!response.data){
        return
      }
      const newRepositories = response.data.map((repository:any)=>{
        return {
          id: repository.id,
          name: repository.full_name,
          ownername: repository.owner.login,
          owneravatar: repository.owner.avatar_url,
          description: repository.description,
          url: repository.html_url,
          language: repository.language,
          stars: repository.stargazers_count,
          favorite: 0,
        }
      })
      filterRepositories(newRepositories);
      setRepositoryOwner(repositoryOwner);
      setIsLoading(false);
    })
      .catch((err)=>{
        Alert.alert("Erro!", "Usuário não encontrado");
        setIsLoading(false);
      })
  };

  const getFavoriteRepositories = async () =>{
    await RepositoryService.all().then((resp) =>{
      setFavorites(resp);
    })

    setIsLoading(false);
  }

  const filterRepositories = (repositoriesToFilter: Repository[]) =>{
    const filteredRepositories = repositoriesToFilter.filter((repository:Repository)=> {
      const isFavorite = favorites.find(item => item.id == repository.id)
      if(isFavorite) return false;
      return true;
    })
    setRepositories(filteredRepositories)
  }

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        favorites,
        getUserRepositories,
        toggleUserSelectionModal,
        getFavoriteRepositories,
        addFavoriteRepository,
        removeFavoriteRepository,
        isLoading,
      }}
    >
      {children}
      <UserSelectionModal repositoryOwner={repositoryOwner} getUserRepositories={getUserRepositories} visible={showModal} onClose={() => setShowModal(false)} />
    </RepositoryContext.Provider>
  );
};

