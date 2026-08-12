import type { CollectionConfig } from 'payload'

export const TrainingSessions: CollectionConfig = {
  slug: 'training-sessions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'location', 'seatsAvailable', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Vermicompost Basics Workshop"' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'seatsAvailable',
      type: 'number',
      required: true,
      defaultValue: 30,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'upcoming',
      required: true,
    },
  ],
}
