import React, { useState } from 'react';

function Features() {
  const [ category, setCategory] = useState("")

  const development = () => {
    const mainCategory = 'Web and App Development'
      setCategory(mainCategory)
    }
  const digital = () => {
    const marketing = 'Digital Marketing'
      setCategory(marketing)
    }
  const business = () => {
    const analytics = 'Business Analytics'
      setCategory(analytics)
    }
  
  return (
    <div className='container'>
      <h1 className='my-4'>Our Major Tech Strengths: {category}</h1>
      <button onClick={development} className="btn btn-success">Web Development</button>
      <p> Mobile development is the process of creating applications that work on mobile devices running iOS or Android OS, and web development is the process of creating websites and web applications that work in web browsers. Both of these fields are always evolving. For example, in the web development space, the trend is moving towards single-page applications(SPAs) and responsive web design, and mobile development is moving beyond just smart phone apps to encompass smart watches and other wearable devices. However, at the end of the day, app development on any platform comes down to determining user needs, designing and coding software solutions to meet them, and providing ongoing maintenance and user support to ensure your application continues working as intended.</p>
      <button onClick={digital} className="btn btn-success">Digital Marketing</button>
      <p> Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.[1][2] Its development during the 1990s and 2000s, changed the way brands and businesses use technology for marketing. As digital platforms became increasingly incorporated into marketing plans and everyday life,[3] and as people increasingly use digital devices instead of visiting physical shops,[4][5] digital marketing campaigns have become prevalent, employing combinations of search engine optimization (SEO), search engine marketing (SEM), content marketing, influencer marketing, content automation, campaign marketing, data-driven marketing, e-commerce marketing, social media marketing, social media optimization, e-mail direct marketing, display advertising, e–books, and optical disks and games have become commonplace. Digital marketing extends to non-Internet channels that provide digital media, such as television, mobile phones (SMS and MMS), callback, and on-hold mobile ring tones.[6] The extension to non-Internet channels differentiates digital marketing from online marketing.</p>
      <button onClick={business} className="btn btn-success">Business Analytics</button>
      <p> Business analysis is a research discipline[1] of identifying business needs and determining solutions to business problems. Solutions often include a software-systems development component, but may also consist of process improvement, organizational change or strategic planning and policy development. The person who carries out this task is called a business analyst or BA.
      Business analysts do not work solely on developing software systems. But work across the organization, solving business problems in consultation with business stakeholders. Whilst most of the work that business analysts do today relate to software development/solutions, this derives from the ongoing massive changes businesses all over the world are experiencing in their attempts to digitize.</p>
    </div>
  );
}

export default Features;
