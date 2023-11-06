import Head from "next/head";
import TopBox from "@/components/Box/Top";
import ChartBox from "@/components/Charts/ChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "@/utils/data";
import BarChartBox from "@/components/Charts/BarChartBox";
import PieChartBox from "@/components/Charts/PieChartBox";
import BigChartBox from "@/components/Charts/BigChartBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Dashboard</title>
        <meta
          name="description"
          content="Dasboard made using Next and TailwindCss"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        style={{ gridAutoRows: "minmax(180px, auto)" }}
      >
        <TopBox />
        <ChartBox {...chartBoxUser} />
        <ChartBox {...chartBoxProduct} />
        <PieChartBox />
        <ChartBox {...chartBoxRevenue} />
        <ChartBox {...chartBoxConversion} />
        <BigChartBox />
        <BarChartBox {...barChartBoxVisit} />
        <BarChartBox {...barChartBoxRevenue} />
      </main>
    </>
  );
}
