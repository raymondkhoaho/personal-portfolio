import React from 'react';

export default function About() {

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I&#39;m Raymond .
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Previously, I have worked in the health and finance industry. Over the past decade, I have gained a great amount of soft and technical skills but have been feeling the need to be challenged with something new and exciting.

            I have been interested in all things computers since childhood and came to the simple realization that I should pursue a career in a field that I am genuinely interested in. Realizing this, I started researching on how to get into the field and stumbled upon LearningFuze, a 14-week rigorous coding bootcamp.

            LearningFuze has significantly reinforced my passion of becoming a software engineer and I am excited to be able to continue challenging myself throughout my career as a coder.

            If you’d like to keep up with my coding journey, feel free to connect with me on here and check out my GitHub below!

            GitHub: https://github.com/raymondkhoaho
            E-mail: raymondkhoaho@gmail.com
          </p>
          <div className="flex justify-center">
            <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
              className="object-cover object-center rounded"
              alt="code"
              src="./coding.svg"
            />
        </div>
      </div>
    </section>
  );

}
