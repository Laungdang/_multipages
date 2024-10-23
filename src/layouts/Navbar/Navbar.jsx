import { Link } from "react-router-dom";
import "./Navbar.css";

import { useState, useEffect, useRef } from "react";

const initPage = "home";

function Navbar({ products, carts, setToken}) {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  const homeRef = useRef();
  const calculatorRef = useRef();
  const componentsRef = useRef();
  const todoRef = useRef();
  const productRef = useRef();
  const cartRef = useRef();
 

  useEffect(() => {
    if (tab === "calculator") calculatorRef.current.click();
    else if (tab === "components") componentsRef.current.click();
    else if (tab === "todo") todoRef.current.click();
    else if (tab === "product") productRef.current.click();
    else if (tab === "cart") cartRef.current.click();
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>

      <Link to={"/calculator"}>
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>

      <Link to={"/components"}>
        <button
          className={
            "btn " +
            (tab === "components" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("components")}
          ref={componentsRef}
        >
          Components
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todo
        </button>
      </Link>

      <Link to={"/product"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("product")}
          ref={productRef}
        >
          Product ({products.length})
        </button>
      </Link>

      <Link to={"/cart"}>
        <button
          style={{ position: "relative" }}
          className={
            " btn " + (tab === "todo" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("cart")}
          ref={cartRef}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

     <button className="btn btn-outline-danger" style={{marginLeft: '1rem'}}
     onClick={(()=> {setToken('')})}>
      Logout
     </button>
    </div>
  );
}

export default Navbar;
