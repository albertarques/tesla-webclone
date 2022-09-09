import Columns from '../components/Columns'
import Column from '../components/Column'
import HeroBlock from '../components/HeroBlock'
import Layout from '../components/Layout'
import Media from '../components/bites/Media'
import Button from '../components/bites/Button'

export default function Home() {
  return (
    <Layout>
      <HeroBlock 
        picture="/img/Homepage-Model-S-Desktop-LHD.jpg" 
        alt="Modelo S en color rojo"
        title="Model S"
        p="Plaid"
      />
      <HeroBlock
        picture="/img/MS-Interior-Hero-Desktop.jpg"
        alt="Interior de Tesla Modelo S"
        title="El interior del futuro"
        textColor="white"
      />
      <Columns spacer="hor20">
        <Column>
          <Media
            picture="/img/MS-Interior-Grid-A-Desktop.jpg"
            alt="Interior del Tesla Model S"
          />
        </Column>
        <Column type="text">
          <h2 className='h2'>Permanezca conectado</h2>
          <p className='p'>Conéctese al instante con Bluetooth multidispositivo o cargue sus dispositivos con rapidez con la carga inalámbrica y USB-C de 36 vatios.</p>
        </Column>
      </Columns>
      <Columns order="rev" spacer="hor20">
        <Column>
          <Media 
            video="https://tesla-cdn.thron.com/static/PIUCZZ_MS-Interior-Grid-2-Audio-Desktop_CLFX4X.mp4?xseo="
            alt="Interior del Tesla Model S"
          />
        </Column>
        <Column type="text">
          <h2 className='h2'>Sonido envolvente</h2>
          <p className='p'>Un sistema de audio de 22 altavoces y 960 vatios con reducción activa de ruido de la carretera genera una escena sonora envolvente con una calidad de sonido de estudio.</p>
        </Column>
      </Columns>
      <Columns direction="hor" spacer="hor20">
        <Column>
          <Media
            picture="/img/MS-Interior-Grid-D-Desktop.jpg"
            alt="Maletero del Tesla Model S con una bicicleta cargada."
          />
        </Column>
        <Column type="text">
          <h2 className='h2'>Espacio para todo</h2>
          <p className='p'>Con los maleteros delantero y trasero, y los asientos abatibles, puedes llevar tu bicicleta sin desmontar la rueda delantera, y también tu equipaje.</p>
        </Column>
      </Columns>
      <Columns direction="ver" spacer="ver" background="black">
        <Column type="text" flag="center">
            <h2 className='h2'>Mantengase informado</h2>
            <p className='p'>Con nuestras últimas novedades, en su correo electrónico, semanalmente.</p>
        </Column>
        <Column>
          <Button href="/register" text="Quiero estar conectado" />
        </Column>
      </Columns>
    </Layout>
  )
}
