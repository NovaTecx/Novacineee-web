import { Metadata } from "next";
import {getrMovies} from "@/app/lib/movie.api";
import BannerMovie from "@/app/components/ui/BannerMovie";
import PopularSlider from "@/app/components/ui/slider";
import { GenereProps } from "@/app/lib/types";





export const metadata: Metadata = {
  title: "NovaCine - Generos",
  description: "NovaCine - Generos",
};

export default async function GenresPage({params}:GenereProps) {

    const {genresId} = params;
    const endpoint = `/genres/${genresId}`;
    const genresmovies = await getrMovies(endpoint);
    const bannerMovie = genresmovies[10];
    const movieList = genresmovies.slice(1,15);
       
    console.log("Genero ID:", endpoint);

           if(genresmovies.length == 0){
               return <div>No hay peliculas disponibles</div>
           }
       
       
           return(
               <main>
                   <BannerMovie movie={bannerMovie}/>
                   <PopularSlider  movieList={movieList}/>
                   <div className="p-10"></div>
               </main>
           )

}