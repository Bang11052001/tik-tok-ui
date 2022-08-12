import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MainLayout } from '~/layouts';
import { publicRoute } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        var Layout = MainLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        var Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
