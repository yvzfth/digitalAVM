import React from 'react';
import CategoryCard from './CategoryCard';
import { Grid } from '@nextui-org/react';

function ProductList() {
  return (
    <div className=''>
      <Grid.Container gap={2} justify='flex-start' className='mx-auto'>
        <Grid xs={12} sm={4}>
          <CategoryCard
            category={'Kişisel Bakım'}
            img={
              'https://th.bing.com/th/id/OIP.UVL5N3aG9mtFhXw0UE0xAgHaHa?pid=ImgDet&w=400&h=400&c=7'
            }
            buttonText='Alışverişe Başla'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <CategoryCard
            category={"İdeal TV'nizi bulun"}
            img={
              'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg'
            }
            buttonText='Daha fazlasını gör'
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <CategoryCard
            category={'Kıyafetler'}
            img={
              'https://statics.boyner.com.tr/mnresize/900/1254/productimages/5002839125_998_01.jpg'
            }
            buttonText='Daha fazlasını gör'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <CategoryCard
            category={'Oyuncaklar'}
            img={
              'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_2X._SY608_CB639759849_.jpg'
            }
            buttonText='Alışverişe Başla'
            isNew
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <CategoryCard
            category={'Fitness İhtiyaçlarınız'}
            img={
              'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg'
            }
            buttonText='Alışverişe Başla'
            titleWhite
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <CategoryCard
            category={'Bilgisyarlar'}
            img={'https://nextui.org/images/card-example-2.jpeg'}
            buttonText='Daha fazlasını gör'
            titleWhite
          />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default ProductList;
