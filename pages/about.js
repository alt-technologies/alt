import Counter from "@/src/components/Counter";
import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-five1.jpg" alt="About" />
                <img src="assets/images/about/about-five2.jpg" alt="About" />
                <div className="experience-years">
                  <span className="years">10+</span>
                  <h4>Years Of ExperienceIT Solutions</h4>
                </div>
                <img
                  className="abut-bg-shape"
                  src="assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Best talent, Competitive Cost, Incredible IT Service
                    Infrastructure
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          Awards Winning Company
                        </Link>
                      </h4>
                      <p>
                      We are proud to be an award-winning company, recognized for our excellence in IT Solution 
                      and we strive to continue delivering exceptional results to our clients and stakeholders.
                      </p>
                      {/* <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          Startup IT Solution &amp; Business Dev
                        </Link>
                      </h4>
                      <p>
                      Start with us for IT Solution Business Dev is a smart choice for businesses seeking to 
                      leverage the latest technologies and trends in the industry to achieve their goals.
                      </p>
                     {/*  <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-five rpt-100 rpb-65 rel z-1">
        <div className="container">
          <h3>About us</h3>
          <p>
            ALT Technologies is a software solutions provider specializing in
            web and mobile application development and fleet management
            solutions. Our software solutions are designed to help businesses
            succeed in today's competitive digital landscape. We believe that
            continuous development is the key to staying ahead of the curve and
            providing our clients with the best possible solutions. With the
            help of experienced developers and designers who are committed to
            staying up-to-date with the latest technologies and best practices.
            We work closely with our clients to develop customized solutions
            that meet their specific needs and goals. At ALT Technologies, we
            are dedicated to providing exceptional value to our clients and
            helping them achieve their vision.
          </p>
          <h3>Vision</h3>
          <p>At ALT Technologies, we are working to be the go-to software solutions
          provider for entrepreneurs and businesses of all sizes. We work to
          empower our clients, by offering cutting-edge and reliable software
          solutions that promote growth and achievement. Our ultimate objective
          is to earn our clients' trust and become their go-to partner in
          mastering the fast-evolving digital market.</p>
          <h3>Mission</h3>
          <p> ALT Technologies aims to provide our clients with the highest quality
          software solutions that drive growth, efficiency, and innovation. We
          are committed to understanding our client's needs and delivering
          customized solutions that meet their specific requirements. We strive
          to build long-term relationships with our clients based on trust,
          integrity, and a commitment to delivering exceptional value. We are
          ready to provide our clients with the tools and expertise they need to
          achieve their business goals.</p>
          <h3>Our Beginning </h3>
          <p>
            ALT Technologies is a dynamic startup software provider that has
            rapidly grown since its inception. Founded in 2020 by a team of
            experienced developers, the company has quickly established itself
            as a leading player in the fleet management and web and mobile
            application space. With a focus on innovation, ALT Technologies has
            developed cutting-edge software solutions that help businesses
            optimize their fleet management, boost productivity, and enhance
            customer engagement. In a short period, ALT Technologies has built a
            reputation for excellence in customer service, and its clients have
            come to rely on the company's expertise and professionalism. As the
            company continues to grow, it remains committed to its core values
            of innovation, customer satisfaction, and excellence.</p>
          
          {/* <h3>Our Product:</h3> 
          <p>At the core of ALT Technologies' business, there are two key areas:</p>

          <p><b>Fleet Management Solution </b></p>
          <p><b>Web and Mobile App </b></p>

          <h3>Fleet Management Solution </h3>
          
          <p>ALT technologies provide a comprehensive solution
          for businesses looking to manage their fleets more efficiently. The
          solution incorporates a range of features including GPS tracking,
          advanced reporting, and real-time vehicle diagnostics, to enable
          businesses to track, monitor and analyze their fleet's performance.</p>

          <p>Through customized applications for drivers and fleet managers, the
          solution ensures that everyone involved is fully connected and has
          access to real-time data. This level of connectivity allows for the
          seamless management of fleet operations, including passenger app,
          supervisor app, web booking, driver app, and dispatcher leading to
          providing an entire solution resulting in increased productivity,
          reduced costs, and improved customer satisfaction. </p>
          
          <h3>Competitive Keys</h3> 

          <p>● Save the last GPS position.</p>
          <p>● Enabling offline trips by the supervisor</p>
          <p>● Fixed pricing option before the trip </p>
          <p>● Ability to switch to using another fare at the end of the trip </p>
          <p>● Guest booking </p>
          <p>● Top up the wallet, so the card will not be saved </p>

          <h3>Products modules </h3>

          <p>1. Driver Application </p>
          <p>2. Dispatch solution </p>
          <p>3. Meter Solution (for walk-in trips)</p>
          <p>4. Queueing solution </p>
          <p>5. Passenger Application </p>
          <p>6. Company Web booker </p>
          <p>7. Supervisor Application </p>
          <p>8. Corporate Panel and corporate web booker </p>
          <p>9. Admin panel (users) </p>

          <h3>Our Services</h3> 
          
          <p><b>Web and Mobile App</b></p>
          
          <p>ALT Technologies' web and mobile application development services are not limited to any
          specific industry or business type. The team of experienced developers
          can create customized mobile applications for any kind of business,
          from transportation to retail to healthcare and beyond. By
          understanding the unique needs of each business and its customers, ALT
          technologies can design and develop web and mobile applications that
          deliver value and enhance user experience. The company's web and
          mobile applications development are designed to be user-friendly and
          intuitive, offering businesses a seamless experience. </p>
          
          <h3>Competitive Keys</h3>
          <p>● Analysis & planning by understanding in-depth the clients’ business requirements.</p>
          <p>● Design & development by innovating solutions and services.</p>
          <p>● Quality assurance by guaranteeing the highest quality of our deliverables. </p>
          <p>● Implementation & development by continuous improvement. </p>
          <p>● Maintenance & support. </p>
          
          <h3>Service modules</h3> 
          <p>1. IOS App development </p>
          <p>2. Android App Development </p>
          <p>3. Cross-platform Development services </p>
          <p>4. Web development </p>
          <p>5. E-commerce solution Package </p>
          
          <p>Our Team At ALT Technologies, we believe that our team is our greatest asset, and
          we are dedicated to creating an environment that fosters continuous
          learning, growth, and professional development. By leveraging our
          team's skills and expertise, we can deliver customized solutions that
          help our clients stay ahead of the curve in a rapidly evolving digital
          landscape ensuring that their needs are met and expectations are
          exceeded. </p> */}

          <h3>Future Outlook</h3>

          <p><b>By 2025, within the next 2 years: </b></p>

          <p>● ALT Technologies will be a best-in-class organization with a clearly
          defined business model and infrastructure, inclusive of highly skilled
          and trained personnel, resources and key partnerships in the GCC. </p>
          <p>● We will build upon our global strengths and ability to implement
          world-class integrated thinking to generate and preserve even greater
          value for the long term.</p>
        </div>
      </section>

      {/* Partners Area start */}
      <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
        <div className="container">
          <hr className="mb-75" />
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/partners/partner1.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/partners/partner2.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/partners/partner3.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/partners/partner4.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item-two wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/partners/partner5.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
          <hr className="mt-45" />
        </div>
      </div>
    </Layout>
  );
};
export default About;
