import * as echarts from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { useEffect } from "react";
import { TooltipComponent, LegendComponent } from "echarts/components";
import data from "../../dataset/data.json";

export const Treemap = () => {
  echarts.use([TreemapChart, TooltipComponent, SVGRenderer, LegendComponent]);

  useEffect(() => {
    const treemap = echarts.init(document.getElementById("treemap") as any);

    treemap.setOption({
      series: [
        {
          type: "treemap",
          data: [
            {
              name: "total pnl",
              value: data.reduce(
                (acc, val) => acc + Number(val.total_pnl.replace(",", "")),
                0
              ),
              children: data.map((d) => {
                return {
                  name: d.asset,
                  value: Number(d.total_pnl.replace(",", "")),
                  label: d.coin,
                  amount: d.total_pnl,
                };
              }),
            },
          ],
          breadcrumb: {
            show: false,
          },
          label: {
            show: true,
            formatter: (i: any) => `${i.data.name} $${i.data.amount}`,
          },
          levels: [
            {
              itemStyle: {
                borderWidth: 1,
                borderColor: "#333",
                gapWidth: 2,
              },
            },
            {
              color: ["#0a2045", "#152746", "#0c3883"],
              colorMappingBy: "value",
              itemStyle: {
                gapWidth: 1,
              },
            },
          ],
        },
      ],
      legend: {
        selectedMode: "single",
        top: 55,
        itemGap: 5,
        borderRadius: 5,
      },
    });
  });

  return <div className="h-[350px] w-full" id="treemap"></div>;
};
