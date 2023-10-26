import React from "react";

import "./blog.scss";

import { blog1, blog2, blog3, blog4, blog5 } from "./import";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      img: blog1,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      blogBtn: "Read Full Article",
    },
    {
      id: 2,
      img: blog2,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      blogBtn: "Read Full Article",
    },
    {
      id: 3,
      img: blog3,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      blogBtn: "Read Full Article",
    },
    {
      id: 4,
      img: blog4,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      blogBtn: "Read Full Article",
    },
    {
      id: 5,
      img: blog5,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      blogBtn: "Read Full Article",
    },
  ];
  return (
    <>
      <section className="blog section-padding">
        <h1 className="blog-title text-gradient section-main-title">
          A lot is happening, <br /> We are blogging about it.
        </h1>
        <div className="blog-container">
          {blogData.map(({ id, img, date, title, blogBtn }) => {
            return (
              <div className="blog-card" key={id}>
                <div className="blog-card-img">
                  <img src={img} alt="" />
                </div>
                <div className="blog-card-info">
                  <span>{date}</span>
                  <h3>{title}</h3>
                  <a href="">{blogBtn}</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
