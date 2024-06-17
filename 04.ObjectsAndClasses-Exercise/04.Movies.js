function solve(commands) {

    let movies = [];
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command.includes('addMovie')) {
            let movie = {
                name: command.substring('addMovie'.length, command.length).trim(),
                director: '',
                date: '',
            }

            movies.push(movie);

        } else if (command.includes('directedBy')) {
            let tokens = command.split('directedBy');
            let movieName = tokens[0].trim();
            let movieDirector = tokens[1].trim();
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movieName) {
                    movies[i].director = movieDirector;
                }
            }
        } else if (command.includes('onDate')) {
            let tokens = command.split('onDate');
            let movieName = tokens[0].trim();
            let movieDate = tokens[1].trim();
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movieName) {
                    movies[i].date = movieDate;
                }
            }
        }
    }

    for (const currentMovie of movies) {
        if (currentMovie.date !== '' && currentMovie.director !== '') {
            console.log(JSON.stringify(currentMovie));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);