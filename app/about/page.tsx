import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto p-24">
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
};

export default AboutPage;
