import React, { ReactElement } from "react";

type ElementProps = {
  title: string;
  description: string;
  thumbnail: ReactElement;
  link?: string;
};

const Element: React.FC<ElementProps> = ({
  title,
  description,
  thumbnail,
  link,
}) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col text-center items-center">
      <div className="max-w-80 max-h-80 items-center justify-center mb-5">
        {thumbnail}
      </div>
      <div className="flex-grow">
        <h2 className="text-lg font-medium mb-3">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
        <>
          {link && (
            <a
              href={link}
              className="link mt-3 inline-flex items-center"
              target={"_blank"}
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          )}
        </>
      </div>
    </div>
  );
};

export default Element;
