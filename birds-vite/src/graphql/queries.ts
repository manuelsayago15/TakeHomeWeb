import { gql } from "@apollo/client";

export const GET_BIRDS = gql`
    query Birds {
        birds {
            id
            english_name
            latin_name
            thumb_url
            image_url
        }
    }
`;

export const GET_BIRD_BY_ID = gql`
    query GetBird($id: ID!) {
        bird(id: $id){
            id
            english_name
            latin_name
            image_url
            thumb_url
            notes {
                id
                comment
                timestamp
            }
        }
    }
`;

export const ADD_NOTE = gql`
    mutation AddNote($birdId: ID!, $comment: String!, $timestamp: Int!) {
        addNote(birdId: $birdId, comment: $comment, timestamp: $timestamp)
    }
`;