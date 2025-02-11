import React from 'react';
import "../Style/About.css";

const About = () => {
    return (
        <div className="main-container">
            {/* Hero Section */}
            <div className="hero">
                <h1>Discover the Joy of DIY</h1>
                <p>From tools to tips, explore everything you need to maintain and customize your car.</p>
            </div>

            {/* Sections Below Hero */}
            <div className="sections">
                <div className="section-container">
                    <div className="section">
                        <h3>DIY Projects</h3>
                        <p>Learn how to take care of your car with simple step-by-step guides.</p>
                    </div>
                    {/* Comments Section under DIY Projects */}
                    <div className="comments-section">
                        <h4>Jacob Stevens</h4>
                        <p>"I absolutely loved the DIY guides! The step-by-step instructions were so easy to follow. I was able to change my own oil and replace the brake pads with confidence. The video tutorials were especially helpful. Definitely recommend this service to anyone looking to learn more about car maintenance!"</p>
                    </div>
                    {/* Additional Comment Sections under DIY Projects */}
                    <div className="comments-section">
                        <h4>Sarah Mitchell</h4>
                        <p>"This site saved me so much money! I tackled a DIY headlight restoration project that I'd been putting off for months. The guides were detailed, and I had all the confidence I needed. The tools section also helped me find the right equipment. My car looks brand new!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Ethan Rodriguez</h4>
                        <p>"I had a blast learning how to do my own car maintenance! I was able to replace my air filter and clean the engine bay all by myself. The instructions were clear, and I felt like I had expert support throughout. Definitely a game changer for DIY enthusiasts like me!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Olivia Parker</h4>
                        <p>"I can't believe I waited so long to try DIY car maintenance! The tutorials here made everything so easy, from oil changes to tire rotations. Plus, the community feedback in the comments section was really encouraging. I’m already planning my next project!"</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="section">
                        <h3>Essential Tools</h3>
                        <p>Find the tools that make every car project easier and more efficient.</p>
                    </div>
                    {/* Comments Section under Essential Tools */}
                    <div className="comments-section">
                        <h4>James Thompson</h4>
                        <p>"The tool recommendations on PitStop-DIY are top-notch! I bought the torque wrench they suggested, and it's been a game changer for my DIY car repairs. I love that everything they recommend is both high quality and reasonably priced. Definitely my go-to place for tools now!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Lily Adams</h4>
                        <p>"I’ve been using the PitStop-DIY toolkit for a few months now, and I have to say, the socket set is my favorite. It’s super durable and makes even the toughest jobs easier. Highly recommend checking out the tool section if you’re looking to build your own DIY car maintenance kit!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Michael Harris</h4>
                        <p>"I’ve tried several tool kits before, but PitStop-DIY’s recommended wrench set is by far the best I’ve used. It's made working on my car a lot less stressful. Everything fits perfectly, and it’s so easy to find what I need. I won’t use anything else from now on!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Ella Johnson</h4>
                        <p>"I was on a budget and was worried about getting decent tools, but the PitStop-DIY recommendations for budget-friendly options were a lifesaver! I picked up their budget-friendly screwdrivers and they work just as well as the expensive brands. I’m so glad I found this site for car maintenance tools!"</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="section">
                        <h3>Join the Community</h3>
                        <p>Connect with car enthusiasts and share your journey.</p>
                    </div>
                    {/* Comments Section under Join the Community */}
                    <div className="comments-section">
                        <h4>Daniel Foster</h4>
                        <p>"The PitStop-DIY community has been amazing! Everyone is so welcoming and helpful. I’ve been able to get advice on projects I was too nervous to start before. It’s been such a positive experience, and I love learning from others who share the same passion!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Rachel Green</h4>
                        <p>"I was a bit hesitant to join at first, but I’m so glad I did. The community has been so supportive. I learned a ton about DIY car maintenance, especially from some of the more experienced members. It feels like I’ve found a group of people who truly care about helping each other out!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>John Davidson</h4>
                        <p>"The community here is fantastic! I’ve picked up so many tips and tricks I never would have figured out on my own. From simple fixes to more advanced repairs, the collective knowledge is priceless. If you’re looking to learn, this is the place!"</p>
                    </div>
                    <div className="comments-section">
                        <h4>Sophia Lee</h4>
                        <p>"My biggest piece of advice for anyone new to car DIY: don’t be afraid to ask questions! The PitStop-DIY community is full of people who are eager to help, no matter how simple or complicated your question is. I’ve learned so much by just interacting with everyone and sharing my experiences!"</p>
                    </div>
                </div>
            </div>

            {/* Contact Us Section (Company's Contact Details) */}
            <div className="contact-us-section">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p><strong>Email Address:</strong> if_you_messed_up_its_your_fault@PitStop-DIY.com</p>
                    <p><strong>Phone Number:</strong> (123) 456-7890</p>
                    <p><strong>PO Box:</strong> PO Box 1234, Salt Lake City, UT, 84116</p>
                </div>
            </div>
        </div>
    );
};

export default About;
