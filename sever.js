const express = require('expess');
const path = require('path');

//definindo a app como express
const app = express();
 
//conectando uma porta a ser acessada pelo websocket
//criando o server com a variavel app  - PROTOCOLO HTTP
const server = request('http').createServer(app);

//PROTOCOLO WSS  -- passando o server como parametro
const io = require('socket.io')(server);

//definindo onde serão usados os arquivos publicos da aplicação
//definindo que será a pasta atual
app.use(express.static(path.join(__dirname, 'public')));

//configurando as views como html, por padrao node é usado o EJS
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//configurando que o endereço padrão ira renderizar a index.html
app.set('/', (req, res) => {
    res.render('index.html');
});
