import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // const dispatch = useDispatch();
  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const images = [
    "https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/859199/pexels-photo-859199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "any title",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "some text format for title desc",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "any title",
      isNew: true,
      oldPrice: 20,
      price: 10,
      desc: "some text format for title desc",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "any title",
      isNew: false,
      oldPrice: 16,
      price: 11,
      desc: "some text format for title desc",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/247298/pexels-photo-247298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "any title",
      isNew: false,
      oldPrice: 21,
      price: 15,
      desc: "some text format for title desc",
    },
  ];
  return (
    <div className="product">
      {
        // loading ? (
        //   "loading"
        // ) :
        <>
          <div className="left">
            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
            <div className="mainImg">
              <img
                src={
                  // process.env.REACT_APP_UPLOAD_URL +
                  images[selectedImg]
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.title}</h1>
            <span className="price">${data?.price}</span>
            <p>{data?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={
                () => {}
                // dispatch(
                //   addToCart({
                //     id: data.id,
                //     title: data.attributes.title,
                //     desc: data.attributes.desc,
                //     price: data.attributes.price,
                //     img: data.attributes.img.data.attributes.url,
                //     quantity,
                //   })
                // )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Product;
