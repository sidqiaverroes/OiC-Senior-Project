import React, { useState } from "react";

export default function Seek({ handleSubmit, error }) {
  const [inputText, setInputText] = useState("");

  const handleClear = () => {
    setInputText("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 py-24">
      <div className="flex flex-col justify-center items-center h-96 gap-2">
        <h2 className=" text-2xl font-bold text-purple-900">
          Input The Information You Want to Seek The Truth
        </h2>
        <p>Fill in the input with text no more than 3000 characters</p>
        <form
          onSubmit={(e) => handleSubmit(e, inputText)}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="my-4 w-full h-full">
            <textarea
              placeholder="Paste your text here"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={6}
              name="input_text"
              className=" w-full h-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ></textarea>
          </div>

          {error === 1 && (
            <div className=" text-red-600 font-bold">
              Input can't be more than 3000 characters!
            </div>
          )}

          {error === 2 && (
            <div className=" text-red-600 font-bold">
              Please input valid text!
            </div>
          )}

          <div className="flex flex-row mt-6 gap-6">
            <button
              type="reset"
              onClick={handleClear}
              className=" items-center justify-center px-12 py-2 rounded-md shadow-sm text-base font-medium text-purple-600 border border-purple-600 hover:bg-purple-700 hover:text-white"
            >
              Clear All
            </button>
            <button
              type="Submit"
              className=" items-center justify-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              See Result
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
