




import { Favorite, Share, ShareLocation } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper,  ProductFavButton,  ProductImage } from "../styles/products";
import { ProductMeta } from "./productMeta";



export default function DoubleProducts({ product,matches }) {
    return (

        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches={matches}>
                <ProductActionWrapper>
                    <Stack direction="column">
                       <ProductFavButton isfav={0}>
                        <Favorite/>
                       </ProductFavButton>
                       <ProductActionButton>
                        <ShareLocation/>
                       </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>

            </ProductMeta>

        </Product>



    )
}