import React from "react";
import walbyLogo from "../assets/projectPhotos/walby/walbyLogo.png";
import clickFlow from "../assets/projectPhotos/walby/clickFlow.png";
import clickFlow2 from "../assets/projectPhotos/walby/clickFlow2.png";
import clickFlow3 from "../assets/projectPhotos/walby/clickFlow3.png";
import walbGif from "../assets/projectPhotos/walby/walbGif.gif";
import walbyHero from "../assets/projectPhotos/walby/walbyHero.gif";
import designSystemColor from "../assets/projectPhotos/walby/designSystemColor.png";
import designSystemIcons from "../assets/projectPhotos/walby/designSystemIcons.png";
import compititorAnalysis from "../assets/projectPhotos/walby/compititorAnalysis.png";
import designSystemButtons from "../assets/projectPhotos/walby/designSystemButtons.png";
import designSystemSpacing from "../assets/projectPhotos/walby/designSystemSpacing.png";
import clickFlowTechnical from "../assets/projectPhotos/walby/clickFlowTechnical.png";
import bookLook24_3 from "../../src/assets/projectPhotos/bookLook24/bookLook24_3.png";
import bookLook24_4 from "../../src/assets/projectPhotos/bookLook24/bookLook24_4.png";
import bookLook24_5 from "../../src/assets/projectPhotos/bookLook24/bookLook24_5.png";
import bookLook24_6 from "../../src/assets/projectPhotos/bookLook24/bookLook24_6.jpg";

import { CTA } from "../components";

