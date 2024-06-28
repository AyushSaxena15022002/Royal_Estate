https://royal-estate.netlify.app/

Royal-Estate is a full-stack web application designed to enhance the real estate experience. Utilizing React for the frontend and Node.js for the backend, this platform provides users with advanced search capabilities based on parameters such as location, price range, and purpose (rent, buy, etc.). The integration of React-Leaflet and the Leaflet library introduces dynamic map functionality, allowing users to interactively explore property locations.

The platform offers a powerful search feature, enabling users to filter properties according to their specific needs. The results are displayed in a comprehensive list format. Each property has its own detailed page, featuring descriptions, owner information, property size and room count, pricing, nearby amenities, and a map pinpointing its location. An image slider component is included to showcase property photos, enhancing the user's viewing experience.

Royal-Estate boasts an impressive and responsive user interface, ensuring a seamless experience across all devices( also custom involves loader funtions which uses React-Suspense to convey network delays and errors in fetching data). The use of SASS for CSS management allows for nested, modular, and reusable styles, which contribute to a clean and consistent design throughout the application.

User authentication and profile management are securely handled through JSON Web Tokens (JWT), ensuring encrypted and verified data for each request. After logging in, users can access a personalized profile page where they can manage/update their prfile-details, access(read and send) their chat messages with different users, view saved properties which they have saved when visting other properties, list/create_new their own properties with all necessary details using  Cloudinary and React-Quill, etc. The real-time chat functionality, powered by Socket.IO, allows users to directly communicate with property owners.

The backend infrastructure of Royal-Estate is robust and efficient, with a custom API developed from scratch to handle all backend operations. Prisma is used to interface with MongoDB, providing a seamless database experience without changing query methods. 

The mongodb backend involves various collections like users, posts, chats, messages, etc which involves( one-one, one-many, many-one and many-to-many ) relationhips which are mangaged by using prisma models and relations which would mean dependable and consistent data and thereby enforces data integrity. This technology stack ensures smooth and reliable data operations.

In summary, Royal-Estate delivers a comprehensive, user-friendly platform for exploring, managing, and communicating about real estate properties. Its advanced search capabilities, detailed property listings, secure authentication, real-time communication, and responsive design all contribute to providing users with a seamless and enjoyable experience in the real estate market.
