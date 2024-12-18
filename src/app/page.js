'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  Features,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();
  console.log('ENV', process.env.NEXT_PUBLIC_API_KEY);
  return (
    <main
      style={{
        backgroundColor: '#FFFFFFFF',
      }}
    >
      <Navbar />

      <Hero
        variant='carousel'
        src={dataSite.image_hero}
        colorText='#FCFCFCFF'
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        images={[dataSite.image_hero, dataSite.image_hero2]}
        stylesContainerImage={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          padding: '50px',
        }}
        styleImage={{
          height: '60vh',
          margin: '30px auto',
          width: '95%',
          alignSelf: 'center',
          borderRadius: 30,
        }}
        styleTextSecondSection={{
          color: '#6AA5FFFF',
        }}
        withShadowText
        withSubView
      />

      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col' id='our-services'>
          <Typography.Title
            level={1}
            className='font-medium mb-10 text-center text-[#6AA5FFFF]'
          >
            We Offer for You
          </Typography.Title>
          <Features
            gridColumns={4}
            variant='background-img'
            features={dataSite.services.slice(0, 4)}
            brightness={7}
            textColor={'#fff'}
            borderRadius={40}
          />
        </div>
        <div style={{ zIndex: 2 }} className='flex flex-col px-48' id='know-us'>
          <Missions
            textColor='#fff'
            data={dataSite.info}
            gridColumns={3}
            variant='text'
            backgroundColor={'#6AA5FFFF'}
            borderRadius={40}
            bordered={true}
          />
        </div>
        <div id='courses'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={false}
              title='All Courses'
              gridColumns={3}
              variant='grid'
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='2'
              carouselOptions={{
                arrowColor: 'black',
                fade: true,
                autoPlay: false,
                direction: 'horizontal',
              }}
              backgroundItemColor='#FBFBFBFF'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='card'
            variant='carousel'
            backgroundColor='#6AA5FFFF'
            references={dataSite.references}
            gridColumns={3}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
