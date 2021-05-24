const express = require('express');
const app = express();


app.use(express.static('./dist/cool-weather-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/cool-weather-app'}
  );
  });

  app.listen(process.env.PORT || 8080);