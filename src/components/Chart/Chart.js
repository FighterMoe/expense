import React from "react"
import "./Chart.css"
import Card from "../UI/Card/Card"
import ChartBar from "./ChartBar/ChartBar"

const Chart = props => {

  const allValue = props.dataPoints.map( point => {
    return point.value
  })
  
  const maxValue = Math.max(...allValue);


  const chartbar = props.dataPoints.map( point => {
    return (
      <ChartBar 
        key={point.label}
        label={point.label}
        value={point.value}
        maxValue={maxValue}
      />
    )
  })

  return (
    <Card className="chart">
      {chartbar}
    </Card>
  )
}

export default Chart