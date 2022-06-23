export interface Movies{
    Poster:string,
Title: string,
Type: string,
Year: string,
imdbID: string,
}

export interface State extends Movies{
    movies:Movies[]
    shows:Movies[]
    selectedMovieorShows:SingleMovie
}

export interface SingleMovie{
Actors: string,
Awards: string,
BoxOffice?: string,
Country: string,
DVD?: string,
Director: string,
Genre: string,
Language: string,
Metascore?:string, 
Plot: string,
Poster: string,
Production: string,
Rated?: string,
Ratings?: string,
Released?: string,
Response?: string,
Runtime: string,
Title: string,
Type?: string,
Website?:string,
Writer?: string,
Year:string,
imdbID:string,
imdbRating:string,
imdbVotes: string,
}