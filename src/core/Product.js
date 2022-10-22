import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import CardInfo from "./CardInfo";
import { Typography ,Grid  ,useTheme,useMediaQuery} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Colors from "./Colors";

const useStyles = makeStyles(theme => ({
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "2em",
        paddingRight: "2em"
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
      }
    },
  }));

const Product = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <>
      <Layout>
        <div align={matchesMD?"center" :null} className={matchesMD?"col mt-3  " :"row mt-3"}>
          <div className={matchesMD?"col-10 " :"col-8"}>
            {product && product.description && (
              <CardInfo product={product} showViewProductButton={false} />
            )}
          </div>

          <div className={matchesMD?"col-10 " :"col-4"}>
            <h4 className="my-2  text-center h4 border rounded border-danger p-3" style={{color:Colors.danger}}>
              Related products
            </h4>
            {relatedProduct.map((p, i) => (
              <div className="mb-3" key={i}>
                <CardInfo product={p} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    
    </>
  );
};

export default Product;
