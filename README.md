https://royal-estate.netlify.app/

Royal-Estate is a full-stack web application designed to enhance the real estate experience. Utilizing React for the frontend and Node.js for the backend, this platform provides users with advanced search capabilities based on parameters such as location, price range, and purpose (rent, buy, etc.). The integration of React-Leaflet and the Leaflet library introduces dynamic map functionality, allowing users to interactively explore property locations.

The platform offers a powerful search feature, enabling users to filter properties according to their specific needs. The results are displayed in a comprehensive list format. Each property has its own detailed page, featuring descriptions, owner information, property size and room count, pricing, nearby amenities, and a map pinpointing its location. An image slider component is included to showcase property photos, enhancing the user's viewing experience.

Royal-Estate boasts an impressive and responsive user interface which is done with the help SCSS library (by using different layouts in different screen sizes and importing these layouts to different scss files to implement it on all pages), ensuring a seamless experience across all devices( also custom involves loader funtions which uses React-Suspense to convey network delays and errors in fetching data). The use of SCSS for CSS management allows for nested, modular, and reusable styles, which contribute to a clean and consistent design throughout the application.

User authentication and profile management are securely handled through JSON Web Tokens (JWT), ensuring encrypted and verified data for each request. After logging in, users can access a personalized profile page where they can manage/update their prfile-details, access(read and send) their chat messages with different users, view saved properties which they have saved when visting other properties, list/create_new their own properties with all necessary details using  Cloudinary and React-Quill, etc. The real-time chat functionality, powered by Socket.IO, allows users to directly communicate with property owners.

The backend infrastructure of Royal-Estate is robust and efficient, with a custom API developed from scratch to handle all backend operations. Prisma is used to interface with MongoDB, providing a seamless database experience without changing query methods. 

The mongodb backend involves various collections like users, posts, chats, messages, etc which involves( one-one, one-many, many-one and many-to-many ) relationhips which are mangaged by using prisma models and relations which would mean dependable and consistent data and thereby enforces data integrity. This technology stack ensures smooth and reliable data operations.

In summary, Royal-Estate delivers a comprehensive, user-friendly platform for exploring, managing, and communicating about real estate properties. Its advanced search capabilities, detailed property listings, secure authentication, real-time communication, and responsive design all contribute to providing users with a seamless and enjoyable experience in the real estate market.

Home Page :
![Screenshot 2024-06-27 040358](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/17f77e1d-b0df-46e2-97f5-752a773987f4)


List Page :
![Screenshot 2024-06-27 040439](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/0fc44540-b2c4-4276-9a46-6b3cdccdc079)


Single Post Page :
![Screenshot 2024-06-28 181722](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/dcd5992d-cccc-48c6-afc4-4ced58c2aa79)


Register Page :
![Screenshot 2024-06-27 040850](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/42fd5616-1adb-4f11-806e-bdccd29e39bc)


Login Page :
![Screenshot 2024-06-27 040803](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/044bd8a6-5c92-4329-bb84-7babc3f7c42f)


Profile Page :
![Screenshot 2024-06-27 040659](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/12fbe69e-f3a9-4bb5-96a0-833dc1f5d820)

![Screenshot 2024-06-27 040724](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/d3739819-01a5-452a-a991-990641b163bb)


Update Profile Page :
![Screenshot 2024-06-27 040928](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/f3efed1f-dc06-4c10-9100-4c64f10d6cfd)


Create New Post Page :
![Screenshot 2024-06-27 041103](https://github.com/AyushSaxena15022002/Royal_Estate/assets/109613258/54b61e1a-18f8-4940-973a-c1bf3c783a88)
