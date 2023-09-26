import React, { useState, useEffect } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";
import { productionConfig } from "./config";
import "./styles.css";
import {
  getBook,
  getBooks,
  getClosestColors,
  getColorsByCode,
  getHarmony,
  getBetaColor
} from "./fetchers";

import Highlight, { defaultProps } from "prism-react-renderer";
Amplify.configure(productionConfig);

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const us = await Auth.currentAuthenticatedUser();
      if (us) {
        setUser(us);
      }
    };
    getUser();
  }, []);
  const getData = async (dataType) => {
    switch (dataType) {
      case "BOOK":
        const bookData = await getBook();
        setData(bookData);
        break;

      case "BOOKS":
        const booksData = await getBooks();
        setData(booksData);
        break;
      case "COLOR_BY_CODE":
        const colorsByCode = await getColorsByCode();
        setData(colorsByCode);
        break;
      case "CLOSEST_COLORS":
        const closestColors = await getClosestColors();
        setData(closestColors);
        break;
      case "HARMONY":
        const harmony = await getHarmony();
        setData(harmony);
        break;
      case "BETACOLOR":
        const betaBookColor = await getBetaColor();
        setData(betaBookColor);
        break;
      default:
        setData("Operation not found");
    }
  };

  const exampleCode = JSON.stringify(data, null, " ");

  return (
    <div className="App">
      <AmplifySignOut />
      <div className=""></div>
      <header className="App-header">
        <p>Get Data form Amplify API</p>
        <div className="buttonContainer">
          {user?.attributes.given_name === "Beta " ? (
            <>
              <button className="button" onClick={() => getData("BOOKS")}>
                Get Beta Book
              </button>
              <button className="button" onClick={() => getData("BETACOLOR")}>
                Get Beta Color
              </button>
            </>
          ) : (
            <>
              <button className="button" onClick={() => getData("BOOK")}>
                Get Book
              </button>
              <button className="button" onClick={() => getData("BOOKS")}>
                Get Books
              </button>
              <button
                className="button"
                onClick={() => getData("COLOR_BY_CODE")}
              >
                Get Colors by Code
              </button>
              <button
                className="button"
                onClick={() => getData("CLOSEST_COLORS")}
              >
                Get Closest Colors
              </button>
              <button className="button" onClick={() => getData("HARMONY")}>
                Get Harmony
              </button>
              <button className="button" onClick={() => getData("BETABOOK")}>
                Get Beta Book
              </button>
            </>
          )}
        </div>
      </header>
      <Highlight {...defaultProps} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div className="line" key={i} {...getLineProps({ line, key: i })}>
                <span>{i + 1}</span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default withAuthenticator(App);
