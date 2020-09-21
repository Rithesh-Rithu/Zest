
import Blog from 'views/blog/Dashboard/Blog.jsx';

import Blogs from 'views/blog/Blog/Blogs.jsx';
import SingleBlog from 'views/blog/Blog/SingleBlog.jsx';
import AddBlog from 'views/blog/Blog/AddBlog.jsx';
import EditBlog from 'views/blog/Blog/EditBlog.jsx';

// import BlogSearch from 'views/blog/Blog/Search.jsx';

import Pages from 'views/blog/Page/Pages.jsx';
// import SinglePage from 'views/blog/Page/SinglePage.jsx';
import AddPage from 'views/blog/Page/AddPage.jsx';
// import EditPage from 'views/blog/Page/EditPage.jsx';

import User from 'views/blog/User/User.jsx';
import AddUser from 'views/blog/User/AddUser.jsx';
import EditUser from 'views/blog/User/EditUser.jsx';
import UserProfile from 'views/blog/User/UserProfile.jsx';

import Media from 'views/blog/Media/Media.jsx';
import UploadMedia from 'views/blog/Media/UploadMedia.jsx';
import EditMedia from 'views/blog/Media/EditMedia.jsx';

// import BlogMailinbox from 'views/blog/Mail/Inbox.jsx';
// import BlogMailcompose from 'views/blog/Mail/Compose.jsx';
// import BlogMailview from 'views/blog/Mail/View.jsx';

import Tag from 'views/blog/Tag/Tag.jsx';
import AddTag from 'views/blog/Tag/AddTag.jsx';
import EditTag from 'views/blog/Tag/EditTag.jsx'; 

// import Category from 'views/blog/Category/Category.jsx';
// import AddCategory from 'views/blog/Category/AddCategory.jsx';
// import EditCategory from 'views/blog/Category/EditCategory.jsx';

// import BlogReportsSite from 'views/blog/Reports/ReportsSite.jsx'; 
// import BlogReportsVisitors from 'views/blog/Reports/ReportsVisitors.jsx'; 
// import BlogReportsSocial from 'views/blog/Reports/ReportsSocial.jsx'; 

import Podcasts from 'views/blog/Reports/Podcasts.jsx';
import AddPodcasts from 'views/blog/Reports/AddPodcasts.jsx';
import EditPodcasts from 'views/blog/Reports/EditPodcasts.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [  

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/blog/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Blog },
    
    { path: BASEDIR+"/blog/menu", name: "Menu", icon: "menu", badge: "", component: Blog },
    { 
        path: "#", name: "Users", icon: "user", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/user/users", name: "Users"},
                { path: BASEDIR+"/user/add-user", name: "Add User"},
                { path: BASEDIR+"/user/edit-user", name: "Edit User"},
                { path: BASEDIR+"/user/user-profile", name: "User Profile"},
            ]
    },
        { path: BASEDIR+"/user/users", component: User, type: "child"},
        { path: BASEDIR+"/user/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/user/edit-user", component: EditUser, type: "child"},
        { path: BASEDIR+"/user/user-profile", component: UserProfile, type: "child"},


                        { 
                            path: "#", name: "Articles", icon: "note", type: "dropdown", parentid: "blogs",
                            child: [
                        
                            { path: BASEDIR+"/article/articles", name: "Articles"},
                            { path: BASEDIR+"/article/add-article", name: "Add Article"},
                            { path: BASEDIR+"/article/edit-article", name: "Edit Article"},
                            { path: BASEDIR+"/article/article-view", name: "Review"},
                            ]
                        },
                            { path: BASEDIR+"/article/articles", component: Blogs, type: "child"},
                            { path: BASEDIR+"/article/add-article", component: AddBlog, type: "child"},
                            { path: BASEDIR+"/article/edit-article", component: EditBlog, type: "child"},
                            { path: BASEDIR+"/article/article-view", component: SingleBlog, type: "child"},

    // { path: BASEDIR+"/blog/search", name: "Search", icon: "magnifier", component: BlogSearch },

    { 
        path: "#", name: "Videos", icon: "picture", type: "dropdown", parentid: "blogmedia",
            child: [
                { path: BASEDIR+"/videos/media", name: "Videos"},
                { path: BASEDIR+"/videos/upload-media", name: "Upload Video"},
                { path: BASEDIR+"/videos/edit-media", name: "Edit Video"},
            ]
    },
        { path: BASEDIR+"/videos/media", component: Media, type: "child"},
        { path: BASEDIR+"/videos/upload-media", component: UploadMedia, type: "child"},
        { path: BASEDIR+"/videos/edit-media", component: EditMedia, type: "child"},



                        { 
                            path: "#", name: "Activities", icon: "notebook", type: "dropdown", parentid: "pages",
                            child: [
                        
                            { path: BASEDIR+"/activities/activities", name: "Activities"},
                            { path: BASEDIR+"/activities/edit-activity", name: "Edit Activity"},
                           
                            ]
                        },
                            { path: BASEDIR+"/activities/activities", component: Pages, type: "child"},
                            { path: BASEDIR+"/activities/edit-activity", component: AddPage, type: "child"},
                            


    

    

    { 
        path: "#", name: "Podcasts", icon: "pie-chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/podcasts/podcasts", name: "Podcasts"}, 
                    { path: BASEDIR+"/podcasts/add-podcast", name: "Add Podcasts"}, 
                    { path: BASEDIR+"/podcasts/edit-podcast", name: "Edit Podcasts"},
        ]
    },  
    { path: BASEDIR+"/podcasts/podcasts", component: Podcasts, type: "child"},
    { path: BASEDIR+"/podcasts/add-podcast", component: AddPodcasts, type: "child"},
    { path: BASEDIR+"/podcasts/edit-podcast", component: EditPodcasts, type: "child"},


    { 
        path: "#", name: "Experts", icon: "user", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/blog/users", name: "Users"},
                { path: BASEDIR+"/blog/add-user", name: "Add User"},
                { path: BASEDIR+"/blog/edit-user", name: "Edit User"},
                { path: BASEDIR+"/blog/user-profile", name: "User Profile"},
            ]
    },
        { path: BASEDIR+"/blog/users", component: User, type: "child"},
        { path: BASEDIR+"/blog/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/blog/edit-user", component: EditUser, type: "child"},
        { path: BASEDIR+"/blog/user-profile", component: UserProfile, type: "child"},



    { 
        path: "#", name: "Settings", icon: "tag", type: "dropdown", parentid: "tags",
            child: [
                { path: BASEDIR+"/blog/tag", name: "Tags"},
                { path: BASEDIR+"/blog/add-tag", name: "Add Tag"},
                { path: BASEDIR+"/blog/edit-tag", name: "Edit Tag"},
            ]
    },
        { path: BASEDIR+"/blog/tag", component: Tag, type: "child"},
        { path: BASEDIR+"/blog/add-tag", component: AddTag, type: "child"},
        { path: BASEDIR+"/blog/edit-tag", component: EditTag, type: "child"},



        
        { path: BASEDIR+"/blog/dashboard", component: Blog, type: "child"},

    //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
