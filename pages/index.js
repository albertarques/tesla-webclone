import HeroBlock from "../components/HeroBlock";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroBlock
        // Picture
        picture="/img/hero@2.jpg"
        alt="Modelo S en color rojo"
        // Texts
        title="El futuro de la movilidad, ahora"
        // Button
        button
        href="/model-s"
        buttonText="Saber más"
      />
    </Layout>
  );
}
