import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import routes from './routes';

const isDev = process.env.NODE_ENV !== 'production';
const env  = isDev ? 'development' : process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

const publicPath = path.resolve(__dirname, '../public');
const templatePath = path.resolve(__dirname, '../app/templates');
const hbs = handlebars.create({
  layoutsDir: templatePath + '/_layouts',
  defaultLayout: 'default',
  helpers: new require( templatePath + '/_helpers')(),
  extname: '.hbs'
});

module.exports = {
  start: function() {
    let server = express();

    server.set("env", env);
    server.set("host", host); 
    server.set("port", port);

    // Parse POST data
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.engine('.hbs', hbs.engine); 
    server.set('views', templatePath + '/_pages');
    server.set('view engine', '.hbs');

    if (isDev) {
      require('./dev.server.js')(server);
    }

    server.use(express.static(publicPath));

    routes.create(server);

    server.get('*', function response(req, res) {
      res.status(200).render('main', {env: env});
    });

    server.listen(port, host, function onStart(err) {
      if (err) {
        console.log(err);
      } else {
        console.info('\n=> Node Server is running %s on %s:%s\n', env, host, port);
      }
    });
  }
}
