import { Story, Meta } from '@storybook/react'
import { ReactCharts, ReactChartsProps } from './react-charts'

export default {
  component: ReactCharts,
  title: 'ReactCharts',
} as Meta

const Template: Story<ReactChartsProps> = (args) => <ReactCharts {...args} />

export const SimpleBar = Template.bind({})
SimpleBar.args = {
  settings: {
    data: [{
      name: 'Antal',
      type: 'bar',
      values: [ 234, 197, 97, 12 ]
    }],
    categories: [
      'Signerade avtal (SEB)',
      'Påbörjade trials (Oxceed)',
      'Aktiverade prenumerationer',
      'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)',
    ],
  }
}

export const Pie = Template.bind({})
Pie.args = {
  settings: {
    title: 'Gold tickets',
    type: 'pie',
    data: [
      {
        name: 'Ej tilldelade',
        values: [ 700 ],
      },
      {
        name: 'Tilldelade',
        values: [ 200 ],
      },
      {
        name: 'Utnyttjade',
        values: [ 100 ],
      },
    ],
    legend: 'right',
  },
}

export const Donut = Template.bind({})
Donut.args = {
  settings: {
    title: 'Gold tickets',
    type: 'donut',
    data: [
      {
        name: 'Ej tilldelade',
        values: [ 700 ],
      },
      {
        name: 'Tilldelade',
        values: [ 200 ],
      },
      {
        name: 'Utnyttjade',
        values: [ 100 ],
      },
    ],
  },
}

export const Lines = Template.bind({})
Lines.args = {
  settings: {
    title: 'Diagramrubrik',
    data: [
      {
        name: 'Signerade avtal SEB',
        type: 'line',
        values: [10, 14, 6, 15],
      },
      {
        name: 'Påbörjade trials',
        type: 'line',
        values: [8, 9, 13, 11],
      },
      {
        name: 'Aktiverade prenumerationer',
        type: 'line',
        values: [3, 7, 9, 10],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
  },
}

export const Splines = Template.bind({})
Splines.args = {
  settings: {
    title: 'Diagramrubrik',
    type: 'spline',
    data: [
      {
        name: 'Signerade avtal SEB',
        values: [10, 14, 6, 15],
      },
      {
        name: 'Påbörjade trials',
        values: [8, 9, 13, 11],
      },
      {
        name: 'Aktiverade prenumerationer',
        values: [3, 7, 9, 10],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
  },
}

export const Mixed = Template.bind({})
Mixed.args = {
  settings: {
    title: 'Mixed graph',
    data: [
      {
        type: 'spline',
        name: 'Signerade avtal SEB',
        values: [10, 14, 6, 15],
      },
      {
        type: 'area',
        name: 'Påbörjade trials',
        values: [8, 9, 13, 11],
      },
      {
        type: 'bar',
        name: 'Aktiverade prenumerationer',
        values: [3, 7, 9, 10],
      },
    ],
    categories: ['jan', 'feb', 'mar', 'apr'],
    legend: 'right',
  },
}
