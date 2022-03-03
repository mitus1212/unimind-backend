import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../../Elements/Title/Title";
import EthPhoto from "../../../assets/images/post_photo/Ethereum.jpg";
import Navigation from "../../Elements/noHomeNavigation/Navigation";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        setFeaturedBlog(res.data[0]);
        console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);
  // return (
  //     <div className='container mt-3'>
  //         <div className="nav-scroller py-1 mb-2">
  //             <nav className="nav d-flex justify-content-between">
  //             <Link className="p-2 text-muted" to='/category/wiki'>Wiki</Link>
  //                 <Link className="p-2 text-muted" to='/category/youtube'>Youtube</Link>
  //                 <Link className="p-2 text-muted" to='/category/article'>Article</Link>
  //                 <Link className="p-2 text-muted" to='/category/cooperation'>Cooperation</Link>
  //                 <Link className="p-2 text-muted" to='/category/twitter'>Twitter</Link>
  //             </nav>
  //         </div>

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <>
          <div className="blog__post">
            <div className="blog__content">
              <strong className="blog__cattegory">
                {capitalizeFirstLetter(blogPost.category)}
              </strong>
              <h3 className="blog__title">{blogPost.title}</h3>
              <div className="blog__date">
                {blogPost.month} {blogPost.day}
              </div>
              <p className="blog__excerpt">{blogPost.excerpt}</p>
              <Link to={`/news/${blogPost.slug}`} className="blog__link">
                Continue reading
              </Link>
            </div>
            <div className="blog__img">
              <img
                width="auto"
                height="auto "
                src={blogPost.thumbnail}
                alt="thumbnail"
              />
            </div>
          </div>
        </>
      );
    });

    for (let i = 0; i < list.length; i += 1) {
      result.push(
        <div key={i} className="blog__tile">
          {list[i]}
        </div>
      );
    }

    return result;
  };

  return (
    // <div className="container mt-3">
    //   <div className="nav-scroller py-1 mb-2">
    //     <nav className="nav d-flex justify-content-between">
    //       <Link className="p-2 text-muted" to="/category/world">
    //        World
    //      </Link>
    //      <Link className="p-2 text-muted" to="/category/youtube">
    //        Environment
    //      </Link>
    //      <Link className="p-2 text-muted" to="/category/twitter">
    //        Technology
    //      </Link>
    // <Link className="p-2 text-muted" to="/category/article">
    //   Design
    // </Link>
    // <Link className="p-2 text-muted" to="/category/cooperation">
    //   Culture
    // </Link>
    //     </nav>
    //   </div>

    /* <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
          <p className="lead my-3">{featuredBlog.excerpt}</p>
          <p className="lead mb-0">
            <Link
              to={`/blog/${featuredBlog.slug}`}
              className="text-white font-weight-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div> */
    <>
      <Navigation />
      <section className="blog__container">
        <Title>Aktualności</Title>
        <section className="blog__post__wrapper">
          <div className="blog__post__tile">
            <div className="blog__post__image">
              <img src={EthPhoto}></img>
            </div>
            <div className="blog__post__content">
              <div className="blog__post__category">Twitter</div>
              <div className="blog__post__title">
                Jak zmniejszyć prowizje na Ethereum?{" "}
                <div className="blog__post__row">
                  <span className="blog__post__date">25 JAN 2022,</span>
                  <span className="blog__post__author">~ Wikist</span>
                </div>
              </div>
              <div className="blog__post__text">
                Nam venenatis dapibus mauris. Vivamus venenatis imperdiet eros
                dapibus dignissim. Ut porta eros in commodo faucibus. Integer
                elementum diam ut justo.
              </div>
              <a className="blog__post__link" href="#">
                WIĘCEJ
              </a>
            </div>
          </div>
          <hr></hr>
          <div className="blog__post__tile">
            <div className="blog__post__image">
              <img src={EthPhoto}></img>
            </div>
            <div className="blog__post__content">
              <div className="blog__post__category">Article</div>
              <div className="blog__post__title">
                Jak zmniejszyć prowizje na Ethereum?
                <div className="blog__post__row">
                  <span className="blog__post__date">25 JAN 2022,</span>
                  <span className="blog__post__author">~ Wikist</span>
                </div>
              </div>
              <div className="blog__post__text">
                Nam venenatis dapibus mauris. Vivamus venenatis imperdiet eros
                dapibus dignissim. Ut porta eros in commodo faucibus. Integer
                elementum diam ut justo.
              </div>
              <a className="blog__post__link" href="#">
                WIĘCEJ
              </a>
            </div>
          </div>
          <hr></hr>
        </section>
      </section>
    </>
  );
};

export default Blog;
