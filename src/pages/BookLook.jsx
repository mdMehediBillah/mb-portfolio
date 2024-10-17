import React from "react";
import bookLook24_1 from "../../src/assets/projectPhotos/bookLook24/bookLook24_1.png";
import bookLook24_2 from "../../src/assets/projectPhotos/bookLook24/bookLook24_2.png";
import bookLook24_3 from "../../src/assets/projectPhotos/bookLook24/bookLook24_3.png";
import bookLook24_4 from "../../src/assets/projectPhotos/bookLook24/bookLook24_4.png";
import bookLook24_5 from "../../src/assets/projectPhotos/bookLook24/bookLook24_5.png";
import bookLook24_6 from "../../src/assets/projectPhotos/bookLook24/bookLook24_6.jpg";

import { CTA } from "../components";

const BookLook = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text drop-shadow font-semibold">
          BookLook24
        </span>
      </h1>
      <div className="my-2">
        <img src={bookLook24_1} alt="bookLook24_1" />
      </div>
      <div className="grid md:grid-cols-2 mt-4 items-center gap-4">
        <h3 className="text-5xl p-4 bg-slate-600 rounded-lg font-semibold">
          Find Books Near Your Local Bookshelves
        </h3>
        <p className=" leading-relaxed">
          BookLook24 is a location-based web application that allows users to
          find and explore bookshelves in their area. The app bridges the gap
          between the real and digital world by enabling users to add or create
          new bookshelves in real-world locations, which are then displayed
          digitally on the platform. Users can also donate and borrow books from
          these shelves, fostering a community of book sharing and exploration.
        </p>
      </div>
      <p className="mt-4">
        <strong className="text-yellow-300">MERN</strong> stack was used to
        build the project, with data fetched from the OpenLibrary API. The
        project also includes a user authentication system that allows users to
        create an account and save books to their reading list.
      </p>
      <div className="grid md:grid-cols-2 mt-32 gap-4">
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            Key Features:
          </h3>
          <ul className="flex flex-col gap-2 marker:dot">
            <li>
              <strong className="pr-2">Real-world Bookshelf Creation:</strong>
              Users can create a new bookshelf that exists physically, and it
              will be mapped digitally for others to find.
            </li>
            <li>
              <strong className="pr-2">Location-based Bookshelves:</strong>
              Discover and explore bookshelves in your nearby location.
            </li>
            <li>
              <strong className="pr-2">Book Donations and Borrowing:</strong>
              Users can donate books to a shelf or borrow books from any of the
              listed bookshelves.
            </li>
            <li>
              <strong className="pr-2">Use Open AI:</strong>
              The app use open AI as chatBot to provide more information about
              the book and AI also generate user profile photo.
            </li>
            <li>
              <strong className="pr-2">Interactive and Animated UI:</strong>
              The app uses Framer Motion to create smooth animations, enhancing
              the user experience.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            Technology Stack:
          </h3>
          <div>
            <span className="font-semibold text-lg text-blue-300">
              Frontend:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Built using React and Tailwind CSS for a responsive, modern UI.
              </li>
              <li>Framer Motion for custom and smooth animation</li>
            </ul>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg text-blue-300">
              Backend:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Node.js and Express for the server-side logic and API
                integration.
              </li>
              <li>
                MongoDB for managing bookshelf data and user interactions.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg text-blue-300">API:</span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Integrated with the Open Library API to fetch and display book
                information.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-32 gap-4">
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            Create Bookshelf?
          </h3>
          <ul className="flex flex-col gap-2 marker:dot">
            <li>
              <strong className="pr-2">Free signup:</strong>
              User need to signUp with any email ID to create and see the
              Bookshelves and Books.
            </li>
            <li>
              <strong className="pr-2">Upload address & location:</strong>
              User share the location by typing the adderss or enable user
              location to track location by app.
            </li>
            <li>
              <strong className="pr-2">Upload photo:</strong>
              User upload Bookshelf's photo or default photo will display in the
              app.
            </li>
          </ul>
        </div>
        <div>
          <div>
            <img
              src={bookLook24_6}
              alt="bookLook24_6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-16 gap-4">
        <div className="flex flex-col gap-12 ">
          <div className="">
            <img src={bookLook24_3} alt="bookLook24_3" />
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
              Donate Book?
            </h3>
            <p>
              User can donate book by clicking the donate button and fill the
              book information. User can also borrow book by clicking the borrow
              button and fill the book information.
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <img src={bookLook24_2} alt="bookLook24_2" />
          </div>
        </div>

        <div></div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300">
          User Profile
        </h1>
        <p className="pb-8">
          After the user signup, user can see the profile page and user can see
          the bookshelf and book list. User can also update the profile photo
          and user information. User can like, comment and share the bookshelf
          and book. After like the shelf, user can see the liked shelf in the
          profile page. User can also remove the liked shlef from profile page.
        </p>
        <img
          src={bookLook24_4}
          alt="bookLook24_4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300">
          Updating user Profile
        </h1>
        <p className="pb-8">
          User can update the profile photo and user information. OpenAI chatBot
          will provide the user profile photo. User describe the photo and
          chatBot will generate the photo. The below image is the example of the
          user profile photo generated by OpenAI chatBot.
        </p>
        <img
          src={bookLook24_5}
          alt="bookLook24_5"
          className="w-full h-full object-cover py-4 bg-white"
        />
      </div>

      <div className="flex justify-center mt-12  pb-24 ">
        <div className="flex gap-2">
          <button
            className="py-2 px-6 cursor-pointer bg-rose-500 rounded-lg text-slate-100 font-semibold"
            // onClick={() => {
            //   alert(
            //     "This project is not hosted yet. Please check the GitHub repository for more information."
            //   );
            // }}
          >
            <a
              href="https://booklook24.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Now
            </a>
          </button>
          <button className="py-2 px-6 cursor-pointer bg-slate-600 rounded-lg text-slate-100 font-semibold">
            <a
              href="https://github.com/mdMehediBillah/BookLook24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default BookLook;
