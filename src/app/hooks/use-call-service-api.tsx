import { useEffect, useReducer } from "react";
//import { RickMortyApi } from "../core/api/rick-morty-api";
import { gql } from "@apollo/client";
import createApolloClient from "../core/api/rick-morty-graphql";
import { IAction, IState } from "../core/interfaces/use-data-service-api.interface";

const initialState : IState = {
    loading: true,
    data: null,
    error: null,
};

const reducer = (state : IState, action : IAction): IState => {
    switch (action.type) {
        case 'Loading':
            return {loading: true, data: null, error: null};
        case 'Success':
            return {loading: false, data: action.payload, error: null};
        case 'Error':
            return {loading: false, data: null, error: action.payload};
        default:
            throw new Error('The type of action not exist');
    }
  }

  const useCallServiceApi = (url: string) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const axiosData = async () => {
            dispatch({ type: 'Loading' });

            // try {
            //     const response = await RickMortyApi.get(url);
            //     const data : Character[]  = response.data.results;
            //     console.log(data);
            //     dispatch({ type: 'Success', payload: data });
            // } catch (error : any) {
            //     dispatch({ type: 'Error', payload: error.message });
            // }
            try {
                const client = createApolloClient();
                const { data } = await client.query({
                        query: gql`
                        query {
                        characters(page: 1) {
                            results {
                            id,
                            name,
                            status,
                            species,
                            gender,
                            location{
                                name,
                            },
                            image,
                            episode{
                                id
                            }
                            }
                        }
                        }
                    `
                });
                dispatch({ type: 'Success', payload: data.characters.results });
            } catch (error : any) {
                dispatch({ type: 'Error', payload: error.message });
            }
        }
        axiosData();
    },[]);

    return state;
  }

  export default useCallServiceApi;