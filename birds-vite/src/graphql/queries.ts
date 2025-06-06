import { gql } from "@apollo/client";

const GET_BIRDS = gql`
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

export default GET_BIRDS