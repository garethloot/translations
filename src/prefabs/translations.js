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
          type: 'TEXT',
          label: 'Relation path',
          key: 'keyPath',
          value: '',
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
          type: 'TEXT',
          label: 'Relation path',
          key: 'valuePath',
          value: '',
        },
        {
          type: 'ENDPOINT',
          label: 'Redirect endpoint',
          key: 'endpoint',
          value: '',
        },
        {
          type: 'TOGGLE',
          label: 'Translate data',
          key: 'translateData',
          value: false,
        },
      ],
      descendants: [],
    },
  ],
}))();
