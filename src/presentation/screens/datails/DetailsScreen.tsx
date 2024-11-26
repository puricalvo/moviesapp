import { StackScreenProps } from "@react-navigation/stack";
import { Text} from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { UseMovie } from "../../hooks/UseMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDateils } from "../../components/movie/MovieDateils";
import { ScrollView } from "react-native-gesture-handler";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

interface Props  extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({route}: Props) => {

  const { movieId } = route.params;
  //const { movieId } = useRoute().params;
  const { isLoading, movie, cast = [] } = UseMovie( movieId );

  if ( isLoading ) {
    return <FullScreenLoader/>
  }
  

  return (
    <ScrollView>
        {/* Header */}
        <MovieHeader 
            originalTitle={ movie!.originalTitle}
            title={ movie!.title }
            poster={ movie!.poster }
            />


        {/* Datails */}
        <MovieDateils  movie={ movie! } cast={ cast }/>
    </ScrollView>
  )
}
