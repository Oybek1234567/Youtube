import Favourite from "../pages/favourite";
import History from "../pages/history";
import HomePage from "../pages/home";
import LibraryPage from "../pages/library";
import LikePage from "../pages/like";
import MusicPage from "../pages/music";
import Show from "../pages/show";
import SubsPage from "../pages/subs";
import TrendPage from "../pages/trending";
import WatchPage from "../pages/watch";

export const Routes = [
    {
        id: 1,
        path: "/",
        element: <HomePage /> 
    },
    {
        id: 2,
        path: "/trend",
        element: <TrendPage /> 
    },
    {
        id: 3,
        path: "/subs",
        element: <SubsPage /> 
    },
    {
        id: 4,
        path: "/library",
        element: <LibraryPage /> 
    },
    {
        id: 5,
        path: "/history",
        element: <History /> 
    },
   
    {
        id: 6,
        path: "/watch",
        element: <WatchPage /> 
    },
    {
        id: 7,
        path: "/favourite",
        element: <Favourite /> 
    },
    {
        id: 8,
        path: "/like",
        element: <LikePage /> 
    },
    {
        id: 9,
        path: "/music",
        element: <MusicPage /> 
    },
    {
        id: 10,
        path: "/show",
        element: <Show /> 
    },
]