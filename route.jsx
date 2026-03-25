import { Route, Routes } from "react-router-dom";
import ProductManagement from "./src/pages/AdminPage/ProductManagement";
import UserManagement from "./src/pages/AdminPage/UserManagement";
import BaiTapAlbum from "./src/pages/BaiTapAlbum";
import HomePage from "./src/pages/HomePage";
import AdminTemplate from "./src/Templates/AdminTemplate";
import HomeTemplate from "./src/Templates/HomeTemplate";
import PageNotFound from "./src/pages/PageNotFound";
import GetAllProductPage from "./src/pages/Api/GetAllProductPage";

const routes = [
    {
        path: '',
        element: <HomeTemplate />,
        children: [
            {
                index: true,
                element: <GetAllProductPage />
            },
            {
                path: 'album',
                element: <BaiTapAlbum />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminTemplate />,
        children: [
            {
                path: 'users',
                element: <UserManagement />
            },
            {
                path: 'products',
                element: <ProductManagement />
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]
export default routes;

/**
 *  input: routes
 *  1. Duyệt routes: map()
 *  1.1 route: từng cái object bên trong routes
 *  1.2 Nếu route có children => loop tiếp children
 *      1.2.1 Lấy ra element của route => gán vào thẻ <Route />
 *      1.2.2 Duyệt nested => lấy ra element của nested
 *  1.3 Nếu ko có nested => return thẻ <Route />
 * output: mang cac the <Route>
 * **/
export const renderDynamicRoutes = () => {
    const newRoutes = routes.map((route, index) => {
        if (route.children) {
            return <Route path={route.path} element={route.element} key={route.path}>
                {
                    route.children.map((nestedRoute, index) => {
                        if (nestedRoute.index) {
                            return <Route index element={nestedRoute.element}></Route>
                        } else {
                            return <Route path={nestedRoute.path} element={nestedRoute.element}></Route>
                        }
                    })
                }
            </Route>
        } else {
            return <Route key={route.path} path={route.path} element={route.element}></Route>
        }
    })
    return newRoutes;
}

const renderNotUseMap = (arr) => {
    const newArr = [];
    for (let index in arr) {
        let item;
        item[index] = arr[index];
        newArr.push(item);
    }
    return newArr;
}