import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `The history of Chaardivari Foundation consists of a very humble beginning to a very progressive company.  We share over a decade of the industryleading excellence with every single client. We offer general contracting, construction management, design-build, and preconstruction planning services for projects of all sizes—from a single office fit-up to projects of a large scale.`,
    `We have helped hundreds of people build their dream homes and erect buildings of commercial and industrial interests`,
    `The team consists of very seasoned and enthusiastic Project Managers, Civil Architects, Interior Decorators, Civil Contractors, and hands-on workers. The entire team works hand-in-hand with complete synergy, resulting in very timely, efficient and relabel construction`,
    `We are a highly customer-centric company and creating WOW moments for our clients are the top priority.`,
    `The team works harmoniously under the supervision of Mr Aditya Soni, the founder of the company. Mr Aditya is associated with BNI, Jaipur and is a high achieving member.`
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                  <strong>{fullTitle} </strong>To be the preeminent provider of superior construction services by
consistently improving the quality of our product and services.
To add value for clients through innovation, foresight, integrity, and
aggressive performance
To serve with character and purpose that brings honour to self and to
the almighty
                </p>
                {/* <ol>
                  <li>Providing awesome customer service to our clients.</li>
                  <li>
                    Providing a mixture of services to a variety of industries
                    and geographical locations.
                  </li>
                  <li>
                    Continually improving communications with our customers and
                    between departments.
                  </li>
                  <li>Providing training for personnel’s enhancement.</li>
                  <li>
                    Recruiting and hiring only those who share our vision.
                  </li>
                </ol> */}
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Vision">
                <p>
                To be a world-class company in construction solutions, both locally and
globally, that exceeds our clients’ expectations.
                </p>
              </AboutCard>
              <AboutCard title="Core Values">
                <p>
                In the fiber of our DNA we have these values that will help us achieve
our vision thru our mission:
                </p>
                <ul>
                  <li>Integrity and honesty</li>
                  <li>Customer-first mindset</li>
                  <li>Quality and attention to detail</li>
                  <li>Strong leadership and planning</li>
                  <li>Integrity</li>
                </ul>
              </AboutCard>
            </Col>
          </Row>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
