import {createBrowserRouter} from "react-router";
export default createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                loader: async () => {

                },
                lazy: () => import('../pages/Home'),

            },
            {
              path: "/games/:id",
                loader: async () => {

                },
              lazy: () => import('../pages/Game'),

            },
            {
                path: "*",
                lazy: () => import('../pages/Error')
            }

        ]
    }
])