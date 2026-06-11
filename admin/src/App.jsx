import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Create from './Create'
import Update from './Update'

function App() {

  return (
    <>
      <h1>Admin</h1>
      {/* make this send you to a form */}
      <Link to="/create">
        Create
      </Link>
      <br />
      <Link to="/update">
        Update
      </Link>
      {/* Make read and delete options */}
      {/* Maybe add table for read and delete buttons? */}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
    // <> //maybe use this as a example
    //   <section id="center">
    //     <div className="hero">
    //       <img src={heroImg} className="base" width="170" height="179" alt="" />
    //       <img src={reactLogo} className="framework" alt="React logo" />
    //       <img src={viteLogo} className="vite" alt="Vite logo" />
    //     </div>
    //     <div>
    //       <h1>Get started</h1>
    //       <p>
    //         Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
    //       </p>
    //     </div>
    //     <button
    //       type="button"
    //       className="counter"
    //       onClick={() => setCount((count) => count + 1)}
    //     >
    //       Count is {count}
    //     </button>
    //   </section>

    //   <div className="ticks"></div>

    //   <section id="next-steps">
    //     ...
    //   </section>

    //   <div className="ticks"></div>
    //   <section id="spacer"></section>
    // </>
  )
}

export default App