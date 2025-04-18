import { useState } from "react";
import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const CartButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
  background: #ff9f00;
  margin-right: 10px;
`;

const BuyButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
  background: #fb641b;
`;

const ActionItem = ({ product, userEmail }) => {
  const navigate = useNavigate();
  const { id, price, title } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: price?.cost || 500, // Defaulting to 500 if no cost
      email: userEmail || "example@example.com",
    });
    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} alt={title} />
      <br />
      <CartButton onClick={addItemToCart} variant="contained">
        <Cart /> Add to Cart
      </CartButton>
      <BuyButton onClick={buyNow} variant="contained">
        <Flash /> Buy Now
      </BuyButton>
    </LeftContainer>
  );
};

export default ActionItem;
