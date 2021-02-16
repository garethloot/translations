(() => ({
  name: 'Translations',
  icon: 'ContainerIcon',
  category: 'TRANSLATIONS',
  structure: [
    {
      name: 'translations',
      options: [
        {
          type: 'CUSTOM',
          label: 'Fetch type',
          key: 'fetchType',
          value: 'onMount',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'On Mount',
                value: 'onMount',
              },
              {
                name: 'Interaction',
                value: 'interaction',
              },
            ],
          },
        },
        {
          type: 'MODEL',
          label: 'Model',
          key: 'modelId',
          value: '',
        },
        {
          type: 'FILTER',
          label: 'Filter',
          key: 'filter',
          value: {},
          configuration: {
            dependsOn: 'modelId',
          },
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
          key: 'translateData',
          value: false,
        },
      ],
      descendants: [],
    },
  ],
}))();
