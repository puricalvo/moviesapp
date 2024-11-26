import { Cast } from "../../core/entities/cast.entity";
import { MovieDBCast } from "../interfaces/movie-db.responses";


export class CastMapper {

    static fromMovieDBCastToEntity( actor: MovieDBCast ): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${ actor.profile_path }`
              : 'https://st3.depositphotos.com/9998432/13335/v/150/depositphotos_133352102-stock-illustration-default-placeholder-profile-icon.jpg'
              
        }  
    }
}