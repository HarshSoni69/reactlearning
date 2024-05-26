import { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="my-8 p-4 border border-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      {isVisible && <p className="text-gray-300">{description}</p>}
      <button
        onClick={toggleVisibility}
        className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
      >
        {isVisible ? "Hide" : "Show"} Description
      </button>
      <hr />
    </div>
  );
};

const Review = ({ name, review }) => (
  <div className="my-4 p-4 border border-gray-700 rounded-lg bg-gray-900">
    <p className="text-xl font-semibold text-white">{name}</p>
    <p className="text-gray-300">{review}</p>
  </div>
);

const AboutPage = () => {
  const [visibility, setVisibility] = useState({});

  const toggleVisibility = (key) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [key]: !prevVisibility[key],
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">About Harsh Foods</h1>
      <Section
        title="Our Mission"
        description="At Harsh Foods, our mission is to bring delicious, healthy, and affordable meals to your table. We believe in using fresh, locally-sourced ingredients to create dishes that satisfy your taste buds and nourish your body."
        isVisible={visibility["Mission"]}
        toggleVisibility={() => toggleVisibility("Mission")}
      />
      <Section
        title="Our Chefs"
        description="Harsh Foods is home to a team of passionate and talented chefs who are dedicated to culinary excellence. With years of experience in the kitchen, our chefs are committed to crafting memorable dining experiences with every meal."
        isVisible={visibility["Chefs"]}
        toggleVisibility={() => toggleVisibility("Chefs")}
      />
      <Section
        title="Our Philosophy"
        description="Our food philosophy is simple: quality ingredients, expert preparation, and a passion for flavor. We believe that great food starts with great ingredients, which is why we prioritize sustainability and support local farmers and producers."
        isVisible={visibility["Philosophy"]}
        toggleVisibility={() => toggleVisibility("Philosophy")}
      />
      <Section
        title="Customer Stories"
        description="We love hearing from our customers! Here are some of their stories about how Harsh Foods has brought joy to their dining experiences."
        isVisible={visibility["Stories"]}
        toggleVisibility={() => toggleVisibility("Stories")}
      />
      <Section
        title="Contact Us"
        description="Have questions, comments, or feedback? We'd love to hear from you! Contact us at +918427191391 or visit our Contact page for more details."
        isVisible={visibility["Contact"]}
        toggleVisibility={() => toggleVisibility("Contact")}
      />

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <Review
          name="Harsh Soni"
          review="Harsh Foods offers the best meals in town. The ingredients are always fresh, and the flavors are amazing. Highly recommended!"
        />
        <Review
          name="Hamza "
          review="I love the variety of dishes available at Harsh Foods. The chefs are truly talented, and the customer service is excellent."
        />
        <Review
          name="Rahul Sharma"
          review="A delightful dining experience every time! Harsh Foods never fails to impress with their quality and taste."
        />
      </div>
    </div>
  );
};

export default AboutPage;

