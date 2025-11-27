import type { Request, Response } from 'express';
import dovenv from 'dotenv';
import axios from 'axios';
dovenv.config();

const TOKEN_MOVIE = process.env.TOKEN_MOVIE;
const URL_MOVIE = process.env.URL_MOVIE;



export class MovieController {
    static getPopular = async (req: Request, res: Response) =>{
        const patch = '/movie/popular';
        try {
            const response = await axios.get(`${URL_MOVIE}${patch}`, {
                headers:{
                    'authorization': `Bearer ${TOKEN_MOVIE}`,
                    'content-type' : 'application/json'
                },
                params:{
                    'language': 'es-ES'}

            });
           res.status(200).json(response.data.results);


        } catch (error) {
            //console.log(error);
            res.status(500).json({erro: 'Hubo un error'});
        }
    }

    static getGenres = async (req: Request, res: Response) =>{
        const path = '/discover/movie';
        const genreId = req.params.genreId;

        try{
            const response = await axios.get(`${URL_MOVIE}${path}`, {
                headers:{
                    'authorization': `Bearer ${TOKEN_MOVIE}`,
                    'content-type' : 'application/json'
                },
                params:{
                    'language': 'es-ES',
                    'with_genres': genreId,
                    'sort_by': 'popularity.desc'
                }

            });

            res.status(200).json(response.data.results);

        } 
        catch (error){
            //console.log(error);
            res.status(500).json({error: 'Hubo un error'});
        }

    }

    
    static getidMovie = async (req: Request, res: Response) =>{
        const patch = '/genre/movie/list';
        try { 
            const response = await axios.get(`${URL_MOVIE}${patch}`, {
                headers:{
                    'authorization': `Bearer ${TOKEN_MOVIE}`,
                    'content-type' : 'application/json'
                },
                params:{
                    'language': 'es-ES'
                }

            });
            

        } 
        catch (error) {
            console.log(error);
            res.status(500).json({erro: 'Hubo un error'});
        }
    }


    static getLanguajes = async (req: Request, res: Response) =>{
        const path = '/discover/movie';
        const LangId = req.params.LangId;

        try{
            const response = await axios.get(`${URL_MOVIE}${path}`, {
                headers:{
                    'authorization': `Bearer ${TOKEN_MOVIE}`,
                    'content-type' : 'application/json'
                },
                params:{
                    'language': 'es-ES',
                    'with_original_language': LangId,
                    'sort_by': 'popularity.desc'
                }   
            });
            res.status(200).json(response.data.results);

        }

        catch (error){
           console.log(error);
            res.status(500).json({error: 'Hubo un error'});
        }
    }

}

