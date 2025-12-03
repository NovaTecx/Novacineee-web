import type { Metadata } from "next";
import {getrMovies} from "@/app/lib/movie.api";
import BannerMovie from "@/app/components/ui/BannerMovie";
import PopularSlider from "@/app/components/ui/slider";



export const metadata: Metadata = {
  title: "NovaCine - Language",
  description: "NovaCine - Language",
};

export default async function LanguagePage() {

   const popularMovies = await getrMovies('/genres/');
       const bannerMovie = popularMovies[10];
       const movieList = popularMovies.slice(1,15);
   
       if(popularMovies.length == 0){
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

