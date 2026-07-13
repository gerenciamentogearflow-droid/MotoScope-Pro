const fs = require('fs');
let code = fs.readFileSync('src/lib/audioPlayer.ts', 'utf8');

code = code.replace(
`    return dataUri;`,
`    if (dataUri && dataUri.startsWith('data:application/octet-stream;base64,')) {
      dataUri = dataUri.replace('data:application/octet-stream;base64,', 'data:audio/mp3;base64,');
    }
    return dataUri;`
);

fs.writeFileSync('src/lib/audioPlayer.ts', code);
