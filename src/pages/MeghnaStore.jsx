import React from "react";
import logo from "../assets/projectPhotos/meghnaStore/logo.png";
import responsive01 from "../assets/projectPhotos/meghnaStore/responsive01.png";
import responsive02 from "../assets/projectPhotos/meghnaStore/responsive02.png";
import responsive03 from "../assets/projectPhotos/meghnaStore/responsive03.png";
import responsive04 from "../assets/projectPhotos/meghnaStore/responsive04.png";
import responsive05 from "../assets/projectPhotos/meghnaStore/responsive05.png";
import responsive06 from "../assets/projectPhotos/meghnaStore/responsive06.png";
import responsive07 from "../assets/projectPhotos/meghnaStore/responsive07.png";
import heroVideo from "../assets/projectPhotos/meghnaStore/heroVideo.mp4";
import cartVideo from "../assets/projectPhotos/meghnaStore/cartVideo.mp4";
import mobileVideo from "../assets/projectPhotos/meghnaStore/mobileVideo.mp4";

import { CTA } from "../components";

const MeghnaStore = () => {
  return (
    <section className="md:max-container px-4 md:px-2">
      <div className=" flex flex-col items-center pb-8">
        <span className="mb-2">
          <img src={logo} alt="logo" className="w-44 md:w-full" />
        </span>
        <span className="text-xs md:text-[20px] ">
          An authentic South-Asian Store
        </span>
      </div>
      <div className="my-2">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full h-full object-cover"
        ></video>
      </div>
      <div className="grid md:grid-cols-2 mt-4 items-center gap-4">
        <h3 className="text-3xl md:text-5xl text-center md:text-left p-4 bg-rose-600 rounded-lg font-semibold">
          YOUR AUTHENTIC SOUTH-ASIAN GROCERY STORE
        </h3>
        <p className=" leading-relaxed">
          This is a fullstack e-commerce project that I am developing by myself
          for my portfolio. The project is still under development. The project
          is hosted on Render, Netlify and the database is hosted on MongoDB
          Atlas. The project is using the Stripe API for the payment gateway.
          The project is using the SendGrid API for the email service. The
          project is using the Cloudinary API for the image hosting.
        </p>
      </div>
      <div className="pt-8">
        <span className="font-semibold text-lg text-blue-300">Overview</span>
        <ul className="flex flex-col gap-2 marker:dot">
          <li>
            I have been working on this fullstack e-commerce project for my
            portfolio. I am using Vue js for the frontend and Node js for the
            backend. I am using resource like photos from the internet and
            Jomuna website for the project. This project is still under the beta
            version and I am not used any real data for the project.
          </li>
        </ul>
      </div>
      <p className="mt-4">
        As a Fullstack Developer and UX/UI Designer, I conducted comprehensive
        research to understand user needs and align technological choices
        accordingly. My approach balanced user-centric design with technical
        feasibility, ensuring the final product met both user expectations and
        performance standards.
      </p>
      <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
        Responsive layout:
      </h3>
      <div className="grid md:grid-cols-2  gap-4">
        <span className="mb-2 w-full">
          <img
            src={responsive01}
            alt="responsive01"
            className="w-full rounded-lg"
          />
          <p className="mt-4">
            <strong className="pr-2 font-semibold text-lg text-blue-300 ">
              Resposive layout View:
            </strong>
            <br />
            The layout is fully responsive and adapts to different screen sizes
            and devices. The Photos show dynamic responsive layout views of the
            product detail page.
            <br />
            <br />
            On the desktop view, the product detail informations are displayed
            in right side of the layout where the product image is displayed in
            the left side of the layout. On the mobile view, the product detail
            informations are displayed in the bottom of the layout where the
            product image is displayed in the top of the layout.
          </p>
        </span>
        <span className="mb-2 w-full">
          <img
            src={responsive02}
            alt="responsive02"
            className="w-full rounded-lg"
          />
        </span>
      </div>
      <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
        Special Features:
      </h3>
      <div className="grid md:grid-cols-2  gap-4">
        <div className="flex flex-col gap-6">
          <div>
            <strong className="pr-2 font-semibold text-lg text-blue-300">
              Dynamic Pricing and Shipping Information:
            </strong>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                Each product card dynamically displays the product price and
                shipping details.
              </li>
              <li>
                For orders over 40 euros, users are eligible for free shipping,
                which updates in real time to reflect the waived shipping cost.
              </li>
              <li>
                A progress bar is also included, visually tracking how much more
                the user needs to spend to qualify for free shipping.
              </li>
            </ul>
          </div>
          <div>
            <strong className="pr-2 font-semibold text-lg text-blue-300">
              Curated Product Sections:
            </strong>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                The interface provides dedicated sections for Weekly Offers, New
                Arrivals, and Best Sellers, allowing users to explore popular
                products, new entries, and special deals separately.
              </li>
              <li>
                Users can also browse products by category, making it easy to
                navigate the store based on their preferences or needs.
              </li>
            </ul>
          </div>
          <div>
            <strong className="pr-2 font-semibold text-lg text-blue-300">
              Powerful Global Search:
            </strong>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                Users can search products globally using product name, category,
                title, or keywords.
              </li>
              <li>
                The search functionality instantly displays relevant products
                based on user input, improving the discovery experience and
                ensuring users quickly find what they need.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <strong className="pr-2 font-semibold text-lg text-blue-300">
              Organized Product Showcases:
            </strong>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                Products are showcased in dedicated sections for Weekly Offers,
                New Arrivals, and Best Sellers.
              </li>
              <li>
                For orders over 40 euros, users are eligible for free shipping,
                which updates in real time to reflect the waived shipping cost.
              </li>
            </ul>
          </div>
          <div>
            <strong className="pr-2 font-semibold text-lg text-blue-300">
              Filter-Based Browsing:
            </strong>

            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                Users can easily filter products by specific categories, making
                navigation straightforward and tailored to user preferences.
              </li>
            </ul>
          </div>
          <div>
            <strong className="pr-2 font-semibold text-lg text-blue-300">
              Admin Dashboard:
            </strong>
            <p className="pb-1">
              The admin has access to a comprehensive dashboard where they can
              manage all activities, including:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                Product Management: Add, edit, or remove products, categorize
                them, and assign promotional tags.
              </li>
              <li>
                Order and Inventory Tracking: Monitor orders, manage inventory,
                and ensure stock levels are updated.
              </li>
              <li>
                User Insights and Analytics: View customer data, analyze sales
                trends, and track best-selling products for data-driven
                decisions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
        Dynamic cart layout:
      </h3>
      <div className="flex flex-col  gap-4">
        <span className="mb-2">
          <img
            src={responsive03}
            alt="responsive03"
            className="w-full rounded-lg"
          />
        </span>
        <span className="mb-2">
          <img
            src={responsive04}
            alt="responsive04"
            className="w-full rounded-lg"
          />
        </span>
      </div>
      <div className="my-2">
        <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-20">
          Shopping Card dynamic works?
        </h3>
        <video
          src={cartVideo}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full h-full object-cover"
        ></video>
      </div>
      <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
        Hero section layout:
      </h3>
      <p className="pb-8">
        The hero section is designed to grab the user’s attention and create a
        memorable first impression. The dynamic layout showcases the store’s
        offerings, highlighting key products and promotions to entice users to
        explore further. The hero section is designed to be visually engaging,
        with high-quality images and clear calls to action that encourage users
        to browse the store and discover new products.
      </p>
      <div className="flex flex-col  gap-4">
        <span className="mb-2">
          <img
            src={responsive06}
            alt="responsive06"
            className="w-full rounded-lg"
          />
        </span>
        <span className="mb-2">
          <img
            src={responsive05}
            alt="responsive05"
            className="w-full rounded-lg"
          />
        </span>
      </div>
      <div className="my-2  mt-32">
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="w-full">
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
              Responsive Design
            </h3>
            <p>
              The project is fully responsive and mobile-friendly. The user can
              easily browse the website from any device and any screen size. The
              website is fully optimized for mobile devices.
            </p>
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-20">
              Shopping Experience
            </h3>
            <p className="">
              From the global search bar to the product showcases, every element
              is designed to provide a seamless shopping experience. Users can
              easily find products, explore curated sections, and navigate the
              store with ease, enhancing their overall shopping experience. The
              dynamic pricing and shipping information, along with the
              filter-based browsing, make it easy for users to discover products
              and make informed purchase decisions.
            </p>
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-20">
              Accessible and User-Friendly
            </h3>
            <p className="">
              The project is designed with accessibility in mind, ensuring that
              all users can easily navigate the store, find products, and
              complete purchases. The user-friendly interface and intuitive
              design elements make it easy for users to interact with the
              website, enhancing the overall shopping experience.
            </p>
          </div>
          <video
            src={mobileVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full h-full object-cover"
          ></video>
        </div>
      </div>
      <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
        Global search bar:
      </h3>
      <p className="pb-8">
        User can search products globally using product name, category, title,
        or keywords. The search functionality instantly displays relevant
        products based on user input, improving the discovery experience and
        ensuring users quickly find what they need.
        <br />
        <br />
        Below are the dynamic search results for the keyword "a2b". The search
        is case-insensitive and the search results are displayed in real-time as
        the user types in the search bar.
      </p>
      <div className="flex flex-col  gap-4">
        <span className="mb-2">
          <img
            src={responsive07}
            alt="responsive06"
            className="w-full rounded-lg"
          />
        </span>
      </div>

      {/* <div className="grid md:grid-cols-2 mt-32 gap-4">
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            Which tools?
          </h3>
          <p className="pb-4">
            For this project, I used a combination of design and project
            management tools to streamline the design process, ensure effective
            collaboration, and maintain clear project tracking. Here are the key
            tools utilized:
          </p>
          <ul className="flex flex-col gap-2 marker:dot">
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Figma:
              </strong>
              Used for wireframes, high-fidelity UI designs, and interactive
              prototypes. Figma’s live collaboration features made it easy for
              stakeholders and team members to provide real-time feedback,
              helping iterate on designs quickly.
            </li>
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                FigJam:
              </strong>
              Served as a versatile space for brainstorming, creating user
              flows, and mapping out user journeys. FigJam facilitated
              collaborative workshops and design ideation sessions, enabling the
              team to stay aligned and work creatively together.
            </li>
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Miro:
              </strong>
              Primarily used for early-stage UX research activities, including
              affinity mapping, user journey mapping, and feedback collection.
              Miro’s interactive boards enabled team members to participate in
              research synthesis and ideation from any location.
            </li>
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Jira:
              </strong>
              Essential for managing design tasks, tracking sprints, and
              coordinating with development. It allowed us to assign,
              prioritize, and monitor tasks, ensuring that the design and
              development work remained aligned.
            </li>
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Confluence:
              </strong>
              Used to document research findings, user stories, and design
              guidelines, creating a centralized knowledge hub accessible to all
              team members. Confluence also served as the main platform for
              final documentation and design handoff, making it easy for
              developers to access details when implementing designs.
            </li>
          </ul>
        </div>
        <div>
          <div>
            <img
              src={walbGif}
              alt="walbGif"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> */}

      <div className="pt-12">
        <p className="text-lg  text-white text-center bg-slate-600 p-2 rounded-lg px-2">
          It is a Demo project. To know more about the project, please contact
          with me!
        </p>
      </div>

      <div className="flex justify-center mt-8  pb-24 ">
        <div className="flex gap-2">
          <button
            className="py-2 px-6 cursor-pointer bg-rose-500 rounded-lg text-slate-100 font-semibold"
            onClick={() => {
              alert(
                "This project is not hosted yet. Please check the GitHub repository for more information."
              );
            }}
          >
            {/* <a
              href="https://app.walbyapp.com/explore"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a> */}
            Visit app
          </button>
          <button className="py-2 px-6 cursor-pointer bg-slate-600 rounded-lg text-slate-100 font-semibold">
            <a
              href="https://github.com/mdMehediBillah/Meghna-webStore"
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

export default MeghnaStore;
