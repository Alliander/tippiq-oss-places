/**
 * Attribute model.
 * @module modules/attributes/models/attribute
 */

import _ from 'lodash';
import debugLogger from 'debugnyan';

import BaseModel from '../../../common/base-model';

const debug = debugLogger('tippiq-places:attributes:models:attribute');

const instanceProps = {
  tableName: 'attribute',
  serialize(options) {
    const mergedOptions = options || {};
    switch (mergedOptions.context) {
      case 'attribute':
        return _.chain(BaseModel.prototype.serialize.apply(this, [mergedOptions]))
          .pick([
            'id',
            'placeId',
            'data',
          ])
          .value();
      default:
        debug.error('unknown serialization context \'%s\'', mergedOptions.context);
        return {};
    }
  },
};

const classProps = {};

export default BaseModel.extend(instanceProps, classProps);