const Walby = () => {
  return (
    <section className="max-container">
      <div className=" flex flex-col items-center pb-8">
        <span className="">
          <img src={walbyLogo} alt="walbyLogo" />
        </span>
        <span className="text-[20px]">a location based app</span>
      </div>
      <div className="my-2">
        <img src={clickFlow} alt="clickFlow" />
      </div>
      <div className="grid md:grid-cols-2 mt-4 items-center gap-4">
        <h3 className="text-5xl p-4 bg-orange-600 rounded-lg font-semibold">
          Making the world a little bit better by your effort
        </h3>
        <p className=" leading-relaxed">
          Over 2.5 years, the Walby project evolved from a concept to a fully
          functional app that connects users with local initiatives and events,
          promoting community engagement and positive social impact. The project
          aimed to create a platform that empowers users to make a difference in
          their communities, whether through clean-up activities, cultural
          events, or sustainable practices.
        </p>
      </div>
      <div className="pt-8">
        <span className="font-semibold text-lg text-blue-300">Overview</span>
        <ul className="flex flex-col gap-2 marker:dot">
          <li>
            With a timeline of 2.5 years and a cross-functional team of 8
            front-end developers, 5 back-end developers, a Product Owner (PO),
            and various stakeholders, managing this project required a solid,
            phased approach that balanced user needs with technical feasibility.
          </li>
        </ul>
      </div>
      <p className="mt-4">
        As a UX/UI designer, I followed a structured, user-centered approach
        that ensured the design was well-validated and ready for a seamless
        handoff to development. This approach included comprehensive
        deliverables aimed at crafting an engaging and intuitive product
        experience:
      </p>
      <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
        My responsibilities:
      </h3>
      <div className="grid md:grid-cols-2  gap-4">
        <div>
          <ul className="flex flex-col gap-2 marker:dot">
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Research and Discovery:
              </strong>
              Conducted UX research through user interviews, surveys, and
              competitor analysis to understand user needs, pain points, and
              industry standards. This research provided foundational insights
              for the design direction.
            </li>
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Wireframes (Low and High Fidelity):{" "}
              </strong>
              Developed initial low-fidelity wireframes to establish the basic
              structure and layout. High-fidelity wireframes were later refined
              with detailed design elements to closely represent the final
              product.
            </li>
            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                User Flow and User Story:
              </strong>
              Mapped out a clear user flow to guide users through a smooth
              journey, from onboarding to key actions within the application. I
              created user stories to capture specific user needs, aligning
              design decisions with user expectations and pain points.
            </li>

            <li>
              <strong className="pr-2 font-semibold text-lg text-blue-300">
                Prototyping and Usability Testing:
              </strong>
              Built interactive prototypes for early testing, allowing users and
              stakeholders to interact with the product before development.
              Feedback from usability tests informed further refinements to
              optimize the design.
            </li>
          </ul>
        </div>
        <div>
          <div>
            <span className="font-semibold text-lg text-blue-300">
              Visual Design and Accessibility:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Ensured that the visual design aligned with brand guidelines and
                optimized the user experience with a focus on accessibility,
                such as color contrast and readability for diverse user needs.
              </li>
              <li>Framer Motion for custom and smooth animation</li>
            </ul>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg text-blue-300">
              Fluid and Responsive Design:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Built fluid designs that adapt to various screen sizes and user
                devices, ensuring a seamless experience across platforms.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg text-blue-300">
              Design System:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Build complete walby design system for the app. The design
                system includes the color, typography, icon, button, form,
                input, card, modal, tooltip, loader, and other components. The
                design system also includes the spacing, margin, padding, and
                other utility classes. The design system also includes the
                responsive design for the mobile, tablet, and desktop. The
                design system also includes the dark mode and light mode.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-32 gap-4">
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
      </div>

      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
          Research and Discovery:
        </h1>
        <p className="pb-8">
          The research phase was crucial for understanding user needs and
          identifying opportunities to create a meaningful and engaging
          experience. I conducted user interviews, surveys, and competitive
          analysis to gather insights that informed the design direction. The
          research findings helped identify user pain points, preferences, and a
          deep understanding of the industry standards.
        </p>
        <img
          src={compititorAnalysis}
          alt="compititorAnalysis"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
          Fluid and Responsive Design System:
        </h1>
        <p className="pb-8">
          The design system defined the color, typography, icon, button, form,
          input, card, modal, tooltip, loader, and other components. The design
          system also includes the spacing, margin, padding, and other utility
          classes. The design system also includes the responsive design for the
          mobile, tablet, and desktop. The design system also includes the dark
          mode and light mode.
        </p>
        <div className="flex flex-col gap-4">
          <img
            src={designSystemColor}
            alt="designSystemColor"
            className="w-full h-full object-cover"
          />
          <img
            src={designSystemIcons}
            alt="designSystemIcons"
            className="w-full h-full object-cover"
          />
          <img
            src={designSystemButtons}
            alt="designSystemButtons"
            className="w-full h-full object-cover"
          />
          <img
            src={designSystemSpacing}
            alt="designSystemSpacing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
          User-flow:
        </h1>
        <p className="pb-4">
          The user flow mapped out a clear journey for users, guiding them
          through the application from onboarding to key actions. The user flow
          was designed to ensure a smooth and intuitive experience, aligning
          with user expectations and pain points.
        </p>
        <p className="pb-4">
          The Epic and user-story are the part of the user-flow. For example,
          how the user can create, edit, delete a post and the user flow were
          defined in the epic and user-story.
        </p>
        <h3 className="text-xl mb-2 font-semibold text-blue-300 mt-4">
          Technical user-story
        </h3>
        <img
          src={clickFlowTechnical}
          alt="clickFlowTechnical"
          className="w-full h-full object-cover  bg-white p-4 rounded-lg"
        />
        <h3 className="text-xl  font-semibold text-blue-300 pt-12">
          Wireframes of the user-story
        </h3>
        <img
          src={clickFlow2}
          alt="clickFlow2"
          className="w-full h-full object-cover  bg-white p-4 rounded-lg mt-4"
        />
      </div>
      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
          High-fidelity wireframes:
        </h1>

        <div className="grid md:grid-cols-2 mt-4 gap-4">
          <img
            src={clickFlow3}
            alt="clickFlow3"
            className="w-full h-full object-cover  bg-white p-4 rounded-lg"
          />
          <img
            src={walbyHero}
            alt="walbyHero"
            className="w-full h-full object-cover  bg-white p-4 rounded-lg"
          />
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl mb-4 font-semibold text-yellow-300 mt-32">
          Handover User Story
        </h1>
        <p>
          I handed over a FigJam file that was linked directly in the Jira
          tickets, providing the development team with easy access to the
          essential user flows and story documentation. Within the FigJam file,
          I also included a link to the Figma file, where the team could find
          detailed UI specifications, component documentation, and click-flows
          for each story. This setup ensured a smooth transition from design to
          development, giving the team all necessary resources for reference and
          implementation within each story’s context.
        </p>
      </div>

      <div className="pt-12">
        <p className="text-xl font-semibold text-white text-center bg-slate-600 p-2 rounded-lg">
          To know more about the project, please contact with me!
        </p>
      </div>

      <div className="flex justify-center mt-8  pb-24 ">
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
              href="https://app.walbyapp.com/explore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit app
            </a>
          </button>
          {/* <button className="py-2 px-6 cursor-pointer bg-slate-600 rounded-lg text-slate-100 font-semibold">
            <a
              href="https://github.com/mdMehediBillah/BookLook24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button> */}
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default Walby;
