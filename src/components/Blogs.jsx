import React from "react";

const Blogs = () => {
  return (
    <div className="my-container">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Programming</span>
            </span>{" "}
            Hero- Question Answers
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                When should you use context API?
              </p>
              <p className="text-gray-700">
                Context API is a fairly new concept in the world of React. Its
                main purpose is to share data between components without using
                props or actions. It is designed to share data that can be
                considered global for a tree of React components, such as theme,
                or preferred language.
                <br />
                <br /> Context can significantly reduce the complexity of state
                management in your application. Many say exploration is part of
                our destiny, but it’s actually our duty to future generations.{" "}
                <br />
                Context API when you have global data that needs to be accessed
                by multiple components at different levels in the component
                tree, when you want to avoid prop drilling, and when you want to
                keep your code more readable and maintainable.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">What is a custom hook?</p>
              <p className="text-gray-700">
                React Hooks unlock a whole new way of writing functional
                components, allowing us to add features available for class
                components, like stateful logic.
                <br />
                <br />
                Custom hooks are useful when you find yourself duplicating the
                same logic across multiple components, or when you have complex
                logic that needs to be reused across multiple components. By
                encapsulating this logic into a custom hook, you can make your
                code more modular and easier to maintain.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">What is useRef?</p>
              <p className="text-gray-700">
                The useRef hook returns a mutable object which doesn’t re-render
                the component when it’s changed. Think it like useState, but
                unlike useState, doesn’t trigger re-render of the component.
                <br />
                <br />
                The object that useRef returns have a current property that can
                hold any modifiable value. There are a couple of specific uses
                cases for useRef and refs that I'd like to call out. Modifying a
                child DOM node outside of the typical React data flow. Treating
                the mutable object returned by useRef similar to an instance
                property.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">What is useMemo?</p>
              <p className="text-gray-700">
                useMemo is a React Hook that lets you cache the result of a
                calculation between re-renders.
                <br />
                <br />
                The useMemo Hook can be used to keep expensive, resource
                intensive functions from needlessly running. It is very useful
                in optimizing the performance of a React component by
                eliminating repeating heavy computations. useMemo is a react
                hook to memoize a function within a functional component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
