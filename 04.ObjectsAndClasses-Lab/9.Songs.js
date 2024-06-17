function solve(songsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = songsArr.shift();
    let songFilter = songsArr.pop();
    let songs = [];
    let filteredSongs = [];

    for (let i = 0; i < songsArr.length; i++) {
        let currentSongInfo = songsArr[i].split('_');
        let currentTypeList = currentSongInfo[0];
        let currentName = currentSongInfo[1];
        let currentTime = currentSongInfo[2];

        let currentSong = new Song(currentTypeList, currentName, currentTime);

        songs.push(currentSong);

        if (i === songsArr.length - 1) {
            if (songFilter === 'all') {
                filteredSongs = songs.map(x => x);
            } else {
                filteredSongs = songs.filter(song => song.typeList === songFilter);
            }

        }
    }

    for (const filteredSong of filteredSongs) {
        console.log(filteredSong.name);
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);