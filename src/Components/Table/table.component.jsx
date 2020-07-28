import React from 'react'
import './table.styles.css'

export const Table = () => {
    return (
        <div>
            <table>
  <tr>
    <th rowspan='2'>Units</th>
    <th colspan='2'>Tariff Charges</th> 
    <th rowspan='2'>From</th>
    <th rowspan='2'>To</th>
    <th rowspan='2'>Cost</th>
  </tr>
  <tr>
    <th>Fixed</th>
    <th>Subsidy</th>
  </tr>
  <tr>
    <td>&#x2264;100</td>
    <td>&#8377;0</td>
    <td>&#8377;150</td>
    <td>1</td>
    <td>100</td>
    <td>&#8377;1.50</td>
  </tr>
  <tr>
    <td>&#x2264;200</td>
    <td>&#8377;20</td>
    <td>&#8377;150</td>
    <td>1</td>
    <td>200</td>
    <td>&#8377;1.50</td>
  </tr>
  <tr>
    <td rowspan='3'>&#x2264;500</td>
    <td rowspan='3'>&#8377;30</td>
    <td rowspan='3'>&#8377;150</td>
    <td>1</td>
    <td>100</td>
    <td>&#8377;1.50</td>
  </tr>
  <tr>
    <td>101</td>
    <td>200</td>
    <td>&#8377;2.00</td>
  </tr>
   <tr>
    <td>201</td>
    <td>500</td>
    <td>&#8377;3.00</td>
  </tr>
  <tr>
    <td rowspan='4'>&gt;500</td>
    <td rowspan='4'>&#8377;50</td>
    <td rowspan='4'>&#8377;150</td>
    <td>1</td>
    <td>100</td>
    <td>&#8377;1.50</td>
  </tr>
  <tr>
    <td>101</td>
    <td>200</td>
    <td>&#8377;3.50</td>
  </tr>
   <tr>
    <td>201</td>
    <td>500</td>
    <td>&#8377;4.60</td>
  </tr>
  
   <tr>
    <td colspan='2'>500</td>
    <td>&#8377;6.60</td>
  </tr>
  
</table>

        </div>
    )
}
