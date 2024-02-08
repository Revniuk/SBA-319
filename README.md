# SBA-319
MongoDB Database Application
"Art for Impact". Node.js Server for Managing Donated Artwork in Support of a Non-Profit

Description:
This is a Node.js, Express, and MongoDB server application to facilitate the management of donated artworks by artists in support of a non-profit organization. The application allows artists to register and upload details about their donated artworks, including images, descriptions, and estimated values. Non-profit administrators can then review and approve donated artworks for inclusion in online fundraising events. The server provides endpoints for artists to submit artwork information, administrators to review and manage artwork submissions, and users to browse and make donations in exchange for a piece of artwork they like. The application emphasizes transparency, accountability, and efficiency in handling donated artworks to maximize their impact on supporting the non-profit's mission.

Structure:
server.js: The main entry point of the application.  Set up the Express server, define routes, connect to MongoDB, and start the server.
models/: This directory contains Mongoose models for defining the schema of donated artworks and user accounts.
      artwork.js: Mongoose model for artwork schema.
      user.js: Mongoose model for user schema.
      Comment.js: Mongoose model for comments
routes/: This directory contains route handlers for different endpoints.
      artworkRoutes.js: Route handlers for managing artwork-related endpoints.
      userRoutes.js: Route handlers for managing user-related endpoints.
      commentRoutes.js for handling comment-related endpoints
      app.use('/api', getDataRoutes); 
controllers/: This directory contains controller functions that handle the business logic for different endpoints.
     artworkController.js: Controller functions for managing artwork-related operations.
     userController.js: Controller functions for managing user-related operations.
middlewares/: Middleware functions.
     authMiddleware.js: Middleware for user authentication.
     validationMiddleware.js: Middleware for request validation.
config/: This directory contains configuration files.
     dbConfig.js: MongoDB connection configuration.
     authConfig.js: Authentication configuration.
utils/: This directory contains utility functions used across the application.
     fileUpload.js: Utility function for handling file uploads.
