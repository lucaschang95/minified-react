import React, { useEffect, useState, useCallback, useContext } from 'react';
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    Outlet,
    Link,
    Navigate,
    matchPath,
    useLocation,
    UNSAFE_RouteContext as RouteContext,
} from 'react-router-dom';

// export default function App() {
//     return (
//         <BrowserRouter>
//             <div>
//                 <h1>Basic Example</h1>
//                 <Routes>
//                     <Route path="/" element={<Layout />}>
//                         <Route index element={<Home />} />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/dashboard" element={<Dashboard />} />
//                         <Route path="/navigate" element={<Navi />} />
//                         <Route path="/shop/:id" element={<Shop />} />
//                         <Route path="*" element={<NoMatch />} />
//                     </Route>
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     );
// }

export default function App() {
    return (
        <div>
            app
            <ChildComp>
                {slotComp}
            </ChildComp>
        </div>
    );
}

function ChildComp(props) {
    return (
        <div>
            childcomp
            {props.children({
                name: 'test',
            })}
        </div>
    );
}

function slotComp(props) {
    return <div>slot{props.name}</div>;
}

function Shop() {
    const location = useLocation();
    const context = useContext(RouteContext);
    return <div>shop</div>;
}

function Navi() {
    return <Navigate to="/about" replace={true} />;
}

function Layout() {
    const context = useContext(RouteContext);
    console.log('context :>> ', context);
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/navigate">navigate</Link>
                    </li>
                    <li>
                        <Link to="/shop/a">shop-a</Link>
                    </li>
                    <li>
                        <Link to="/shop/b">shop-b</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <Outlet />
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
