import React, { useState, Fragment } from "react";
// import "../app.css";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin";
import Admin from "./Admin";

// import { collection, addDoc, Timestamp } from "firebase/firestore";

// or less ideally

const Crud = () => {
  const [title, settitle] = useState("");
  const [status, setstatus] = useState("");
  const [url, seturl] = useState("");
  const [value, setvalue] = useState("");
  const [loader, setLoader] = useState(false);

  // const handleChange = (event) => {
  //   setvalue(event.target.value);
  // };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    if (!validated) {
      e.preventDefault();
      setLoader(true);
      db.collection("resources")
        .add({
          title,
          status: value,
          url,
          time: new Date(),
        })

        .then(() => {
          setLoader(false);
          alert("Your data has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
      // console.dir(db.collection("resources"));
      settitle("");
      setstatus("");
      seturl("");
    }
    console.log(title);
  };

  const val = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Fragment>
      <div className="bestform">
        <Form
          autoComplete="false"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h1 className="textblack">منشئ الملفات &#128194;</h1>

          <Form.Group className="mb-3">
            <Form.Label>العنوان</Form.Label>
            <Form.Control
              type="text"
              required
              value={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="عنوان الملف / أسم الصفحة"
            />
            <Form.Text className="text-muted">
              ملاحظة : أسم قصير يسهل حفظه
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>الحالة</Form.Label>

            <Form.Select
              required
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            >
              <option value="">اختر الحالة</option>
              <option value="يتم تحديث الملف بشكل دوري">
                يتم تحديث الملف بشكل دوري
              </option>
              <option value="ملف ثابت">ملف ثابت</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>الرابط</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Google Drive link / Youtube link / File link "
              value={url}
              onChange={(e) => seturl(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            إرسال
          </Button>
        </Form>
      </div>

      <Admin />
    </Fragment>
  );
};

export default Crud;
