import { EarningChartBox, ChartBox } from "./EarningChart.styled"

export default function EarningChart() {
  return (
    <EarningChartBox>
        <div>
            <h6>Earning Overview</h6>
            <hr />
        </div>
        <ChartBox>Chart</ChartBox>
    </EarningChartBox>
  )
}
