import { Character } from "../../entities/Character";
import { CHARACTER_ENDPOINT } from "../../common/endpoints";
import { httpService } from "../../services/httpService/HttpService";

class CharacterCommunicator {
  getCharacters(page) {
    return httpService
      .get(`${CHARACTER_ENDPOINT}/?page=${page}`)
      .then(response => {
        if (response.hasOwnProperty("error")) {
          throw new Error(response.error);
        }
        const { info, results } = response;
        return {
          pages: info.pages,
          characters: results.map(
            ({
              id,
              name,
              type,
              image,
              gender,
              status,
              origin,
              species,
              location
            }) =>
              new Character(
                id,
                name,
                type,
                image,
                gender,
                status,
                origin.name,
                species,
                location.name
              )
          )
        };
      });
  }
  getSingleCharacter(id) {
    return httpService.get(`${CHARACTER_ENDPOINT}/${id}`).then(response => {
      if (response.hasOwnProperty("error")) {
        throw new Error(response.error);
      }
      const {
        id,
        name,
        type,
        image,
        gender,
        status,
        origin,
        species,
        location
      } = response;
      return new Character(
        id,
        name,
        type,
        image,
        gender,
        status,
        origin.name,
        species,
        location.name
      );
    });
  }
}

export const characterCommunicator = new CharacterCommunicator();
