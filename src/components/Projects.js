import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img4.png";
import projImg2 from "../assets/img/project-img5.png";
import projImg3 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Projects = () => {

  const projects = [
    {
      title: "AceCV",
      description: "A Resume Builder",
      imgUrl: projImg1,
    },
    {
      title: "RevivePoint",
      description: "An Anonymous Crime Reporting System",
      imgUrl: projImg2,
    },
    {
      title: "Yumbox",
      description: "A Food Delivery App",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In this section, I showcase a variety of projects built using cutting-edge technologies such as React.js, Tailwind CSS, Figma, Supabase, Prisma ORM, Gemini AI, Maptiler, Stripe, and Next.js. These projects demonstrate my ability to leverage modern tools to create dynamic, scalable, and user-centric web applications.</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
