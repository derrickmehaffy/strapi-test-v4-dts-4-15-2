import type { Schema, Attribute } from '@strapi/strapi';

export interface TestTestCompo extends Schema.Component {
  collectionName: 'components_test_test_compos';
  info: {
    displayName: 'testCompo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    blahs: Attribute.Relation<'test.test-compo', 'oneToMany', 'api::blah.blah'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.test-compo': TestTestCompo;
    }
  }
}
