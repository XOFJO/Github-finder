import React from 'react';
import { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/GithubContext';
import AlertContext from '../../context/AlertContext';
import image from '../../images/robot5.jpg';
import background from '../../images/background.jpg';
import { useNavigate } from 'react-router-dom';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers, clear } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  useEffect(() => {
    const centerX = document.body.scrollWidth / 2;
    const centerY = document.body.scrollHeight / 2;
    window.scrollTo(centerX, centerY);
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter anything', 'Error');
    } else {
      searchUsers(text);
      setText('');
      navigate('/results');
    }
  }
  return (
    <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed">
      <div className="h-full">
        {/* <!--Main--> */}
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              A place to find your Github account
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Uncover your digital self by simply inputting your ID!
            </p>

            <form
              className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-blue-300 py-2 font-bold mb-2"
                  htmlFor="userName"
                >
                  User Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-3 text-white leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="userName"
                  type="text"
                  value={text}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="submit"
                >
                  SEARCH
                </button>
              </div>
            </form>
          </div>

          {/* <!--Right Col--> */}
          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              className="mx-auto scale-100 w-full md:w-4/6 transform -rotate-6 transition hover:scale-200 duration-700 ease-in-out hover:rotate-6"
              src={image}
              alt="alien"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
