import { Text, View } from "react-native"
import { UseMovies } from "../../hooks/UseMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = UseMovies();

  if ( isLoading ) {
    return <FullScreenLoader/>
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30}}>
          {/* Carrucer Principal */}
          <PosterCarousel movies={ nowPlaying } />

          {/* Populares */}
          <HorizontalCarousel 
            movies={ popular } 
            title='Populares'
            loadNextPage={ popularNextPage }
          />

          {/* TopRated */}
          <HorizontalCarousel movies={ topRated } title='Mejor calificadas'/>

          {/* Proximamente */}
          <HorizontalCarousel movies={ upcoming } title='Próximamente'/>

      </View>
    </ScrollView>
  )
}

