(() => ({
  name: 'Translations',
  icon: 'ContainerIcon',
  category: 'TRANSLATIONS',
  structure: [
    {
      name: 'translations',
      options: [
        {
          type: 'MODEL',
          label: 'Model',
          key: 'modelId',
          value: '',
        },
        {
          type: 'PROPERTY',
          label: 'Key property',
          key: 'keyProperty',
          value: '',
          configuration: {
            dependsOn: 'modelId',
          },
        },
        {
          type: 'PROPERTY',
          label: 'Value property',
          key: 'valueProperty',
          value: '',
          configuration: {
            dependsOn: 'modelId',
          },
        },
        {
          type: 'TOGGLE',
          label: 'Translate data',
          key: 'translateProperties',
          value: false,
        },
      ],
      descendants: [],
    },
  ],
}))();
