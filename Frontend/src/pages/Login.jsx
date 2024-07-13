import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mess, setmess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(email === "" || pass === "") {
      setmess("Please Fill all Inputs")
      return;
    }

    const data = {
      email: email,
      pass: pass,
    };

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (response.ok) {
        console.log("user has been Login");
        navigate("/");
      } else {
        setmess("Invalide input");
        console.error("Failed to user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    
      <div className="container-fluid login-form-container">
        <div className="login-left-container">
          <img className="login-avatar-img" src="https://www.svgrepo.com/show/103190/avatar.svg" alt="" />
          <img
            className="login-avatar-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADZCAMAAADyk+d8AAABgFBMVEX6+vplyf/9mEEmLjO1gUMgJyv09PTjiTpLLRP//Pr////UgDf/m0KygENdx/8bJStlPRpNUVXIycoSHiSkpaeGiYtCKBGhYClgOhlWzP9iy///lz2zfj3/lS36l0GNv+D5mkrdjUIqNTgdKTHjllKxeTLLiEJZNhdmXEznkUGd2v2q3/170P7j8vvZ7/vsjj0iIyTXvaHBhUPM6vyxhUp0Rh6Q1v5o0f/LqILFnG7SikKgmImqjGV8SiCuaSzC5/zynFCNVSTloGQ7Y3kwR1QNJzO4uLgAFiDi6e2ot8Dw6ePj1MTcxq7y7Oa+kl7PsZCEqrh0tdKRpKStiFacmo6llH2qil+6eyp2v+WAsse/dDKausrcpHi/rp/homnIq5QoGArVqIFkuORPkLJHfJlWo80zSFN1Vz9OPjBccnkwKSNjnrxBWmcaGBZei6NWZWs8NzOIXTiiaTqPXzdnSjNARUaOj5HBwcJuhJC+1OEnPkt9mKYMExh5jZhvcXGgsLS8QA1MAAAPwklEQVR4nO2d/1/TVhfHm4a0axpopT58SUsYYO1QMLUDgW0wURAKKrrNjdU5HYgTBXFu7uGb8q8/96ZNmyb3W5Kbpn09/fiDCrfNffece865X5JGIl111VVXXXXVVVdddRW85KpYmrWiO8FIlh9sbGzevwm0ufEghmcB7Tbv3998EOlIWDny4P78w1w+n88B5fM9D+dvQhYHjBzZuGm0y+cWNjsPVY5szufyuR6rAG9uYWszZrWcLMdAQ7NdLt9pqHLk/owN00p7c6M+eje3mht2GKq8OZNHYTZooS/Pzy88zDs+j9xG2L1nlxxbIHHWcXM5lNVz82H3n1nAoEi/ZVXHGFW+jzQVu/I3O2OkyvcZPJds0/nOIL3pz6BQD8NmYJF/iwLNPAgbgy55079FO4M08pADae5h+5PKNzn4bk9uof0j0gYP0E6IvfICj1HaCfn0AReT9vS0fY3EJcN0RN0rb3Fx3g4oe+V5HqT5rbA5qJIfzHAAzS2EzUGVvNnDw6S5rbYPvFucAm/bey+fVGqgtnc65RKMasq18ZoZn3q3rpn2zTMb9r72+iJt38LXXu/2lq76RN0MGwktebPZd3tLWtQVqqNtu87bbCbtLUWBvmFG7S0527ZpRdg8hYEWhZosMbH29l6NaiUHaVuOVLlpNdAEBRor9VJhe0uT8FNxtMuHTYVQwrZ2VAeNRrXJqz0k2N4qJ5BjWLfhPlTixqjVeXsno00CsMCyCFrws9KYbn4smt3VwSQ1ETZakxLT19VHFtLesahDmj52tVSCbHX19JSuTn7Z1MjxSdy60U6oia+n+tRvG87b+40TtEai6ZNjpiYnNUcD3Ub6y2P1etuYNRG71icIwncN0hIOlEE21PwjtW+qTcyauCFA0B2LSXUfpMCBrWM1f1kVhL7r7YCauA45BXX7F9IgdYVqDUu5J4BU6JuKhc2amJ4yQAVLQPLju1VZUHPfGW/fJ3wdLmrNcyHpDyapPcF4smqD9Mfq+wMPDhX0e8GU+lNtnIKqzr/0hlFnzCv0XQvRg6/3NUif5LiZNGotluqkYLBOh4V6rQHaSDIlZ470oEkEaXiot6ygao0UXzS4k9N7jbgUSmadsoLWbeovlzZUd9+Zpqu0HjURs4Hu/Jzj6LwN963HXtOsLUZ1gAo7P+a4RV5DZpb5WQ0X1Q4qCFWb8om8UDX3zT2xX6i1DnzLAVqLSL1f0hnYNIYlVVsYgZ2gJimvYVqf0+R/Uu2Xal2ySVxzggqCUTnwG6bmnBzM2hyXAqitAf0eBVqdiPPKplDV2jf/2Ekq9N1qCegNFGitwucXkMyV4l8QoLAGDt5/E9OoK5uzNl51A1Q1o84gSYW+74NHdeaXKum2QWoPSEpDaB58Ax0TkGqoQUcldDQyUI2EqjVT6MnK4PJsenZxeSmpI1mTleXF2VmjQTza3AIO1PyvGFJBDRj0axxoNSRZk4yiVZbTQ3UVZhGerSwXGi3Si0txKyusHfI40KCHKmaQGqRgoFqSDOCchRSFIWCwxdl0oZCOI0kLwOJGAwN20GJ5EJJy3w1jLxjoUE0gSoa6dqykir4Iez47WInruqbperwSR3mvnkzGwe9Bg+TgYnoI/EnWm4GQhHdeqOCyKjqT1vUkV0+nSnwWcC4ntXqcwUekxj/iS4C0sGT+RHdMZGxGDS6rxkjXhe5rkipxaM8kjg4rRV8GqBXzZSVUgWRFDWq9kOi7ELWnx/ReEImWNbecBmulkC6YDhz/lggKFAsGFF0c1TmHRxfMcaoXCsseMGuodaN++fypQDZqMPE3Qbyoun1nJDtWSyRKsuIR1HhtPVVlR7SnZNQg5qrkcKSO3s5au+vFc1GvzY7cI6H2TQVhVNIV1e0mUJ4aKRNR+QelxHWiSX8LCjSa1bZJqPyNSsww6ii2o4qu+5zfUPyXt1EpJn2GM6m2BMq8ZXRx3/g0lCgIQrg22TvEoMTbqDHi1YbvYEhBXZtOg8KHtLqkRGEhuLhcwSVghei+nI1KNqkwjFkRVJIQFKAO4o2qJGFxn4ZzgQq61cgo2ag8QSOxKdK18KSDQwZpehYPugQ4C4aGCstIVAop15xKKe19kMKSKD1YSWpgsjOYLiBtTyPlWegnyCbFk1Zo3qsPpZd0o1hQFEUfLKAGNIVU6OM3e0vcIINiSaPaIjTq0BBiEl77KGat01YFmZCopPxOtuAXj2ikcBpWgPM3zO+jOsOMh0YqTPGb0lBMiicFSiaTnuZvLki5JRrCMhkDKXb9kyPpLV6klBk4mdS/qKSCyism0UBDJ+W0TEh3XkAa2FSGjZSP+1IjLyD9PUhS8rStKi7RN0G9DGEuw0GUuUzVqDyiL2WhrEr6NEjS5wykPIoHyjSmJty0rVlaVGsWy4vow1TgNEul5hjDqCMMfdaTNuGKxCbQLQZQPjsXLCYVhOcMqJqdlGHdZeTKFAspj4HKMEyh1HJ2hOrBukuTZrMjz1Umk3IYqLSpaQN1+9kdat2nuwO9PU/ca7PK/0BlyKYmqgrsSuu8Fmd33exvKptBofr8gkYilEl4E+uvDBEY7qXCPVV6S5b00iD1HZLIO4k20m2uaZW80Gsn9V36TrM6r4HK7SydQUrefbKR+g1JDOW9Rdh1X09iqXcbpH6LfLYKyZT6nCNp9oqLEOE/+LKHXoOUZ/2bfY4/t4JQn99xylILWsRxc5Gp3rWQ+p24ufIgsvsqCBFM6s55facZyjaFg5TgvtrSoFP48sFVNhX8b1oQDpWhUa9gUZXFAYde4NPSCHMhWCP1mVBdk97DzmmUwYEvHMK6b/Z3l1f2TeouIAkC/sCDknSQDqA31wyTuikbDFKfpYNrUvUZ1qhawUGK3cbI3nZ5Xb+kLItINlJ87atUbEYdSONN6qbmrZL6O4XlnpRkVBCTmlGxkTd72y2ob1JXZW8NFR9+tbQFdeAL/Bacy6ohLFLC6pm2PFBjHRiYRR74rZp0y1UhGBapoP5BKJSSiwWYSL+YxR5Vgb7rZhbDidT9OIXLLITq17gLoeK4u6CZ1G2GCYtUUEeJdT653gWD9JkH0NbnU0PDFywL3TiL/uEFNCRSYRifaqigdzxd0T+pt8t6R81eIR/TxpP6rXu9XdYzavYO+xKvjdTnfoXL+alFhFopCFD/h+pueSUFE7is26WWkd89g/pec6CfWyGgPnW3qpRVnnkH9b1d4W4V1I469ZsLs2avuFxlsMnvKijrVhsaVb1gPdWSzW4xbZRi5Xu910vha2Wdek7fVoU3i9wZ9eG5Ao+bhDyWDg0Nb9Pvu8jefjrsi5PL4SufPQBmFcYoG1Oa/qv7WZqd1P/2v4/ga2osHsfvl2oa+K2XyYuN1Pf+qa/gKxg75TuANA5hHbSapld/9cjF7jdG/nf/fYUkVdjZvXt6NW5KhzcY16Tr9R/Hv1p5uSf4geVxctB7SIKYB2JRGm+Q4vRVqlhcebnjsbgXOB0y81j5qsLeXYApiiIL6QRoB2B3vRqWx60k7nZQG5y7rw4hJiS9EtVJmLqmGKSiKBXFlzveUDkcBvVSJalzu6fFGqdBGo3qOFgYlU1Sw7AvPfgwnwO+MdekczsrRbEhg9RImzbc+lkdCylgFXdduzCfQ9u024LsUtXdhj2tpLXEAqKupjefA20iBax3XZuVy0F8lxlVFQ6sBrWTImUjFYvje3OuQDndxefuSNKOHdQDKWDdc2NVXndBkW/6t4Ou2EE9kbpD5XW7oiv3dVgUkFIfhKX86SAVRRfphtctqC4W8tWXTlDxPfXUp/KXk1Q6YAbldwsfc/RVd5ycwKZ0UpRND3dZoxK/2zIZiwd1bupAcvZYFPH7pKZeI0jF8cdzbOe1Od5qy7KSr87t7b9Bgk5g7v+2aBz1OrF46S1LYuV5Tzy99lXVvYNiEQkqri7RSLVV5AvF1OH4Lp2V6y3xtJuK53b2AScaVJz4h0KqLGFIJUk6fLVHqQ35PiyfvMCtCu/GASeOVJygHXBGBaQaqVQs3iXnG463iUcoKw/q3qVDSSKQ0txXx7xOrL5rcfwdwYW5PyOJkGjevZFMYWz6mkiqfMA4r2i+bfEAb1a+JiUYVRWODhtdwhmVGH319wTnrb6r9B6Hyu3O6YbQRp17/F6ydApDSjQq3aTw3y/eoesI3ibFlYRzb2splGbUv7CoyjcYi9re83AfZdVAnmSGCL9zu2/Q3XKifsA9KCeO8127nxSRhXAAT1dMOKepc7uH2H7ZhSmU2EGRqMF88YyjUGoCpaKufkActlIqIjMoCpXj0zma1HwVdfcFtW9NqH/ZDwoq2ocJF6AQtXmsBvUQ1OYpjfr2BVPvLKji33rDroqiVV7joi7urYpNYSm4B4MmLM9jVt++wXYQ133A+ueSXn2ioFb5+/XqhEtQO2pwz2VuzN7UHRQo1azixOrqxPt//nw9Dv7GcpI+sMN3ddQgH+Br8d9LOBoKKqSdIEBS3+GNWS0F/Kj4WlJFrhfZe5oi4eBeW3s5ocXHuu8GSjo9hR+kNtjxo5RLVinz8VKK5hHmUA3s4b011Sr9j+TOGKwf++99/phh50yJR5f7/81Q31l8A5eCg3/2P1z8nTsm+K6piUsb/f3//ZcZVDq619+/fpnho5EuwYe8BswJdUvAxF07qRyLxe5lKL5o9l7KfAbNIyykYhHMa1rxdSSxuSOWzhukkf6UgUF8QfXXqf9EWEnFjzst+Ua+xPSaS1ImuSE9L7fmm24TJ2vhkq6dteorfeUyQ3+CIz0/bhEnRL2gdygw0sx+QFM1NOoP1B4FRZo6iLX066jlT7SxGhBp6lJrQRmsGgxppsUWNVDLZKsGQgrGaAjfpC6Xz1tNmmlh1G1CPVkllBABkLYujzpQ108Jqwu8SaW1FlVGaNQjbM94k0qnIYIC1NgZbkLJmfR8fz1MUMhaXkGjciWVVs8iIYNCDz5A9o4naSpczzUlR5AezJE0E7rnmpJPXjk7yI00NXERvueakiOPVu1InEilteN2MWhV8vqxbSWCD+n5yklbcULJJwfnVlYepJnVM7ntQKELl1csock/aWb1U3s5bkNy7OJVndUvaea0bTmh5PXyQY3VF6lkcLYxaATatXxgTHFck34GpPLnVJXzrJ3taUqOnByfZiTJJakoXY7F7q0BzImDcidwQsnydPlg7aNLUjEjpc5T59CcHcJpSAYjdtolqZQ5X/10IncUpyE5Mn1junyeYWKFlPsXnYhZ1/rF8ekawMVuQkmpDKA8+nQSi3QwZgS6sRxbL599OlpZXctkMqmUlDIF/ru2enpwfFZeX+9wyrqgU66vr19cnH06Pt7f//z58/7x8aezRxf96+uxTvZYjGSEwu5TV1111VVXXXXVVVf/L/of9Eivxdo9llYAAAAASUVORK5CYII="
            alt=""
          />
        </div>

        <div className="login-right-container">
          <form onSubmit={handleSubmit} className="login-form-inputs-box">
          {mess === "" ? (
              ""
            ) : (
              <div className="alert alert-danger alert" role="alert">
                {mess}!
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setmess("")}></button>
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="col">
              <button className="btn btn-primary " type="submit">
                Login
              </button>
            {/* </div>
            <div className="col-23"> */}
              <button className="btn btn-primary m-3" onClick={() => (navigate('/signUp'))}>
                Register
              </button>
            </div>
            <div className="col-23">
            <button
          className="btn btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        </div>
          </form>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <img
  //       src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user"
  //       alt=""
  //       id="login-bg-img"
  //     />
  //     <div className="container-fluid "></div>
  //     <div className="login-container" data-aos="fade-up">
  //       <button
  //         className="btn btn btn-outline-primary col-1 m-3 home-btn"
  //         onClick={() => navigate("/")}
  //       >
  //         Home
  //       </button>
  //       <form className="login-form " onSubmit={handleSubmit}>
  //         <h1 id="signup-mess"> {mess} </h1>
  //         <h2>Login</h2>
  //         <div className="form-group">
  //           <label htmlFor="email">Email</label>
  //           <input
  //             type="text"
  //             id="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //             placeholder="Email"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="password">Password</label>
  //           <input
  //             type="text"
  //             id="password"
  //             value={pass}
  //             onChange={(e) => setPass(e.target.value)}
  //             required
  //             placeholder="Password"
  //           />
  //         </div>

  //         <button type="submit" className="add-button">
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   </>
  // );
}

export default Login;
