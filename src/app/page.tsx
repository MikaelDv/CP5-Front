import Ideias from "./ideias/page";

export default function Home() {
  return (
    <div className="principal flex flex-col min-w-full align-middle justify-center">
      <div className="livro max-w-7xl text-justify flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-center text-slate-800 dark:text-slate-50">Worlds in Collision</h1>
        <p className="text-lg text-slate-700 dark:text-slate-200">&emsp;&quot;Worlds in Collision&quot;, escrito por Immanuel Velikovsky e publicado em 1950, propõe uma visão revolucionária sobre a história da Terra e do Sistema Solar. Velikovsky argumenta que eventos cataclísmicos no passado, como a aproximação de Vênus à Terra, moldaram a história e a mitologia de várias civilizações. Ele desafia as explicações científicas tradicionais, integrando mitologia, história e astronomia. O livro gerou controvérsias significativas na comunidade científica, mas também atraiu um grande público, incentivando discussões sobre a interação entre ciência e a história cultural. A obra é um convite a reconsiderar como entendemos nosso lugar no cosmos e a influência dos eventos celestes na vida na Terra.</p>
      </div>
      <div className="cards">
        <Ideias/>
      </div>
    </div>

  );
}
