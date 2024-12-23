const express = require( 'express' );
const connectDB = require( './config/db' )

const app = express();
const path = require('path');
//Connect Database
connectDB();

// Init Middleware
app.use( express.json( { extended: false } ) )



// Define Routes
app.use( '/api/users', require( './routes/api/users' ) );
app.use( '/api/auth', require( './routes/api/auth' ) );
app.use( '/api/profile', require( './routes/api/profile' ) );
app.use( '/api/posts', require( './routes/api/posts' ) );
app.use( '/api/event', require( './routes/api/event' ) );

// app.get( '/', ( req, res ) => res.send( 'API Running' ) );
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    app.use(express.static('client/src/styles'));

    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => console.log( `Server started on port ${PORT}` ) );
