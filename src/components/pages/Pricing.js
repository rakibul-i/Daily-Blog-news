import React from "react";
import "./Pricing.css";
import { Table } from "react-bootstrap";
import Header from "../shared/Header/Header";
import Footer from "../shared/footer/Footer";
import Helmet from "react-helmet";

const Pricing = () => {
  return (
    <section>
      {/* makeing seo */}
      <Helmet>
        <title>Pricing </title>
        <meta name="description" content="Pricing page" />
      </Helmet>
      {/* seo ends  */}
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-5 ">
        <div className="free-table">
          <h1 className="mb-4 text-center">Todays Avaliable Slots</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Package</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Weekly</td>
                <td>150 BDT</td>
                <td>
                  <button className="book-now-btn">Pay Now</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Half Month</td>
                <td>220 BDT</td>
                <td>
                  <button className="book-now-btn">Pay Now</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>1 Month</td>
                <td>220 BDT</td>
                <td>
                  <button className="book-now-btn">Pay Now</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>6 Month</td>
                <td>500 BDT</td>
                <td>
                  <button className="book-now-btn">Pay Now</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>1 Year</td>
                <td>800 BDT</td>
                <td>
                  <button className="book-now-btn">Pay Now</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
