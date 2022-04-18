import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./View.css";
import "bootstrap/dist/css/bootstrap.min.css";

const View = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  // console.log(posts);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("resources")
      .orderBy("time", "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once
  // , posts

  if (loading) {
    return (
      <div className="app_loading">
        <div>
          <div className="aw">أكاديمية أوتاد</div>
          <div className="aw">AWTAD ACADEMY</div>
          <div>
            <div id="circles"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <p className="text-center">ملفات - الصف الأول ثانوي</p>

      {posts.length > 0 ? (
        posts.map(({ title, key, url, status }, index) => (
          <div key={key} className="col-sm-6">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <p className="card-text">{status}</p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                  className="btn btn-primary"
                >
                  هنا
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>لا يوجد ملفات حاليًا</h1>
      )}
    </div>
  );
};

export default View;
