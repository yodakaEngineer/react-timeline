import { ComponentStory } from '@storybook/react'
import { ReactGanttCalendar } from '../src/ReactGanttCalendar'
import '../src/styles.scss'

export default {
  component: ReactGanttCalendar,
  title: 'ReactGanttCalendar',
}

const args = {
  columns: [
    {
      label: 'Hotel',
    },
    {
      label: 'Floor',
    },
    {
      label: 'Room',
    },
  ],
  rowHeads: [
    {
      id: '1',
      label: 'Hotel1',
      childRowHeads: [
        {
          id: '1',
          label: '1F',
          childRowHeads: [
            {
              id: '1',
              label: '101',
            },
            {
              id: '2',
              label: '102',
            },
          ],
        },
        {
          id: '2',
          label: '2F',
          childRowHeads: [
            {
              id: '3',
              label: '201',
            },
            {
              id: '4',
              label: '202',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      label: 'Hotel2',
    },
  ],
  rowContents: [
    {
      headIds: ['1', '1', '1'],
      events: [
        {
          label: 'Cleaning1',
          startAt: new Date('2022-08-25T16:00:00'),
          endAt: new Date('2022-08-27'),
        },
      ],
    },
    {
      headIds: ['1', '1', '2'],
      events: [
        {
          label: 'Cleaning2',
          startAt: new Date('2022-08-25T23:00:00'),
          endAt: new Date('2022-08-28'),
        },
        {
          label: ({ width }: { width: number }) => (
            <button style={{ width, textAlign: 'left' }}>Cleaning4</button>
          ),
          startAt: new Date('2022-08-25T20:00:00'),
          endAt: new Date('2022-08-27'),
        },
        {
          label: <button>Cleaning5</button>,
          startAt: new Date('2022-08-18T22:00:00'),
          endAt: new Date('2022-08-27'),
        },
      ],
    },
    {
      headIds: ['1', '2', '3'],
      events: [
        {
          label: 'Cleaning3',
          startAt: new Date('2022-09-07T16:00:00'),
          endAt: new Date('2022-09-09'),
        },
      ],
    },
  ],
}

const Template: ComponentStory<typeof ReactGanttCalendar> = (args) => (
  <ReactGanttCalendar {...args} />
)

export const Default = Template.bind({})
Default.args = args
